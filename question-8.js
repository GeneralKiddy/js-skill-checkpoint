// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
function getUserInfo() {return fetch("https://jsonplaceholder.typicode.com/users")};
function handleResponse(response) {return response.json()};
function onSuccess(data) {const newUsers = data.map(function nameOnly(user) {return user.name}); console.log(newUsers)};
getUserInfo().then(handleResponse).then(onSuccess);

