import { copyFile, mkdir } from "node:fs/promises";

await mkdir("dist", { recursive: true });

for (const file of ["index.html", "style.css", "script.js"]) {
  await copyFile(file, `dist/${file}`);
}

console.log("Birthday card copied to dist/");
