import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

// __dirname setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFileDir = path.join(__dirname, '../..');
const proverbData = path.join(dataFileDir, 'data.json');

export const getProverbData = () => {
    return fs.readFileSync(proverbData, "utf-8");
}

export const saveProverbs = (proverb) => {
    return fs.writeFileSync(proverbData, JSON.stringify(proverb, null, 2));
}

export const AddProverbs = (proverb) => {
    let currentData = [];

    try {
        const fileContent = getProverbData();
        currentData = JSON.parse(fileContent);

    } catch (err) {
        console.warn("data.json was unreadable or empty. Starting fresh.");
        currentData = [];
    }

    currentData.push(proverb);
    fs.writeFileSync(proverbData, JSON.stringify(currentData, null, 2));
}
