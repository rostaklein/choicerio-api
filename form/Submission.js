var mongoose = require('mongoose');  
var SubmissionSchema = new mongoose.Schema({  
  candidate: {type: mongoose.Schema.Types.ObjectId, ref: 'Candidate'},
  submitedOn: {type: Date, default: Date.now},
  form: {type: mongoose.Schema.Types.ObjectId, ref: 'Form'},
  answers: [
        {
          question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'},
          vote: Number
        }
    ],
});
mongoose.model('Submission', SubmissionSchema);

module.exports = mongoose.model('Submission');