const express = require("express");
const app = express();
const PORT = 3000;

// Simple Api endpoint
app.get("/", (req, res) =>{
    res.send("Hello, world! From the server");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});