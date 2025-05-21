import express from "express";
const router = express.Router();
import {AddProverbs, getProverbData, saveProverbs} from "../utils/proverbUtil.js";


// =========================================================  //
// ==================== GET ALL PROVERBS =====================//
// =========================================================  //
router.get('/', (req, res) => {
    try {
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
        proverb.id = Date.now();
        AddProverbs(proverb);
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