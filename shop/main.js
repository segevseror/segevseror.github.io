
var cart = cart || {};

cart.init = function(){

    var shop = this.getStorage();


    if(shop == null){
        shop = {};
        shop.items = new Array();
        localStorage.setItem('shop', JSON.stringify(shop)); 


        cart.howitem();
    }
};

// add    item in cart 
cart.add = function(button ,id , Stname, price , qul){
    console.log("sssss");


    if(cart.check(id) == true){
        alert("this item in cart");
    }else{

        var item = {
            but: button,
            id: id,
            name: Stname,
            price: price,
            qul: qul,
        };


        var shop = this.getStorage();
        shop.items.push(item);
        localStorage.setItem('shop' , JSON.stringify(shop));
    }

    window.location.reload();
};



//function check if item is exists
cart.check = function(id){

    var shop = this.getStorage();

    for(var x=0 ; x<shop.items.length ; x++){

        if(shop.items[x].id == id){
            return true;
        }
    }
};

// how much have item in shop
cart.howitem = function(){

    var howmach = 0;
    var shop = this.getStorage();

    if(shop.items.length >= 0){
        for(var x= 0 ; x<shop.items.length;x++){
            howmach += shop.items[x].qul;
        }

        return howmach;

    }
}

// (minos plus) remove or plus
cart.remove = function(m , id){

    this.id = id;
    var shop = cart.getStorage(id);    
    if(m == "p"){
        for(var x=0 ; x< shop.items.length; x++){
            if(shop.items[x].id == this.id){

                shop.items[x].qul += 1;

            }
        }
        cart.sum();
        localStorage.setItem('shop', JSON.stringify(shop));

    }else{
        // if no p so this m + fix bag in javaJS
        var arryshop = new Array();
        for(var x=0 ; x< shop.items.length; x++){
            if(shop.items[x].id == this.id){
                shop.items[x].qul--;
                if(shop.items[x].qul <= 0){
                    for(var x=0 ; x< shop.items.length ; x++){
                        if(this.id != shop.items[x].id){
                            arryshop.push(shop.items[x]);
                        }
                    }
                    shop.items = new Array();
                    shop.items = arryshop;
                }
            }
        }
        localStorage.setItem('shop', JSON.stringify(shop));
    }
    totall();
}

//clear all item 
cart.clear = function(){


    var shop = cart.getStorage();


    shop.items = new Array();
    window.location.reload();
    localStorage.setItem('shop', JSON.stringify(shop)); 





}

cart.removeItem = function(id){

    console.log("removeitem");
    console.log(id);
    this.id =id;
    var shop = cart.getStorage();
    var arryshop = new Array();


    for(var x=0 ; x< shop.items.length ; x++){
        if(this.id != shop.items[x].id){
            arryshop.push(shop.items[x]);

        }
    }
    shop.items = new Array();
    shop.items = arryshop;
    localStorage.setItem('shop', JSON.stringify(shop)); 
    window.location.reload();
};


cart.sum = function(){


    var shop = cart.getStorage();

    var fullsum =0;
    for(var x = 0 ; x<shop.items.length ; x++){

        fullsum += shop.items[x].qul *= shop.items[x].price;

    }
    return fullsum;
}


var bole = false;



cart.coupon = function(){

    var pass = Number(document.getElementById("coupon").value);
    var shop = cart.getStorage();

    switch(pass){

        case 123 :
            var price = cart.sum();
            price = price* 0.9;

            console.log(price);

            bole = true;


            totall();
            return price;
            break;


    }

    bole = false;
    return    cart.sum();


};

cart.getStorage = function(){
    var shop = localStorage.getItem('shop');
    return JSON.parse(shop);
};

cart.init();
