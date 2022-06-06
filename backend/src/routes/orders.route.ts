import express from "express";
const router = express.Router();

router.post('/orders', (req, res) => {
    res.send('Created order!');
    res.status(200);
});

export default router;