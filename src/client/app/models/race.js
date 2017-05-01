const mongoose = require('mongoose'), Schema = mongoose.Schema;

const RacerSchema = new Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    team: {
        type: String
    },
    start: {
        type: Number
    },
    finish: {
        type: Number
    },
    time: {
        type: Number,
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
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    skill: {
        type: String
    },
    distance: {
        type: Number
    },
    racers: [RacerSchema]
})

module.exports = mongoose.model('Races', RaceSchema);
