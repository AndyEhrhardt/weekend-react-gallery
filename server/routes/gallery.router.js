const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const galleryItems = require('../modules/gallery.data');

router.put('/:id', (req, res) => {
    console.log(req.params);
    const picId = req.params.id;
    const sqlText = `UPDATE PICTURES SET likes = likes + 1 WHERE id = $1`
    pool.query(sqlText, [picId])
    .then((response) => {
        console.log('added like');
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`error adding like with ${sqlText}`);
        res.sendStatus(500);
    })
}); 

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM pictures ORDER BY id`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got pictures from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error getting the pictures ${sqlText}`, error);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {
    let picture = req.body;
    const sqlText = `INSERT INTO pictures ("path", "description")
    VALUES ($1, $2)`;
    pool.query(sqlText, [picture.path, picture.description])
    .then(() => {
        console.log('Picture added to database', picture);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Error adding picture to database', error)
        res.sendStatus(500)
    })
})  

router.delete('/:id', (req, res) => {
    const pictureId = req.params.id;
    const sqlText = 'DELETE FROM pictures WHERE id = $1'
    pool.query(sqlText, [pictureId])
    .then(() => {
        console.log('Deleted picture with id', pictureId);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Error deleting picture from database', error)
        res.sendStatus(500)
    })
})  

module.exports = router;