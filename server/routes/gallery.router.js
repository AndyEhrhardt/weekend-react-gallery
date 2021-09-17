const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
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
}); // END PUT Route

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




module.exports = router;