function getItem(id) {
    let localData = JSON.parse(localStorage.getItem("data"))

    let userData = localData.find(function(ele) {
        return ele.id === id
    })
    return userData
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


