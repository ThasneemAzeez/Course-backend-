const mongoose = require("mongoose")
const scheema = mongoose.Schema(
    {
    "coursetitle": { type: String, required: true },
    "description": { type: String, required: true },
    "date": { type: Date, required: true },
    "duration": { type: String, required: true },
    "venue": { type: String, required: true },
    "trainername": { type: String, required: true }
}
)

let coursemodel = mongoose.model("courses",scheema);
module.exports={coursemodel}