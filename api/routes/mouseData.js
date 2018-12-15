const router = require('express').Router();

const MouseData = require('../models/mouseData');

router.get('', (req, res, next) => {
    MouseData.find()
    .then(documents => {
        res.status(200).json({
            message: "Mouse Data Fetched Successfully",
            mouseData: documents
        });
    })
    .catch(error => {
        res.status(500).json(
            {
                message: 'Failed to fetch Mouse Data',
                error: error
            }
        );
    });
});


router.post('', (req, res, next) => {
    console.log('Posting...');
    console.log(req.body);
    MouseData
    .findOneAndUpdate(
        { "avenger": req.body.avenger }, 
        { $set: 
            { "avenger": req.body.avenger, "clicks": req.body.clicks, "hovers": req.body.hovers } 
        }, 
        { upsert: true }, 
        (err, docs) => {
            if (err) {
                console.log('Error Occurred', err);
            }
            console.log('Success !', docs);
        }
    );
});

module.exports = router;