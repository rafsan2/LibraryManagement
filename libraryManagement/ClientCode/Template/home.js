var lmsApp = angular.module('lmsApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap','ngAnimate']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: '/ClientCode/Template/home.html',
            }).
            when('/signup', {
                templateUrl: '/ClientCode/Template/sign_up.html',
            }).
            when('/signin', {
                templateUrl: '/ClientCode/Template/sign_in.html',
            }).
            when('/student', {
                templateUrl: '/ClientCode/Template/student.html',
            }).
            when('/student-modal', {
                templateUrl: '/ClientCode/Template/student-modal.html',
            }).
            when('/forgotpassword', {
                templateUrl: '/ClientCode/Template/forgot_password.html',
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);

