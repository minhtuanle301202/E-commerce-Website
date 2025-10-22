const database = require('./database/database');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const productRoute = require('./routes/ProductRoute');

app.use(express.json());
app.use(cors());


const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage});
app.use('/images',express.static('./upload/images'));
app.post("/upload",upload.single('product'),(req,res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    })
})
app.use('/',productRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

database.connectDB();

module.exports = app;
