import { urls } from "../data/urls";
import BasePage from "./BasePage";

export class Homepage extends BasePage {
  public url: string = urls.home;
  public title =
    "Fast and reliable end-to-end testing for modern web apps | Playwright";
}
