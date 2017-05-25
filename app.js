

var izik = izik ||{};

izik.start = function(){

    var list = izik.getlocal();

    if (list == null){
        var list = {}
        list.guest = new Array();

        console.log(typeof(list));

localStorage.setItem('list', JSON.stringify(list));
    }
    
    
}

izik.add = function(){

    var list = izik.getlocal();

    var Name = document.getElementById("Names").value;
    var Table = document.getElementById("Table").value;
    
    if(Name != "" && Table != ""){
        
    var user = {
        name: Name,
        table: Table,

    }
    list.guest.push(user);
    console.log(list.guest)

    localStorage.setItem('list' , JSON.stringify(list));
        location.reload();
    console.log("loca");
    }else{
        alert("dsadsa")
    }
    
    }



izik.getlocal = function(){

    var list = localStorage.getItem('list');

    return JSON.parse(list);

}




function check(){
    console.log(list);
    console.log( $scope.list)

}



    

angular.module("myModule" , []).controller("mycontroler", function($scope){


    var list = izik.getlocal();
    
    $scope.users = list.guest;
         

    /* {name: 'beni' , age:40 , city: 'ashdod' , register: new Date('Januar 30 2017')},
        {name: 'segev' , age: 20 , city: 'Rishon-lzion' , register: new Date('October 30 2017')},
        {name: 'rave' , age: 25 , city: 'Tel-aviv' , register: new Date('November 5 2017')},
        {name: 'roi' , age: 26 , city: 'Tel-aviv' , register: new Date('November 5 2017')},
       {name: 'ron' , age: 26 , city: 'Tel-aviv' , register: new Date('November 5 2017')},*/


    $scope.openuser = function(){
       
        var fullname = this.$$watchchers
       console.log(this);
        console.log(this.name);
        
        
    }

    $scope.short = '+name';
    $scope.select = "+name";


} );