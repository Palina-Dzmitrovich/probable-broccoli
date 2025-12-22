import http from "k6/http";
import { harryPotterUrls } from "../data/urls.ts";
import { sleep, check } from "k6";

export default () => {
  const response = http.get(harryPotterUrls.books.list);
  check(response, { "200": (r) => r.status === 200 });
  sleep(1);
};
