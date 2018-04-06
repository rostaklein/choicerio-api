var mongoose = require('mongoose');
mongoose.connect('mongodb://'+process.env.DBUSER+':'+process.env.DBPASS+'@ds129428.mlab.com:29428/secure-api-test');