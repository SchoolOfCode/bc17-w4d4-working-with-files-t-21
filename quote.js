import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";

export async function getQuotes(filePath) {
try { 
    const data = await readFile(filePath, 'utf8');
    JSON.parse(data);
    console.log(data);
    } catch (error) {
    console.error('Error reading file:', error);
}
};

getQuotes("quotes.json")

//not take in any arguments
//read/parse all quote objects from quotes.json
//return an array of all existing quote objects



export async function addQuote(quoteText) {

}

export async function getRandomQuote() {

}

export async function editQuote(id, quoteText) {

}

export async function deleteQuote(id) {

}
