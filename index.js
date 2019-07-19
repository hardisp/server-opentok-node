const express = require("express")
const cors = require("cors")
const session = require("./router/session")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("This is just example")
})

app.use("/api/session", session)

const PORT = process.env.PORT || 3232
app.listen(PORT, () => console.log(`Listen to PORT ${PORT}`))
