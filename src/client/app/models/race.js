const mongoose = require('mongoose'), Schema = mongoose.Schema;

const RacerSchema = new Schema({
    time: {
        type: String,
        required: true
    },
    grade: {
        type: String
    }
});

var RaceSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    raceDate: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    distance: {
        type: Number
    },
    racers: [RacerSchema]
})

module.exports = mongoose.model('Races', RaceSchema);
