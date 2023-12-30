import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export let options = {
    vus: 1000,          
    duration: '30s',   
    iterations: 3500,   
    thresholds: {
        'http_req_duration': ['p(95)<2000'], 
    },
};

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
}

export function handleSummary(data) {
    return {
        "data.html": htmlReport(data),
    };
}   