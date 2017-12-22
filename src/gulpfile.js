var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var merge = require('merge2');
var filter = require('gulp-filter');
var exec = require('child_process').exec;
var Promise = require('bluebird');

function runCommand(cmd) {
    var cmdPromise = Promise.defer();
    exec(cmd, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cmdPromise.resolve();
      });
    return cmdPromise.promise;
}

gulp.task('pack', function(cb) {
    var cpLicPromise = runCommand('cp ../LICENSE ./');
    var cpReadmePromise = runCommand('cp ../README.md ./');

    Promise.all([cpLicPromise, cpReadmePromise])
        .then(function() {
            runCommand('npm version patch && cd package && npm pack ../ && cd ..')
                .then(function() {
                    runCommand('rm LICENSE');
                    runCommand('rm README.md');
                });
        });
});

gulp.task('build.ios', function(){
    var tsProj = ts.createProject('tsconfig.json');
    var iosFilter = filter(['**/*ios*', '**/*common*', '!index.ios*']);

    var tsResult = tsProj.src()
        .pipe(iosFilter)
        .pipe(sourcemaps.init())
        .pipe(tsProj());

    return merge([
        tsResult.js
            .pipe(concat('index.ios.js'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist')),
        tsResult.dts
            .pipe(concat('index.d.ts'))
            .pipe(gulp.dest('dist'))
    ]);
});

gulp.task('build.android', function(){
    var tsProj = ts.createProject('tsconfig.json');
    var iosFilter = filter(['**/*android*', '**/*common*', '!index.android*']);

    var tsResult = tsProj.src()
        .pipe(iosFilter)
        .pipe(sourcemaps.init())
        .pipe(tsProj());

    return merge([
        tsResult.js
            .pipe(concat('index.android.js'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist')),
        tsResult.dts
            .pipe(concat('index.d.ts'))
            .pipe(gulp.dest('dist'))
    ]);
});

gulp.task('build', [ 'build.ios', 'build.android' ]);

gulp.task('watch', ['build'], function() {
    gulp.watch(['**/*.ts', '!index*.ts'], ['build']);
});