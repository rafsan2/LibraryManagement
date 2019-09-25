lmsApp.controller("signInController", function ($scope, services) {
    //console.log("in my controller....");

    var userName, password;
    //userName: "",
    //password: ""
    var loginInfo = [];
    $scope.login = {
        userName: "",
        password: ""
    };

    $scope.UserData = services.GetData();

    $scope.signIn = function () {
        if (($scope.login.userName == "") || ($scope.login.password == "")) {
            alert("You need to fill all the necessary inputs!!");
        } else {
            //userName: $scope.login.userName;
            //password: $scope.login.password;
            ////console.log($scope.login);
            //loginInfo.push($scope.login);
            //console.log(loginInfo);
            ////for (var user in services) {
            //    if ((loginInfo[userName] == services[userName]) && (loginInfo[password] == services[password])) {
            //        console.log("Logged In!!!");
            //    }
            ////}
            angular.forEach($scope.UserData, function (list) {
                if (list.password == $scope.login.password) {
                    alert("Password Match");
                    location.href = "http://localhost:59374/Home/Index/#!/student";
                } else {
                    $scope.UserData.push($scope.login);
                    console.log($scope.UserData);
                    location.href = "http://localhost:59374/Home/Index/#!/student";
                }
            });
            //location.href = "http://localhost:59374/Home/Index/#!/student";
            //$scope.UserData.push($scope.login);
            //console.log($scope.UserData);
            //alert("You a new User!");
            //location.href = "http://localhost:59374/Home/Index/#!/student";
        }


    };
});