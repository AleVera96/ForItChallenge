const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Testing router")
})

module.exports = router;