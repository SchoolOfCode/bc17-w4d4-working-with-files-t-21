import fs from "node:fs/promises";
import { parse } from "node:path";
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";

export async function getQuotes() {
  try {
    const data = await fs.readFile(fileName, "utf8");
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

getQuotes();

export async function addQuote(quoteText1) {
  const newQuote = { id: uuidv4(), quoteText: "placeholder" };
  newQuote.quoteText = quoteText1;
  console.log(newQuote);
  const parsedRead = await getQuotes();
  console.log(parsedRead);
  parsedRead.push(newQuote);
  console.log(parsedRead);
}
addQuote("this is soooo hard");

// Inside `quote.js` find the `addQuote` function.

// The function should:

// - take in quoteText (String)
// - create a quote object
// - assign a unique id to the quote object (using a v4 uuid)
// - read/parse all quote objects from `quotes.json`
// - save the quote object to the `quotes.json` file at the end of the array
// - return the newly created quote object

export async function getRandomQuote() {}

export async function editQuote(id, quoteText) {}

export async function deleteQuote(id) {}
