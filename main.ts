// Charm the Commuter: Forecast a City That Isn't
// Writes one one-line weather forecast for an invented city to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Puddleton: rain at eight, drizzle at nine, and a brief, embarrassed appearance by the sun around noon.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
