const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

//GET ALL MOVIES
router.get("/", (req, res) => {
    const queryText = `SELECT "id", "title", "poster", "description" FROM "movies" ORDER BY "title" ASC;`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movies query', err);
            res.sendStatus(500);
        });
});


module.exports = router;