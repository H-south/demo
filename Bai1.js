var app = angular.module("myapp",[]);
app.controller("myctrl",function($scope){
    $scope.ages = [
        {
            age : "Dưới 25",
            rate:0.07
        },
        {
            age : "Từ 25 đến 40",
            rate:0.1
        },
        {
            age : "Trên 40",
            rate:0.15
        }
    ];
    $scope.age = $scope.ages[1];
    $scope.gender = "NAM";
    $scope.getBonus =function(){
        var bonus = $scope.age.rate*$scope.salary;
        if($scope.gender =="NU"){
            bonus += 200000;
        }return bonus;
    }   
})