import http from 'k6/http';
import { check } from "k6";

export default function () {
    const payload = JSON.stringify({
        userId: '1',
        id: '21',
        title: 'finish task 4',
        completed: 'false'
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const res = http.post('https://jsonplaceholder.typicode.com/todos',
    payload, params);
        check(
            res,
            {
            '   response code was 201': (res) => res.status == 201,
            },
        );
    }
