let myReq = new XMLHttpRequest ();
myReq.open ("Get" , "Task.json");
myReq.send ();
console.log(myReq);

myReq.onload = function (){ 
let data = JSON.parse (this.responseText);
// console.log (data);
let button = document.getElementById ("button");
button.onclick = function(){
    for (i = 0 ; i < data.length ; i++) {

        let tbody = document.getElementById ("tbody")
        
        let row = document.createElement ("tr");
       tbody.appendChild (row);
        

        let name = document.createElement ("td");
        name.textContent = data [i].name;
        row.appendChild (name);

        let age = document.createElement ("td");
        age.textContent = data[i].Age;
        row.appendChild (age);

        let major = document.createElement ("td");
        major.textContent = data[i].Major;
        row.appendChild (major);
        
        let uni = document.createElement ("td");
        uni.textContent = data[i].University;
        row.appendChild (uni);

        let image = document.createElement ("td");
        let img = document.createElement ("img");
        img.src = data[i].Image;
        img.style.width = "200px";
        image.appendChild (img);
        row.appendChild (image);



        
    
    }
}

}
