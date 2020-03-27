const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        
    type: {
        type: String,
        trim: true,
        required: "Enter the type of workout"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for workout"
    },
    duration: {
        type: Number,
        required: "Enter the workout duration"
    },
    weigtht: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }

}
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;