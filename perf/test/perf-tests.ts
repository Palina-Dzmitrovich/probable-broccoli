import bookRandom from "./bookRandom.ts";
import booksList from "./booksList.ts";

export const options = {
  scenarios: {
    testB1: {
      executor: 'ramping-vus',
      exec: "runTestB1",
      stages: [
        { duration: "1m", target: 200 },
        { duration: "2m", target: 200 },
        { duration: "1m", target: 0 },
      ],
    },
    testB2: {
      executor: 'ramping-vus',
      exec: "runTestB2",
      stages: [
        { duration: "1m", target: 100 },
        { duration: "2m", target: 100 },
        { duration: "1m", target: 0 },
      ],
    },
  },
  thresholds: {
    http_req_duration: ['p(95)<500'],
  },
};

export function runTestB1() {
  booksList();
}
export function runTestB2() {
  bookRandom();
}
