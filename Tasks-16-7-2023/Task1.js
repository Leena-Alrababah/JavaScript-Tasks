// get element
let color = document.getElementById ("colorPicker");

//craete function to do on event
function setcolor() {
    document.body.style.background = color.value;
    sessionStorage.setItem ("color", color.value) ;

}

//create event
color.addEventListener ("input", setcolor);



// store in session storage
// let selectedcolor = color.value;
