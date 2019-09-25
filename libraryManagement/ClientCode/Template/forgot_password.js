
lmsApp.controller("fpController", function($scope) {
    // console.log("in my controller!!!");

    $scope.reset = {
        email : "",
        password : "",
        confirmPassword : "",
    };

    $scope.resetPassword = function () {
        if($scope.reset.password != $scope.reset.confirmPassword) {
            alert("Password didn't Match!!");
        }else {
            email : $scope.reset.email;
            password : $scope.reset.password;
            confirmPassword : $scope.reset.confirmPassword;
            console.log($scope.reset);
        }
    }
});