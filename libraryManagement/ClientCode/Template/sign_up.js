
lmsApp.controller("signUpController", function ($scope, services) {

    $scope.user = {
        firstName : "",
        lastName : "",
        userName : "",
        password : "",
        confirmPassword : "",


        email : function() {
            var userEmail;
            userEmail = $scope.user;
            return userEmail.firstName + "@rite.com.bd";
        },

        fullName : function() {
            var userObject;
            userObject = $scope.user;
            return userObject.firstName + " " + userObject.lastName;
        }
        
    };

    

    $scope.saveUser = function () {
        var userinfo = [];
        //userinfo.push($scope.user);
        $scope.UserData = services.GetData();

        if(($scope.user.firstName == " ") || ($scope.user.lastName == "") 
        || ($scope.user.userName == "") || ($scope.user.email == "") ||
         ($scope.user.password == "") || ($scope.user.confirmPassword == "")) {
            alert("You must fill all the inputs in this form");
        }else if(($scope.user.password) != ($scope.user.confirmPassword)) {
            alert("Password didn't match!!!");
        }else{
            firstName : $scope.user.firstName;
            lastName : $scope.user.lastName;
            fullName : $scope.user.fullName();
            userName : $scope.user.userName;
            email : $scope.user.email();
            password : $scope.user.password;
            confirmPassword : $scope.user.confirmPassword;
            //console.log($scope.user);
            $scope.UserData.push($scope.user);
            console.log($scope.UserData);
            location.href = "http://localhost:59374/Home/Index/#!/signin";
           
        }        
    };

    $scope.pressCancel = function () {
        location.href = "http://localhost:59374/Home/Index/#!/home";
    };
});