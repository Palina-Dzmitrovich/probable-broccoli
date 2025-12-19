import http from "k6/http";
import { booksUrls } from "../data/urls.ts";
import { sleep } from "k6";

export const options = {
  iterations: 10,
};

export default () => {
  http.get(booksUrls.bookshelf.list);
  sleep(1);
};
