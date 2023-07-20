let fName = document.getElementById ("fname");
let lName = document.getElementById ("lname");
let bDate = document.getElementById ("bdate");
let email = document.getElementById ("email");
let cEmail = document.getElementById ("cemail");
let password = document.getElementById ("password");
let cPassword = document.getElementById ("cpassword");
let submit = document.getElementById ("submit");
let nameError = document.getElementById ("nameerror");
let bdateError = document.getElementById ("bdateerror");
let emailError = document.getElementById ("emailerror");


submit.onclick = function() {
    let fNameRe = /[^0-9]|[a-z]/ig;
    if (fName.value.match (fNameRe)) {
        nameError.textContent ="Name is Valid";
        // nameError.innerHTML ="Name is Valid"; same result
        // nameError.innerText ="Name is Valid"; same result
    } else {
        nameError.textContent ="Numbers are not allow";
    }




    let bDateRe = /^[0-9]{1,2}\/{1}[0-9]{1,2}\/{1}[0-9]{4}$/gi
    if (bDate.value.match (bDateRe)) {
        bdateError.textContent = "Date in valid";
    } else {
        bdateError.textContent = "The format should be dd/mm/yyyy"
    }


    let emailRe = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi;
    if (email.value.match (emailRe)) {
        emailError.textContent = "Email is valid";
    } else {
        emailError.textContent = "This E-mail is not valid";
    }

    clearButtom ();
}

function clearButtom (){
    fName.value = "";
    lName.value = "";
    bDate.value = "";
    email.value = "";
    cEmail.value = "";
    password.value = "";
    cPassword.value = "";


}