import mongoose from "mongoose";
const { Schema } = mongoose;

const dropdownSchema = new Schema({
    sports: [
        { sport: String }
    ],
    brands: [
        { brand: String }
    ],
    teams: [
        { team: String }
    ],
    boxOrCaseBreaks: [
        { boxOrCaseBreak: String }
    ],
    pytOrRandomBreaks: [
        { pytOrRandomBreak: String }
    ],
    breaker: [
        { breaker: String }
    ],
}, {
    timestamps: true
});

export default mongoose.model("DropDown", dropdownSchema)