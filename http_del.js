import http from 'k6/http';
import { check } from "k6";

export default function () {
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    
    const res = http.delete('https://jsonplaceholder.typicode.com/todos/21',
    payload, params);
        check(
        res,
        {
            'response code was 200': (res) => res.status == 200,
        },
    );
}
