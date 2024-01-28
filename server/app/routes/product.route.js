module.exports = app => {
    const product = require('../controllers/product.controller.js')
    const router = require('express').Router()
    router.get('/', product.findAll)
    router.post('/', product.create)
    router.get('/:id', product.findOne)
    router.delete('/:id', product.delete)
    router.put('/:id', product.update)

    // New route for handling file uploads
/*     router.post('/uploadPhoto', upload.single('photo'), (req, res) => {
        const filename = req.file.filename;
        res.json({ filename });
    }); */

    app.use('/api/product', router)
}