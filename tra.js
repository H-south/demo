var app = angular.module("myApp",[]);
app.controller("myctrl",function($scope,$http){
    $scope.listsp=[];
    $scope.start = 0;
    $scope.cart = [];
    $scope.trangtruoc=function(){
        $scope.start -=6;
    }
    $scope.trangsau = function(){
        $scope.start +=6;
    }
    $http.get('tra.json').then(
        function(d){
            $scope.listsp= d.data;
        },
        function(d){
            console.log("Lỗi không tìm thấy sản phẩm",d)
        }
    )
    $scope.cot='';
    $scope.kieu='';
    $scope.order = function(cot,kieu){
       $scope.cot = cot;
       $scope.kieu =kieu;
    }
   
    $scope.themvaogio = function(sp){
        var index = $scope.cart.findIndex(p => p.id==sp.id)
        if(index >=0){
            $scope.cart[index].soluong++;
        }else{
            var spInCart = {id:sp.id , tensp:sp.name,giasp:sp.price,size:sp.size,hinh:sp.hinh,soluong:1}
        $scope.cart.push(spInCart);
        }
        localStorage.setItem('giohang',angular.toJson($scope.cart));
        console.log($scope.cart);
        
    }
    $scope.tongsoluong = function(){
        var tsl = 0 ;
        for(i=0 ; i <$scope.cart.length;i++){
            tsl +=$scope.cart[i].soluong;
        }
        return tsl;
    }
    $scope.tongtien = function(){
        var tt = 0 ;
        for(i=0 ; i <$scope.cart.length;i++){
            tt +=$scope.cart[i].soluong * $scope.cart[i].giasp;
        }
        return tt;
    }
    $scope.xoa = function (index){
        $scope.cart.splice(index,1);
    }
})
app.controller("giohangctrl",function($scope){
    $scope.$parent.cart = angular.fromJson(localStorage.getItem('giohang'));
    console.log($scope.cart)
})