const router = require('express').Router();

router.get("/", (req, res) => {
    res.json({ message: "Hello from grades router!" })
})

module.exports = router;