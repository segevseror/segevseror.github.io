



function totall(){
    var shop = cart.getStorage();

    if(shop.items.length <= 0){

        document.getElementById("total").innerHTML = "no item in cart";
    }else{
        var table;

        table = '<table border="1px solid black">';
        table += "<thead>";
        table += "<tr>";
        table += "<th>"+ "Name"+"</td>";
        table += "<th>"+ "qualyty"+"</td>";
        table += "<th>"+ "price"+"</td>";
        table += "<th colspan='3' font-size='1px;'>"+"items<br>("+ cart.howitem() + ")</td>";
        table +="</tr>";
        table += "</thead>";

        for(var x=0 ; x<shop.items.length;x++){


            table += "<tr>";
            table += "<td>"+ shop.items[x].name +"</td>";
            table += "<td>"

                + '<input type="button" value="-" onclick="cart.remove(\'m\','+shop.items[x].id+')"> '

                +shop.items[x].qul+
                ' <input type="button" value="+" onclick="cart.remove(\'p\','+shop.items[x].id+')">'
                + "</td>";
            table += "<td>"+ shop.items[x].price + "</td>";
            table += "<td>"+ '<input type="button" value="X" onclick="cart.removeItem('+shop.items[x].id+')">' + "</td>";
            table +="</tr>"

        }
        table += "<tr>";
        table += "<td>"+"Total Price:"+"</td>";

        table += "<td colspan='3'>"+ cart.sum() +"</td>";
        table +="</tr>"

        table += "<tr>";
        table += "<td>"+"coupon:"+"</td>";
        table += "<td colspan='3'>"+'<input type="number" id="coupon" max="5">'+"<input type='button' value='send' onclick='cart.coupon()'"+"</td>";

        table +="</tr>"
        if ( bole == true){

            table += "<tr>";
            table += "<td colspan ='2'>"+ "10% free price: "+ "</td>";
            table += "<td colspan ='2'>"+ + "</td>";
            table +="</tr>"

        }
        table += "</table>";

        document.getElementById("total").innerHTML = table;

        return table;
    }
}


function total(){
    document.getElementById("total").innerHTML = cart.howitem();
}
