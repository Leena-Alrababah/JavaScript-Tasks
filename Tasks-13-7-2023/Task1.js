// create data
let name = ["Leena" , "Rama" , "Razan"];
let ages = ["23 Years old", "22 Years old","21 Years old"]
let img = ["./Images/leena.jpg", "./Images/rama.jpg", "./Images/razan.jpg"]


// craete container and input in body
let container = document.createElement ("div");
document.body.appendChild(container);
container.style.textAlign = "center";

function element (name, ages, img) {
    // craete elements
    let card = document.createElement ("div");
    let title = document.createElement ("h2");
    let age = document.createElement ("p");
    let image = document.createElement ("img");


    // craete content 
    let titleContent = document.createTextNode (name) ;
    // title.appendChild (head);
    let ageContent = document.createTextNode (ages);
    image.src = img;

    //appenchild
    title.appendChild (titleContent);
    age.appendChild (ageContent);

    card.appendChild (title);
    card.appendChild (age);
    card.appendChild (image);

    container.appendChild (card);


    //style
    card.style.width = "200px";
    // card.style.background = "#444";
    card.style.border = "1px solid #444";
    // card.style.color = "#fff";
    card.style.padding = "10px";
    card.style.margin = "5px";
    card.style.display = "inline-block"
    image.style.width = "100%";
}

// element (name [0], ages[0], img[0]) 

for (i = 0; i < 3 ; i++) {
    element (name [i], ages [i], img [i]);
}


// other code
// // Array of data
// let data = [
//     { name: "monica", age: 24, images: "monica.jpg" },
//     { name: "phoebe", age: 24, images: "phoebe.jpg" },
//     { name: "rachel", age: 25, images: "rachel.jpg" }
// ];

// for (let i = 0; i < data.length; i++) {
//     // Create elements
//     let card = document.createElement("div");
//     card.className = "Card"; // set class to div 

//     // Create and set name element
//     let names = document.createElement("h2");
//     names.textContent = data[i].name;
//     card.appendChild(names);

//     // Create and set age element
//     let ages = document.createElement("p");
//     ages.textContent = "Age: " + data[i].age;
//     card.appendChild(ages);

//     // Create and set image element
//     let images = document.createElement("img");
//     images.setAttribute("src", data[i].images);
//     card.appendChild(images);

//     // Apply border style to card
//     card.style.border = "1px solid black ";

//     card.style.margin =" 50px" ;
//    // card.style.display = "flex";
// card.style.justifyContent = "center";

//     // Show card in the page body
//     document.body.appendChild(card);  }




