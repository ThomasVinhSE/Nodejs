const Course = require('../models/Course');
const { mongooseObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        req.body.image =
            'https://img.youtube.com/vi/' + req.body.videoid + '/sddefault.jpg';
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseObject(course) });
            })
            .catch(next);
    }
}
module.exports = new CourseController();
