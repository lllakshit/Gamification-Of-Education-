const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/chat', upload.single('file'), (req, res) => {
    const message = req.body.message;
    const file = req.file;

    // Implement your chatbot logic here
    let reply = 'I am a chatbot.';

    if (file) {
        const filePath = path.join(__dirname, file.path);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        // Process the file content and generate a reply based on it
        reply = `File content received: ${fileContent.substring(0, 100)}...`;
    }

    res.json({ reply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});