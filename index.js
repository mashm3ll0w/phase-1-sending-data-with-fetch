// Add your code here
function submitData(name, email) {
    
  return fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name: name,
        email: email
      })
    })
    .then( (response) => {
      return response.json()
    })
    .then( (userObj) => {
      document.body.innerHTML = userObj.id
    })
    .catch( (error) => {
      document.body.innerHTML = error.message
    })
}
