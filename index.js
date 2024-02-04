require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5050;

const remindersRoute = require("./routes/remindersRoute");
const goalsRoute = require("./routes/goalsRoute");
const journalRoute = require("./routes/journalRoute");

// const { CORS_ORIGIN } = process.env;
// app.use(cors({ origin: CORS_ORIGIN }));

app.use(cors());
app.use(express.json());

app.use("/reminders", remindersRoute);
app.use("/goals", goalsRoute);
app.use("/journal", journalRoute);

app.get("/", (_req, res) => {
	res.send("Welcome to RemindMii API");
});

app.listen(PORT, () => {
	console.log(`Server Started on http://localhost:${PORT}`);
	console.log("Press CTRL + C to stop server...");
});

module.exports = app;
