import { watchFile } from "fs";

setInterval(async () => {
  await Bun.write("test.txt", new Date().toLocaleTimeString());
  console.log("wrote", new Date().toLocaleTimeString());
}, 1000);

watchFile("test.txt", async () => {
  console.log("read", await Bun.file("test.txt").text());
});
