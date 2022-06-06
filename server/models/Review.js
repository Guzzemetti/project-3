const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    reviewText: {
        type: String,
        required: true,
        trim: true
    },
    reviewRating: {
        type: Integer,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    lesson: {
        type: Schema.Types.ObjectId,
        ref: 'Lesson',
        required: true
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;