import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 15,
    duration: '45s',
    };
    export default function () {
    http.get('http://test.k6.io/public/crocodiles/');
    sleep(1);
    }
