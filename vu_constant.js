import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    scenarios: {
        contacts: {
        executor: 'constant-vus',
        vus: 20,
        duration: '40s',
        },
    },
};
export default function () {
    http.get('http://test.k6.io/public/crocodiles/');
    sleep(1);
}
