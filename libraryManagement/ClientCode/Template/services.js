
lmsApp.factory('services', ['$http', function ($http) {
   
    var services = {};

    $http.get('/ClientCode/Template/users.json').then(function (response) {
        users = response.data;
        return users;
    });


    services.GetData = function () {

        var userList = [
            { userName: 'rafsan', password: 'R@fi1234' },
            { userName: 'shohag', password: 'R1@fi1234' },
            { userName: 'shohag1', password: 'R2@fi1234' }
        ];

        return userList;
    };


    return services;
}]);