
fetch("http://localhost:3003/")
.then((response) => {
    return response.json()
})
.then((questions) => {
    console.log(questions);   
});
