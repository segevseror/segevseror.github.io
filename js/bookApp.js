
var bookCache ={};



var bookApp = angular.module("booksModule", ["ngRoute"])
.config(function ($routeProvider){
    $routeProvider
        .when("/home", {templateUrl: "tpl/home.html", controller: "homeController" , pageTitle: "Home page"})
        .when("/contact", {templateUrl: "tpl/contact.html", controller: "contactController", pageTitle: "Contact page"})
        .when("/about", {templateUrl: "tpl/about.html", controller: "aboutController", pageTitle: "About page"})
        .otherwise({ redirectTo: "/home" });
})
.controller("mainController" , function($rootScope , $scope , $route){


    $scope.setActive = function(event){


        setLinks(event)
    };

})
.controller("homeController", function($rootScope , $scope , $route , $http){

    setLinksRefresh(0)
    
    

    $rootScope.title = $route.current.$$route.pageTitle;



    $scope.sortBooks = "+bookName";

    $http({
        method: "get",
        url: "js/books.json"
    }).then(function(response){

        $scope.books = bookCache = response.data;
        $scope.categories = getCategories($scope.books);

    });

    $scope.sortByPrice = function(by){
        $scope.sortBooks = by;
        this.clearSortPrice();
        event.target.className = 'press-active';

    };

    $scope.changeSort = function(){

        $scope.clearSortPrice();

    }

    $scope.clearSortPrice = function(){

        var links = document.querySelectorAll('#sort-price-links li a');
        for(var x = 0 ; x<links.length ; x++){

            links[x].className = "";
        }

    };

    $scope.filterCategories = function(){

        var data = [];

        for(var i = 0 ; i< $scope.categories.length ; i++ ){
            for( var x =0 ; x < bookCache.length ; x++){


                if($scope.categories[i] == bookCache[x].bookCategory){

                    if( $scope [ $scope.categories[i] ] === true){
                        data.push(bookCache[x]);
                    }

                }


            } 

        }

        $scope.books = (data.length > 0) ? data : bookCache;


    };

})


.controller("contactController", function($rootScope , $scope , $route){
    
   
    setLinksRefresh(2)    


    $rootScope.title = $route.current.$$route.pageTitle;

})


.controller("aboutController", function($rootScope , $scope , $route){


    setLinksRefresh(1)
   


    $rootScope.title = $route.current.$$route.pageTitle;

});





function setLinks(event){



    var links =  document.querySelectorAll(".menu ul li a");

    for(var x = 0 ; x < links.length ; x++){
        links[x].className = "";
    }


    angular.element(event.target).parent().addClass("active");
}

var getCategories = function(books){

    var categories = new Array();

    for(var x = 0 ; x<books.length ; x++){

        if(categories.indexOf(books[x].bookCategory) == -1){
            categories.push(books[x].bookCategory);
        }


    }
    return categories;

}

function setLinksRefresh(spn){
    var span =  document.querySelectorAll(".menu ul li span");
var links =  document.querySelectorAll(".menu ul li a");

    for(var x = 0 ; x<links.length ;x++){

        links[x].className = "";

    }

    angular.element(span[spn]).parent().addClass("active");   


}

