const gulp = require('gulp');
const sass = require('gulp-sass');
const sass_path = './src/css/*.scss';
// 创建了一个任务，监听了scss文件，通过sass插件去编译生成css
gulp.task('sass',function(){
	console.log('this is sass task!');
	gulp.src(sass_path)
		.pipe(sass())
		.pipe(gulp.dest('./dist/css/'));
});
// 再创建一个gulp任务用于监听上面的任务。
gulp.task('default',function(){
	console.log('this is default task! i\'m watch sass task!');
	gulp.watch(sass_path,function(){
		gulp.run('sass');
	});
});
