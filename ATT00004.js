function validate() {
    var email1 = document.getElementById("email");
    var email2 = document.getElementById("emailRepeat");
    var emailDiv1 = document.getElementById("emailFormElement");
    var emailDiv2 = document.getElementById("repeatEmailFormElement");
    var emailMessage = document.getElementById("errorMessage");
    var emailMessage2 = document.getElementById("errorMessage2");

    if (emailMessage){
        emailDiv1.removeChild(errorMessage)
    }if (emailMessage2){
        emailDiv1.removeChild(errorMessage2)
    }
  


    if(email1.value == "" && email2.value == "") {
        var errorMessage = document.createElement("p");
        errorMessage.setAttribute("id", "errorMessage");
        var errorText = document.createTextNode("This field cannot be blank");
        errorMessage.appendChild(errorText);
        emailDiv1.appendChild(errorMessage);
        return false;

    }

    if(email1.value != email2.value ) {
        var errorMessage = document.createElement("p");
        errorMessage.setAttribute("id", "errorMessage2");
        var errorText = document.createTextNode("This field must match");
        errorMessage.appendChild(errorText);
        emailDiv1.appendChild(errorMessage);
        return false;

    }


    //no validate errors 

    return true;


}



