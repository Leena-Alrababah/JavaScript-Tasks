let country = document.getElementById ("country");
let image = document.getElementById ("img");

country.addEventListener ("click", function (){
    if (country.value == "jordan") {
       image.setAttribute ("src", "./image/img1.jpg")
    }

    else if (country.value == "palestine") {
        image.setAttribute ("src", "./image/img2.jpg")

    }
    else if (country.value == "syria") {
      image.setAttribute ("src", "./image/img3.jpg")

    }
})






// // Create div element
// let div = document.createElement("div");

// // Create image element
// let image = document.createElement("img");
// image.setAttribute("src", "image1.jpg"); // Set initial image source

// // Create button element
// let button = document.createElement("button");
// button.textContent = "Jordan";


// // Add image and button to div
// div.appendChild(image);
// div.appendChild(button);

// // Add event listener for button click
// button.addEventListener("click", function() {
//   // Change image source
//   if (image.getAttribute("src") === "image1.jpg") {
//     image.setAttribute("src", "image2.png"); // Set new image source
//     button.textContent = "palastine"; // Change button text
//   } else {
//     image.setAttribute("src", "image1.jpg"); // Set initial image source
//     button.textContent = "Jordan"; // Change button text
//   }
// });

// //styling the image
// image.style.width = "200px";
// // Show div in the page body
// document.body.appendChild(div);