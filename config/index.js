/**
 * Created by user on 17/03/2017.
 */

var dotenv = require('dotenv');
var mongoose = require ('mongoose');

dotenv.config();

mongoose.connect('mongodb://' + process.env.DB_USER +
    ':' + process.env.DB_PASSWORD +
    '@' + process.env.DB_HOST +
    ':' + process.env.DB_PORT +
    '/' + process.env.DB_NAME);