import http from 'k6/http';
import { check } from "k6";

export default function () {
    const res = http.get('https://jsonplaceholder.typicode.com/todos');
    const checkOutput = check(
        res,
        {
        'response code was 200': (res) => res.status == 200,
        },
    );
}