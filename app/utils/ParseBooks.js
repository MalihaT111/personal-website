import fs from "fs";
import { parse } from "csv-parse/sync";

function parseGoodreadsCSV(pathToCsv) {
  // read CSV file from same directory
  const csvData = fs.readFileSync(pathToCsv, "utf-8");

  // parse CSV into records
  const records = parse(csvData, {
    columns: true,
    skip_empty_lines: true,
  });

  // filter for "to-read" shelf
  const toRead = records.filter(
    (row) => row["Exclusive Shelf"]?.toLowerCase() === "to-read"
  );

  // clean data into simple usable objects
  const books = toRead.map((row) => ({
    title: row["Title"],
    author: row["Author"],
    pages: row["Number of Pages"],
    average_rating: row["Average Rating"],
    added: row["Date Added"],
  }));

  return books;
}

// ---- RUN SCRIPT ----

const INPUT_CSV = "./goodreads_library_export.csv"; // same folder
const OUTPUT_JSON = "./books.json";

const books = parseGoodreadsCSV(INPUT_CSV);

// write to JSON file
fs.writeFileSync(OUTPUT_JSON, JSON.stringify(books, null, 2));

console.log(`✓ Parsed ${books.length} books`);
console.log(`✓ Saved to ${OUTPUT_JSON}`);
