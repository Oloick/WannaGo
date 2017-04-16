/**
 * Created by user on 17/03/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reservationSchema = new Schema({
    prix:{
        type:Number
    },
    date:{
        type: String
    }
});
module.exports = mongoose.model('Reservation', reservationSchema);
