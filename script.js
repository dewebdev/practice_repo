import figlet from "figlet";
import { name } from "./index.js";

const names = process.argv;

for (let i = 2; i < names.length; i++) {
  figlet(names[i] + name, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
}
