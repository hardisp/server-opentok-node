const express = require("express")
const router = express.Router()

const session = require("../utils/session")

router.get("/", async (req, res) => {
  res.send(await session())
})

module.exports = router
