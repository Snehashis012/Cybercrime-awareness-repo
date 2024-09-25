import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

server.use(express.static(path.join(__dirname, 'Public')));

// Define routes for specific pages

server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

server.get("/child", (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'Child.html'));
});

server.get("/financial", (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'Financial.html'));
});

server.get("/types", (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'Types.html'));
});

server.get("/woman", (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'Woman.html'));
});

// console.clear()

// Start the server
server.listen(8000, () => console.log("Server is running on http://localhost:8000"));



// here is the process how you can run the webpages

// in terminal just write cd cyber-scam-wareness 
// then enter
// then run this code
// npm run dev
//then go to any browser like chrome or firefox
// in a new webpage in the url section just write this
// localhost:8000/
// it will lead you to the index.html file
//if you change the url to 
//localhost:8000/woman i twill go to the woman.html file and by changing the url after / you can go to the desired html pages 
