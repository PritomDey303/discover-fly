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

        if(binary===true){
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

        if(binary===true){
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
    firstClass=parseInt(firstClass);

    let economyClass=document.getElementById("economy_class").value;
    economyClass=parseInt(economyClass);

    let alert=document.getElementById("alert");
    alert.style.display="block";
        
    let alertText=document.getElementById("alert_txt");

    //checking empty or invalid values
    if(flyingFrom===""){
        alert.style.backgroundColor="red";
        alertText.innerText="Please Enter Flying From option.";
    }
    else if(destination===""){
        alert.style.backgroundColor="red";
        alertText.innerText="Please Enter Flying To option.";
    }
    else if(departure===""){
        alert.style.backgroundColor="red";
        alertText.innerText="Please Enter Departure option.";
    }
    else if(returning===""){
        alert.style.backgroundColor="red";
        alertText.innerText="Please Enter Return From option.";
    }
    else if(firstClass===0 && economyClass===0){
        alert.style.backgroundColor="red";
        alertText.innerText="You haven't booked any ticket.";
    }
    else{
        alert.style.backgroundColor="#4BB543";   
        alertText.innerText=`Congratulations!  You have successfully purchased ${firstClass+economyClass} tickets.`;
     }
}

/////////////////////////////////////////////////////////////////////
//hide alert function
/////////////////////////////////////////////////////////////////////

function hideAlert(event){
    event.target.parentElement.style.display="none";
}