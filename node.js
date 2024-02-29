import { watchFile } from "fs";
import { readFile } from "fs/promises";
import { writeFile } from "fs/promises";

setInterval(async () => {
  await writeFile("test.txt", new Date().toLocaleTimeString());
  console.log("wrote", new Date().toLocaleTimeString());
}, 1000);

watchFile("test.txt", async () => {
  console.log("read", await readFile("test.txt", 'utf-8'));
});
