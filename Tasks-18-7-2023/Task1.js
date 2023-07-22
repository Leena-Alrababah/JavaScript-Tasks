let botton = document.getElementById("click");
let body1 = document.getElementById("body1");

async function Leena() {
  const response = await fetch("https://api.github.com/users/Leena-Alrababah/repos");
  const data = await response.json();
  console.log(data);
  let myData = "";


botton.onclick = function () {
  // const httjs =JSON.parse (httt.responseText);
  for (let i = 0; i < 5; i++) {
    
    myData += `
  <tr >
   <td>${data[i].id}</td>
   <td>${data[i].private}</td>
   <td>${data[i].url} </td>
   <td>${data[i].full_name}</td>

 </tr>
 `;
  }
  body1.innerHTML = myData;
};
}
Leena();