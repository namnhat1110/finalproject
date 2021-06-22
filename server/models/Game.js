const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = Schema(
  {
    game_id: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: false },
    release_date: { type: Date, required: false, unique: false },
    genre: { type: String, required: true, unique: false },
    tags: { type: String, required: true, unique: false },
    developer: { type: String, require: true, unique: false },
    publisher: { type: String, require: true, unique: false },
    snippet: { type: String, require: true, unique: false },
    description: { type: String, require: true, unique: false },
    minimum_requirements: { type: String, required: true, unique: false },
    recommended_requirements: { type: String, required: true, unique: false },
    original_price: { type: Number, required: false, unique: false },
    discount_price: { type: Number, required: false, unique: false },
    price: { type: Number, required: true, unique: false },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    rating: [{ type: Schema.Types.ObjectId, ref: "Ratings" }],
  },

  {
    timestamps: true,
  },
);


const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
