// const api = "https://spotty-wolverine-18.loca.lt/workspaces";

// async function workspacesCards() {
//     const response = await fetch(
//         api,
//         method: 'GET');
//     const data = await response.json();
//     console.log(data);
// }

// workspacesCards()



// async function getData(url) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST',
//         mode: 'no-cors',

//         headers: {
//             'Content-Type': 'application/json'
//         },
//     });
//     const data = await response.json()
//     console.log(data);
// }

// getData("")


let body = {
    "email": "thoalfokar.almuathen1@gmail.com",
     "password": "thotho1997"
}
const options = {
   method: 'POST',
   headers: {
       'Content-Type': 'application/json'
   },
   body: JSON.stringify(body)

}
//=====
//send post request to the server
//=====
fetch('https://ur-task.com/api/user/login', options)
   .then(async res => {
       //check response status
      const jsonObject = await res.json()
      console.log(jsonObject)
   })





// async function getDataApi() {
//     const response = await fetch('https://happy-monkey-60.loca.lt/workspaces', {
//         method: 'GET',
//         mode: 'no-cors',
//         headers: {
//             'Content-Type': 'application/json',
//             'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0YWhhLnR3bS4xMjNAZ21haWwuY29tIiwiaWF0IjoxNjMwMTQxNDExfQ.PujIHEgU29sRv7lZUZI8EehitAGRqfGa9KK7ZOmhrtk'
//         },
//     });
//     const data = await response.json()
//     console.log(data)
// }


// getDataApi()











// const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0YWhhLnR3bS4xMjNAZ21haWwuY29tIiwiaWF0IjoxNjI5Nzk4NjQ2fQ.ghbTWtuiXXyVTui6QCj0VkXyYxdG7x7yAyvMi9Tyx-g";
// const options = {
//     'method': 'GET',
//     'headers': {
//         'authorization': 'Bearer ' + apiToken,
//         'content-type': 'application/json',
//         'accept': 'application/json'
//     },
//     'timeout': 5000
// };
// let outputfromcanvas;
// fetch('https://spotty-wolverine-18.loca.lt/workspaces', options)
//     .then(res => { outputfromcanvas = res; console.log(res) })
//     .catch(err => console.log("err: ", err))

