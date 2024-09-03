import { $ } from "@wdio/globals";

describe("Testing framework Final with Accuweather", () => {
  it("Testcase", async () => {
    browser.url("https://www.accuweather.com/");
    await $(`//div[contains(@class, 'policy-accept')]`).click();
    await $(`//input[@name='query']`).setValue("New York");
    browser.pause(7000);
    await $(`//div[@class="results-container"]/div[1]`).click();
  });
});
