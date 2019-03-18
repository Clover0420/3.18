const gulp = require("gulp");

//scss文件编译 压缩css
const gulpSass = require("gulp-sass");
const minCss = require("gulp-clean-css");

//编译js 合并所有js 并压缩
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const babel = require("gulp-babel"); //babel-core babel-preset-env

const browserSync = require("gulp-webserver")

gulp.task("minCss", () => {
    return gulp.src("./src/scss/*.scss")
        .pipe(gulpSass())
        .pipe(minCss())
        .pipe(gulp.dest("./new/css/"))
});

gulp.task("minJs", () => {
    return gulp.src("./src/js/*.js")
        .pipe(babel({
            presets: 'es2015'
        }))
        .pipe(concat("all.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./new/js/"))
});
//watch任务 监听js css
gulp.task("default", () => {
    gulp.watch("./src/", gulp.parallel("minCss", "minJs"))
    return gulp.src("./new/")
        .pipe(browserSync({
            port: 3333,
            livereload: true
        }))
});
//default任务 默认执行browserSync服务和js css watch 任务
//browserSync 启动服务 自动刷新
//scss开发样式 js切换功能
//gulp创建前端开发目录src
//以自己的名字作为本地开发分支 开发完和并到master分支 提交远程master分支
//初始化git仓库 关联远程仓库地址