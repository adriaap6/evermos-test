import http from 'k6/http';
import { check } from 'k6';

export default function () {
    let payload = JSON.stringify({
        name: "morpheus",
        job: "zion resident"
    });

    let headers = {
        'Content-Type': 'application/json'
    };

    let response = http.put('https://reqres.in/api/users/2', payload, { headers: headers });

    check(response, {
        'Status is 200': (r) => r.status === 200
    });

    check(response, {
        'Correct Name': (r) => JSON.parse(r.body).name === 'morpheus',
        'Correct Job': (r) => JSON.parse(r.body).job === 'zion resident'
    });
}
