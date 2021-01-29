////////////////////////////////////////////////////////////
//ticketCount Function
////////////////////////////////////////////////////////////

function ticketCount(binary,seat,totalPrice){
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

    //calling totalPrice Callback Function

    totalPrice();
}




//////////////////////////////////////////////////////////////////////
//totalAmount Function
/////////////////////////////////////////////////////////////////////

function totalAmount(){
   
    //Declaring necessary variables

    let first_class=document.getElementById("first_class");
    first_ticket=parseFloat(first_class.value);

    let economic_class=document.getElementById("economy_class");
    economic_ticket=parseFloat(economic_class.value);

    let subTotal=document.getElementById("subtotal");

    let vat=document.getElementById("vat");

    let amount=document.getElementById("amount");

    //checking whether input fields contains negative value
    if(first_ticket<0){
        first_ticket=0;
        first_class.value=0;
        
    }
    if(economic_ticket<0){
        economic_ticket=0;
        economic_class.value=0;
    }
    
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


/////////////////////////////////////////////////////////////////////
//alertMsg function
/////////////////////////////////////////////////////////////////////
function alertMsg(){
    //declaring variables
    let flyingFrom=document.getElementById("flying_from").value;
    let destination=document.getElementById("destination").value;
    let departure=document.getElementById("departure").value;
    let returning=document.getElementById("return").value;
    let firstClass=document.getElementById("first_class").value;
    let economyClass=document.getElementById("economy_class").value;

    //checking empty or invalid values

    if(flyingFrom==""){
        alert("Please enter Flying From option.");
    }
    else if(destination==""){
        alert("Please enter Flying To option.");
    }
    else if(departure==""){
        alert("Please enter departure To option.");
    }
    else if(returning==""){
        alert("Please enter return To option.");
    }
    else if(firstClass==0 && economyClass==0){
        alert("You have not booked any ticket.");
    }
    else{
        
        alert("Congratulation! You have successfully purchased tickets.");
    }
    
    
    
}