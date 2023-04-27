const express = require('express');
const app = express();
const port = 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});