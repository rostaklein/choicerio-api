var mongoose = require('mongoose');
mongoose.connect('mongodb://'+process.env.DBUSER+':'+process.env.DBPASS+'@'+process.env.DB);