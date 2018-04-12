var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Submission = require("./Submission");

router.post('/', (req, res) => {
    if(!req.body.form || req.body.form.length==0){
        return res.status(500).send({msg: "No form set."})
    }
    if(!req.body.answers || req.body.answers.length==0){
        return res.status(500).send({msg: "No answers set."})
    }

    let submission = {
        form: req.body.form,
        answers: req.body.answers
    };
    if(req.body.candidate){
        submission = {
            ...submission,
            candidate: req.body.candidate
        }
    }

    Submission.create(submission,
    (err, submission) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(submission);
    })

}
    
    
);

module.exports = router;