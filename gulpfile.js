const gulp = require('gulp');
const del = require('del');

//const js = require('./src/gulp_tasks/js_tasks.js');
//const css = require('./src/gulp_tasks/css_tasks.js');
//const images = require('./src/gulp_tasks/image_tasks.js');

//const bootstrap = require('./src/gulp_tasks/bootstrap_tasks.js');
const kendo = require('./src/gulp/kendo_tasks.js');

/* ----- Bootstrap ----- */
/* gulp.task('get_bootstrap_css', () => {
    return bootstrap.get_bootstrap_css();
});

gulp.task('get_bootstrap_js', () => {
    return bootstrap.get_bootstrap_js();
});

gulp.task('get_bootstrap', [
    'get_bootstrap_css',
    'get_bootstrap_js',
]);
 */
/* ----- Kendo ----- */
gulp.task('get_kendo_css', () => {
    return kendo.get_kendo_css();
});

gulp.task('get_kendo_js', () => {
    return kendo.get_kendo_js();
});

gulp.task('get_kendo_fonts', () => {
    return kendo.get_kendo_fonts();
});

gulp.task('get_kendo_default', () => {
    return kendo.get_kendo_default();
});

gulp.task('get_kendo_images', () => {
    return kendo.get_kendo_images();
});

gulp.task('get_kendo_assets', gulp.parallel(
    'get_kendo_fonts',
    'get_kendo_default',
    'get_kendo_images',
    (done) => {
      done();
    }
)); 

gulp.task('get_kendo', gulp.parallel(
    //'get_kendo_css',
    'get_kendo_js',
    'get_kendo_assets',
    (done) => {
      done();
    }
)); 

/* ----- JQuery ----- */
/* gulp.task('get_jquery', () => {
    return js.get_jquery();
}); */

/* ----- Custom JS ----- */
/* gulp.task('get_custom_js', () => {
    return js.get_custom_js();
}); */

/* ----- Custom CSS ----- */
/* gulp.task('get_custom_css', () => {
    return css.get_custom_css();
}); */

/* ----- All Custom ----- */
/* gulp.task('get_custom', [
    'get_custom_js',
    'get_custom_css',
]);  */


/* ----- All together now ----- */

/**
 * Removes all files from ./public/css/temp and ./public/js/temp
 */
/* gulp.task('clear_temp', () => {
    return del(['./public/css/temp', './public/js/temp'])
}); */

/**
 *  Runs: get_bootstrap, get_custom, get_jquery, get_kendo
 */
/* gulp.task('compile_public', [
    'get_bootstrap',
    'get_custom',
    'get_jquery',
    'get_kendo',
]); */


/* gulp.task('watch', ['get_custom_js'], () => {
    gulp.watch('src/js/*.js', ['get_custom_js']); 
    // Other watchers
}); */











/* ----- Testing ----- */
// Copy flat html files over without doing anything to the file itself
gulp.task('move_html', () => {
    return gulp.src('./src/html/**/*.html')
               .pipe(gulp.dest('./dist/html'));
});
/* 
gulp.task('image_min', () => {
    return images.minify();
});

gulp.task('compile_js', () => {
    return js.compileAndMinifyCustom();
});

gulp.task('concat_kendo', () => {
    return js.compileAndMinifyKendo();
});

gulp.task('compile_sass', () => {
    return css.compile_sass();
});

gulp.task('compile_less', () => {
    return css.compile_less();
});

gulp.task('compile_styles', () => {
    return css.compile_css();
});

gulp.task('move_kendo_css', () => {
    return css.move_kendo();
});

gulp.task('compile_css', [
    'compile_sass',
    'compile_less',
    'move_kendo_css' ,
    'compile_styles'  
]);


gulp.task('del_public_temp', () => {
    return del(['./public/css/temp', './public/js/temp'])
});
 */