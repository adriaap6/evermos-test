import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {

    let payload = JSON.stringify({
        name: "morpheus",
        job: "leader"
    });

    let headers = {
        'Content-Type': 'application/json'
    };

    let response = http.post('https://reqres.in/api/users', payload, { headers: headers });

    check(response, {
        'Status is 201': (r) => r.status === 201
    });

    check(response, {
        'Has ID': (r) => JSON.parse(r.body).hasOwnProperty('id'),
        'Correct Name': (r) => JSON.parse(r.body).name === 'morpheus',
        'Correct Job': (r) => JSON.parse(r.body).job === 'leader'
    });

    sleep(1);
}
