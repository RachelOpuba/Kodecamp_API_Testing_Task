let cardHolder = document.getElementById('card-holder')
console.log(cardHolder)


function displayPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {

    let html ="";

    localStorage.setItem("data", JSON.stringify(data))
    data.forEach(e => {
        html += `
        
        <div class=" col-12 col-lg-4 col-md-6 py-5">
        
          <div class="h-100 text-center  mx-auto" style="width: 18rem;">
         
              <div class="card text-center  h-100 py-5 " " style="width: 18rem;">
                <div class="card-body py-2 ">
                  <h5 class="card-title">${e.title}</h5>
                  <p class="text-center py-3 bd">${e.body}</a>
                  <h3 class="py-2 card-id">${e.id}</h3>
                  <button onclick="displayItems(event)" class="btn-t btn-primary stretched-link" data-id=${e.id}>click me</button>
                 
                </div>
              </div>
          </div>
        </div>`
         
      cardHolder.innerHTML = html
       

    });

})
}

displayPost();




function displayItems(e){
  let dataId = e.target.getAttribute("data-id") 
  window.location = `/singlepage.html?id=${dataId}`
}




























































 
