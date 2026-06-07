import { readFileSync, writeFileSync } from "fs";

const text = readFileSync("Menschen.txt", "utf8");

const cards = text
  .split("\n")
  .filter(
    line =>
      line.includes("\t") &&
      !line.startsWith("#")
  )
  .map((line, index) => {
    const [german, english] = line.split("\t");

    return {
      id: index + 1,
      level: "B1",
      german: german.trim(),
      english: english.trim()
    };
  });

writeFileSync(
  "flashcards.json",
  JSON.stringify(cards, null, 2)
);