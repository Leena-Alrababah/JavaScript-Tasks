let input = document.getElementsByTagName ("input");
let name = document.getElementById ("name");
let age = document.getElementById ("age");
let gender = document.getElementById ("gender");
let date = document.getElementById ("date");
let image = document.getElementById ("image");
let desc = document.getElementById ("desc");
let uni = document.getElementById ("uni");
let checkbox = document.getElementById ("checkbox");
let sibnumb = document.getElementById ("silnumb");
let sibdesc = document.getElementById ("sibdesc");
let submit = document.getElementById ("submit");


// craete card data
submit.addEventListener ("click", function (){
    let information = {
        name : name.value,
        age: age.value,
        gender: gender.value,
        date: date.value,
        

    }
})

// localStorage.clear();
// localStorage.setItem ("info", checkbox,input);