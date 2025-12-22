import bookshelfByUser from "./bookshelfByUser.ts";
import bookshelfList from "./bookshelfList.ts";

export const options = {
  scenarios: {
    testB1: {
      executor: 'ramping-vus',
      exec: "runTestB1",
      stages: [
        { duration: "3m", target: 200 },
        { duration: "5m", target: 200 },
        { duration: "3m", target: 0 },
      ],
    },
    testB2: {
      executor: 'ramping-vus',
      exec: "runTestB2",
      stages: [
        { duration: "1m", target: 100 },
        { duration: "3m", target: 100 },
        { duration: "1m", target: 0 },
      ],
    },
  },
};

export function runTestB1() {
  bookshelfList();
}
export function runTestB2() {
  bookshelfByUser();
}
