module.exports = {
    multipleMongooseObject: function (mongooseArray) {
        return mongooseArray.map((mongoose) => mongoose.toObject());
    },
    mongooseObject: (mongoose) => mongoose.toObject(),
};
