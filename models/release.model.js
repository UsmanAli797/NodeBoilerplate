import mongoose from "mongoose";
const { Schema } = mongoose;

const newReleaseSchema = new Schema({
    image: String,
    duplicateCount: { type: Number, default: 0 },
    sport: String,
    year: Number,
    brand: String,
    team: String,
    releaseDate: Date,
    boxOrCaseBreak: String,
    pytOrRandomBreak: String,
    breaker: String,
    price: Number,
    description: String,
    prices: [{
        vendor: String,
        product: String,
        price: Number,
        seller: String,
        date: Date,
        sellerLink: String
    }],
}, {
    timestamps: true
});

export default mongoose.model("Release", newReleaseSchema)