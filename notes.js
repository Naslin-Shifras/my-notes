var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addbutton = document.getElementById("add-popup-button")

addbutton.addEventListener("click", function () {
    popupbox.style.display = "block"
    popupoverlay.style.display = "block"
})


var cancelbutton = document.getElementById("cancel-book")
cancelbutton.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

var container = document.querySelector(".container")
var addbook = document.getElementById("add-notes")
var titleinput = document.getElementById("heading")
var shortdes = document.getElementById("your-notes")

addbook.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${titleinput.value}</h2>
    <p>${shortdes.value}</p>
    <button onclick="deletebook(event)">delete</button>`

    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

function deletebook(event){
    event.target.parentElement.remove()
}