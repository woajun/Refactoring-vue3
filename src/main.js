import { createApp } from "vue";
import App from "./App.vue";

class Executor {
  constructor(buttonName, result, expect) {
    this.name = buttonName;
    this.result = JSON.stringify(result);
    this.expect = JSON.stringify(expect);
  }
}

const executor = function (buttonName, result, expect) {
  return new Executor(buttonName, result, expect);
};

const app = createApp(App);
app.config.globalProperties.createExecutor = executor;
app.mount("#app");
