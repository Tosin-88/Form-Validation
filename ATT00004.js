function validate() {
    var email1 = document.getElementById("email");
    var email2 = document.getElementById("email2");
    var pw = document.getElementById("password");
    var pw2 = document.getElementById("password2");
    var aT = document.getElementById("agreeTerms");
    // var emailDiv = document.getElementById("emailDiv");
    // var emailMessage = document.getElementsByClassName("errorMessage");
    // var emailMessage2 = document.getElementsByClassName("errorMessage2");

    // if (emailMessage) {
    //     emailDiv.removeChild(errorMessage);
    // }if (emailMessage2) {
    //     emailDiv.removeChild(errorMessage2);
    // }
  


    if(email1.value == "" || email2.value == "") {
        alert("The email fields cannot be empty");
        return false;

    }

    if(email1.value != email2.value ) {
        alert("The email fields do not match");
        return false;
 
    }

    if(pw.value == "" || pw2.value == "") {
        alert("The password field cannot be empty");
        return false;

    }

    if(pw.value != pw2.value ) {
        alert("The password fields do not match");
        return false;
 
    }
    // if(aT.value == "" ) {
    //     alert("You must agree to the terms and conditions");
    //     return false;

    // }

    

    

    


    //no validate errors 

    return true;


}



