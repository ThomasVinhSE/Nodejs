const Course = require('../models/Course');
const { multipleMongooseObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        // Course.find({},(err,courses) => {
        //     if(!err)
        //         res.json(courses);
        //     else
        //         next(err);
        // })

        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseObject(courses),
                });
            })
            .catch(next);
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
