import http from "k6/http";
import { booksUrls } from "../data/urls.ts";
import { sleep, check } from "k6";

export default () => {
  const url = booksUrls.bookshelf.shelf
    .replace("userId", "1")
    .replace("shelf", "1");
  const response = http.get(url);
  check(response, { "200": (r) => r.status === 200 });
  sleep(1);
};
