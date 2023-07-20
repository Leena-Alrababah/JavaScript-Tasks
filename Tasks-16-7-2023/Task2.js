// let input = document.getElementsByTagName ("input");
let name = document.getElementById ("name");
let age = document.getElementById ("age");
let gender = document.getElementById ("gender");
let date = document.getElementById ("date");
let image = document.getElementById ("img");
let desc = document.getElementById ("desc");
let uni = document.getElementById ("uni");
let html = document.getElementById ("html");
let css = document.getElementById ("css");
let js = document.getElementById ("js");
let sibnumb = document.getElementById ("sibnumb");
let sibdesc = document.getElementById ("sibdesc");
let submit = document.getElementById ("submit");


//make array to save data after take it from local storage
let allData ;
if (localStorage.person != null ){
    allData = JSON.parse (localStorage.person);
} else {
    allData = [];
}


submit.onclick = function() {

    let info = {
        name : name.value,
        age: age.value,
        gender: gender.value,
        date: date.value,
        image: image.value,
        desc : desc.value,
        uni : uni.value,
        html: html.value,
        css: css.value,
        js: js.value,
        sibnumb : sibnumb.value,
        sibdesc: sibdesc.value,
    }

    allData.push (info);  //to add in array
    // save to local storage
    localStorage.setItem ("person", JSON.stringify (allData)) // to set in local storage
    // console.log (allData);

    // for clear inputs after click on submit button
    clearData ();
    showData ();
   
}


// clear input 
function clearData () {
    name.value = '';
    age.value = '';
    gender.value = '';
    date.value = '';
    image.value = '';
    desc.value = '';
    uni.value = '';
    html.value = '';
    css.value = '';
    js.value = '';
    sibnumb.value = '';
    sibdesc.value = '';
}


// read
function showData (){
    let table = '';
    for ( let i = 0 ; i < allData.length ; i++) {
        table += `
        <tr>
                <td>${allData [i].name}</td>
                <td>${allData [i].age}</td>
                <td>${allData [i].gender}</td>
                <td>${allData [i].date}</td>
                <td>${allData [i].image}</td>
                <td>${allData [i].desc}</td>
                <td>${allData [i].uni}</td>
                <td>${allData [i].html}</td>
                <td>${allData [i].css}</td>
                <td>${allData [i].js}</td>
                <td>${allData [i].sibnumb}</td>
                <td>${allData [i].sibdesc}</td>
        </tr>`
        
        
    }
    document.getElementById ("tbody").innerHTML = table;

}

showData (); // حتى تبقى البيانات في الجدول حتو لو عملنا ريلود





















