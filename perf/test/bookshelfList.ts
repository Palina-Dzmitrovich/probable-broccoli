import http from "k6/http";
import { booksUrls } from "../data/urls.ts";
import { sleep, check } from "k6";

export default () => {
  const response = http.get(booksUrls.bookshelf.list);
  console.log(`STATUS: ${response.status}`);
  check(response, { "200": (r) => r.status === 200 });
  sleep(1);
};
