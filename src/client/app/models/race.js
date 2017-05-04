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
        type: String
    },
    finish: {
        type: String
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
        type: String
    },
    racers: [RacerSchema]
})

module.exports = mongoose.model('Races', RaceSchema);
