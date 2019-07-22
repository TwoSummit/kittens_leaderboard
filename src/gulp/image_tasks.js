/* Program Name: image_tasks.js
 **  Description: Used to store functions for gulp regarding images
 **
 ** Project  Date        Who  Comments
 ** -------  ----------  ---  ---------------------------------------------------
 **          2018-03-21  CAA  Initial file creation.
 *******************************************************************************/

// Node.js modules
// ------------------------------------------------------------------------------
const gulp = require('gulp');
const imageMin = require('gulp-imagemin');


module.exports = {
    
    compileAndMinify: () => {
        return gulp.src('./src/images/*')
                   .pipe(imageMin())
                   .pipe(gulp.dest('./dist/images'));
    }
    
};
