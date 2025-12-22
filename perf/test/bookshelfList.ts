import http from "k6/http";
import { booksUrls } from "../data/urls.ts";
import { sleep, check } from "k6";

export const options = {
  stages: [
    { duration: "3m", target: 200 },
    { duration: "5m", target: 200 },
    { duration: "3m", target: 0 },
  ],
};

export default () => {
  const response = http.get(booksUrls.bookshelf.list);
  check(response, { "200": (r) => r.status === 200 });
  sleep(1);
};
