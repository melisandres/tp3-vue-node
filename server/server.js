const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')
const path = require('path');
const app = express()
const corsOption = {
 origin: 'http://localhost:8081'
}
app.use(cors(corsOption))

//configure multers and filenames
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Folder where files will be stored
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});
//create multer middleware instance
const upload = multer({ storage: storage });

//models
const db = require('./app/models')
//Sequelize
db.connex.sync()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))
//test
app.get('/', (req, res) => {
 res.json({message: 'Welcome'})
})
//route
require('./app/routes/product.route')(app, upload)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}.`)
})
