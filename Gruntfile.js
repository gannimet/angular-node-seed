module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			jQuery: {
				files: [
					{
						expand: true,
						src: 'bower_components/jquery/dist/jquery.min.*',
						dest: 'static/js/',
						flatten: true
					}
				]
			},
			bootstrap: {
				files: [
					{
						expand: true,
						src: 'bower_components/bootstrap/dist/css/*.min.css',
						dest: 'static/css/',
						flatten: true
					}, {
						expand: true,
						src: 'bower_components/bootstrap/dist/js/bootstrap.min.js',
						dest: 'static/js/',
						flatten: true
					}, {
						expand: true,
						src: 'bower_components/bootstrap/dist/fonts/*',
						dest: 'static/fonts/',
						flatten: true
					}
				]
			},
			alertify: {
				files: [
					{
						expand: true,
						cwd: 'bower_components/alertify/themes/',
						src: ['alertify.core.css', 'alertify.bootstrap.css'],
						dest: 'static/css/',
						flatten: true
					}, {
						expand: true,
						src: 'bower_components/alertify/alertify.min.js',
						dest: 'static/js/',
						flatten: true
					}
				]
			},
			angular: {
				files: [
					{
						expand: true,
						cwd: 'bower_components/angular/',
						src: ['angular.min.js', 'angular.min.js.map'],
						dest: 'static/js/',
						flatten: true
					}
				]
			}
		},
		jshint: {
			all: ['Gruntfile.js', 'src/**/*.js']
		},
		uglify: {
			build: {
				expand: true,
				src: 'src/**/*.js',
				dest: 'static/js/',
				flatten: true,
				ext: '.min.js'
			}
		},
		less: {
			development: {
				files: {
					'static/css/custom.css': 'src/client/less/custom.less'
				}
			}
		},
		watch: {
			sripts: {
				files: ['Gruntfile.js', 'src/client/**/*.js'],
				tasks: ['build']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	var buildTasks = ['copy', 'jshint', 'uglify', 'less'];
	var buildTasksPlusWatching = buildTasks;
	buildTasksPlusWatching.push('watch');

	grunt.registerTask('build', buildTasks);
	grunt.registerTask('default', buildTasksPlusWatching);
};
