function getItem(id) {
    let local_data = JSON.parse(localStorage.getItem("data"))

    let user_data = local_data.find(function(ele) {
        return ele.id === id
    })
    return user_data
}

function displayItem () {
    const searchId = parseInt(new URLSearchParams(window.location.search).get('id'));
    console.log("searchId: ", searchId)
    let item = getItem(searchId)
    
    document.querySelector(".singlepage-title").textContent = item.title
    document.querySelector(".singlepage-id").textContent = item.id
    document.querySelector(".singlepage-body").textContent = item.body

}


displayItem()


