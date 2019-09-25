//var lmsApp = angular.module("lmsApp", ['ngSanitize', 'ui.bootstrap']);

angular.module('lmsApp').controller("studentController", ['$scope', '$uibModal', function ($scope, $uibModal, $log) {
    console.log("In My Controller!!");
    $scope.studentOrderList = {};
    $scope.clickedStudent = {};
    $scope.students = [

        { userName: 'rafi', email: 'rafsan2@gmail.com', bookName: 'Five Point Someone', orderDate: new Date(), returnDate: new Date() }
    ];
    $scope.order = function () {
        var modalInstance = $uibModal.open({
            templateUrl: '/ClientCode/Template/student-modal.html',
            controller: 'ModalInstanceCtrl',
            size: 'lg',
            resolve: {
                student: function () {
                    return $scope.students;
                }
            }
        });
    };

    $scope.selectStudent = function (student) {
        console.log(student);
        var modalInstance = $uibModal.open({
            templateUrl: '/ClientCode/Template/student-modal-edit.html',
            controller: 'editController',
            size: 'lg',
            resolve: {
                student: function () {
                    return student;
                }
            }
        });
    };

    $scope.deleteStudent = function () {
        //console.log(student);

        if (confirm("Are You Sure You are Going to delete?")) {
            //txt = "You pressed OK!";
            $scope.students.splice($scope.students.indexOf($scope.clickedStudent), 1);
            alert("Delete!!");
        }
    };
}]);

lmsApp.config(function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
});

angular.module('lmsApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, student) {
    //var pc = this;
    //pc.data = data;
    $scope.studentOrderList = {};
    $scope.students = [];

    $scope.orderBooks = function () {
        student.push($scope.studentOrderList);
        $scope.students.push($scope.studentOrderList);
        $scope.studentOrderList = {};
        alert("Your Order Has Been Submitted");
        console.log($scope.students);
        console.log($scope.student);
        //{...}
        //alert("You clicked the ok button.");
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        //{...}
        //alert("You clicked the cancel button.");
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('lmsApp').controller('editController', function ($scope, $uibModalInstance, student) {
    $scope.clickedStudent = student;
    console.log(student);
    $scope.save = function () {
        alert("Edited!");
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        //{...}
        //alert("You clicked the cancel button.");
        $uibModalInstance.dismiss('cancel');
    };
});