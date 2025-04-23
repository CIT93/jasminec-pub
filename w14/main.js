// Photos
function renderPhotos(photos) {
photos.forEach((img) => {
    const imgEl = document.createElement("img")
    imgEl.setAttribute("src", `https://picsum.photos/seed/${img.id}/150`)
    document.getElementById("imgOutput").appendChild(imgEl);
    }) 
}

async function getPhotos(){
    try{
        const imgData = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`)
        const result = await imgData.json();
        onSuccess(result);
    } catch (error){
        onFailure(error);
    }
}

// comments
function renderComments(comments){
    comments.forEach((comment) => {
        const comEl = document.createElement("comment") 
        comEl.setAttribute("src", `https://jsonplaceholder.typicode.com/comments/2`)
        document.getElementById("comOutput").appendChild(comEl);
        comOutput.textContent = `Email: ${comment.email} |`
        comOutput.textContent += ` Name: ${comment.name} |`
        comOutput.textContent += ` Comment: ${comment.body}`
    })
}

async function getComments(){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
        const result = await response.json();
        onSuccess(result);
    } catch (error){
        onFailure(error);
    }
}

// Success or Failure
async function onSuccess(result){
    console.log(`SUCCESS: ${result}`)
    renderPhotos(result);
    renderComments(result);
}

async function onFailure(error){
    console.log(`ERROR: ${error}`)
}

getPhotos();
getComments();