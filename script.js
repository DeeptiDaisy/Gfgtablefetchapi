 let arraydata
fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
// .then(response => response.json())
//   .then(json => {console.log(json)
//     arraydata = json
//   })
   .then(function(response){
    return response.json();
   })
   .then(function processData(data){
    
   })
    // console.log(data);

    //  document.getElementsByClassName('table').innerHTML= data;
  
.catch(function(error){
    console.log(error);
})
 console.log(arraydata);

//  function processData(data) {
//   // If data is found in response, then remove "d-none" class from all the "insights-container" sections and add "d-none" class in ". no-data-alert" alert.
//   if (data) {
      
//       console.log("Data got after reading csv", data);
//       sessionStorage.setItem("response_data", data);
      
//       sessionStorage.setItem("dataframe", data.dataframe);
//       sessionStorage.setItem("dfhead", data.head);
//       console.log('Dataframe stroed in session ', sessionStorage.getItem("dataframe"))
//       document.querySelectorAll(".insights-container").forEach(section => section.classList.remove('d-none'));
//       // document.querySelector(".no-data-alert").classList.add("d-none");
//       // if (data.unique_filename) {
//       //     update_filename_in_storage(data.unique_filename);
//       // }
//   }
// // function generateTableHead(table, data) 
// // { 
// //   let thead = table. createTHead(); 
// //   let row = thead. insertRow();
  
// //   for (let key of data) 
// //   { let th = document.createElement("th");
// //    let text = document

// if (data.head) {
//   let parsedData = JSON.parse(data.head);
//   let theadContent = '';
//   let tbodyContent = '';
//   let flag = true;
//   const entries = Object.entries(parsedData);
//   console.log(parsedData, entries)

//   for (const entry of entries) {
//       if (entry[1] instanceof Object) {
//           if (flag) {
//               flag = false;
//               theadContent += "<tr>";
//               theadContent += Object.keys(entry[1]).reduce((acc, cur) => acc += `<th>${cur}</th>`, '<th>Name </th>')
//               theadContent += "</tr>";
//           }

//           tbodyContent += '<tr>';
//           tbodyContent += (`<td>${(entry[0])}</td>`);
//           tbodyContent += Object.entries(entry[1])
//               .map(arr => `<td>${arr[1]}</td>`)
//               .reduce((acc, cur) => acc += cur, '');
//           tbodyContent += '</tr>';
//       }
//   }

//   document.querySelector("#headerTHead").innerHTML = theadContent;
//   document.querySelector("#headerTBody").innerHTML = tbodyContent;
// }
//  }