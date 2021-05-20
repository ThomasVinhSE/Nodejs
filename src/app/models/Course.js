const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema(
    {
        id: ObjectId,
        name: { type: String, maxLength: 255, default: '' },
        description: {
            type: String,
            maxLength: 255,
            default: 'Courses for learning',
        },
        image: { type: String, maxLength: 255 },
        videoid: { type: String },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
