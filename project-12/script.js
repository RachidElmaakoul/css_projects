let images = document.querySelectorAll("img")

for (let i = 0; i < images.length; i++) {
    if (images[i].hasAttribute('alt')) {
        images[i].setAttribute("alt","old")
    } else {
        images[i].setAttribute("alt","elzero new")
    }
}
// task six 
let numElements = document.querySelector("[name ='elements']");
let elementText = document.querySelector("[name = 'texts']");
let divOrselect = document.querySelector("[name = 'type']");
let result = document.querySelector("[class='results']");
document.forms[0].onsubmit = function  (e){
    e.preventDefault();
    document.querySelectorAll(".box").forEach(function(e) {
        e.remove()});
    for(let i = 0;i < numElements.value; i++){
        let myEle = document.createElement(divOrselect.value);
        let mytext = document.createTextNode(elementText.value);
        myEle.className = "box";
        myEle.title = "Element";
        myEle.id = `id-${i+1}`;
        myEle.appendChild(mytext);
        result.appendChild(myEle);
    }
}



