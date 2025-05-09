import express from "express";

const router = express.Router();
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
import {AddProverbs, getProverbData, saveProverbs} from "../utils/proverbUtil.js";

// __dirname setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//
const dataFileDir = path.join(__dirname, '..');
const proverbData = path.join(dataFileDir, 'data.json');


// =========================================================  //
// ==================== GET ALL PROVERBS =====================//
// =========================================================  //

router.get('/', (req, res) => {
    try {
        // const data = fs.readFileSync(proverbData, "utf-8");
        const data = getProverbData();
        res.send(JSON.parse(data));
    } catch (err) {
        res.status(500).json({error: "Failed to load data"});
    }
});


// =========================================================  //
// ===================== ADD N NEW PROVERB ===================//
// =========================================================  //

router.post('/', (req, res) => {
    try {
        const proverb = req.body;
        console.log(proverb);
        AddProverbs(proverb);
        // saveProverb(proverb);
        res.send(proverb);
    } catch (err) {
        console.error("POST / error:", err);
        res.status(500).json({error: "Failed to post proverb"});
    }
});


// =========================================================  //
// =============== GET A SINGLE PROVERB BY ID  ===============//
// =========================================================  //

router.get('/:id', (req, res) => {
    try {
        const id = req.params.id;
        const allProverbs = getProverbData();
        const data = JSON.parse(allProverbs);
        const proverb = data.find(item => item.id == id);

        if (proverb) {
            res.send(proverb);
        } else {
            res.status(404).json({error: "Proverb not found"});
        }

    } catch (err) {
        res.status(500).json({error: "Failed to load data"});
    }

});


// =========================================================  //
// =============== UPDATE AN EXISTING PROVERB ================//
// =========================================================  //
router.put('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const newProverb = req.body;
        const proverbs = JSON.parse(getProverbData());

        const proverbIndex = proverbs.findIndex(proverb => proverb.id === id);

        if (proverbIndex !== -1) {
            proverbs[proverbIndex] = { ...proverbs[proverbIndex], ...newProverb };
            saveProverbs(proverbs);
            res.json(proverbs[proverbIndex]);
        } else {
            res.status(404).json({ error: "Proverb not found" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to load data" });
    }
});



// =========================================================  //
// ===================== DELETE A PROVERB ====================//
// =========================================================  //

router.delete('/:id', (req, res) => {
    try {
        const allProverbs = JSON.parse(getProverbData());
        const idToDelete = req.params.id;

        const index = allProverbs.findIndex(p => String(p.id) === idToDelete);

        if (index !== -1) {
            allProverbs.splice(index, 1);
            saveProverbs(allProverbs);
            res.status(200).json({message: "Proverb deleted successfully"});
        } else {
            res.status(404).json({error: "Proverb not found"});
        }
    } catch (err) {
        console.error("DELETE /:id error:", err);
        res.status(500).json({error: "Failed to delete proverb"});
    }
})

export default router;