//ticketCount Function

function ticketCount(binary,seat){
    //Getting first class and economy input values

    let firstClass=document.getElementById("first_class");
    let economyClass=document.getElementById("economy_class");

    //Checking whether first_class or economy_class passed in seat parameter

    if(seat=="f_class"){

        let temp=firstClass.value;
        temp=parseInt(temp);

        if(binary==true){
            firstClass.value=temp+1;
        }

        else{
            if(firstClass.value>0){
                firstClass.value=temp-1;

            }
        }
    }

    //Checking whether first_class or economy_class passed in seat parameter

    if(seat=="e_class"){
        
        let temp=economyClass.value;
        temp=parseInt(temp);

        if(binary==true){
            economyClass.value=temp+1;
        }

        else{
            if(economyClass.value>0){
                economyClass.value=temp-1;

            }
        }
    }   
    totalAmount();

}


//totalAmount Function

function totalAmount(){
    console.log("Called");
    //Declaring necessary variables

    let first_ticket=document.getElementById("first_class").value;
    first_ticket=parseFloat(first_ticket);

    let economic_ticket=document.getElementById("economy_class").value;
    economic_ticket=parseFloat(economic_ticket);

    let subTotal=document.getElementById("subtotal");

    let vat=document.getElementById("vat");

    let amount=document.getElementById("amount");
    
    //Calculating subtotal
    let tempSubtotal=first_ticket*150+economic_ticket*100;
    subTotal.innerText=`$${tempSubtotal}`;

    //calculating vat
    let tempVat=(tempSubtotal*10)/100;
    vat.innerText=`$${tempVat}`;

    //calculating amount
    let tempAmount=tempVat+tempSubtotal;
    amount.innerText=`$${tempAmount}`;

}