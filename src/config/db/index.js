const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Connection mongoDB successfully');
    } catch (error) {
        console.log('Connection mongoDB failed');
    }
}

module.exports = { connect };
