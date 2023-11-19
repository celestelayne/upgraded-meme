console.log('this works')

// [1] get text

// get english text
let english_text = document.querySelector("#english_content");
// get portuguese text
let portuguese_text = document.querySelector("#portuguese_content");

// get english button
let en_btn = document.querySelector(".en");
// get portuguese button
let pt_btn = document.querySelector(".pt");


// [2] add event listener
const translateToEnglish = () => {
    let h1 = document.querySelector("h1");
    h1.textContent = "houses or museums?"

    portuguese_text.style.display = "none" 
    english_text.style.display = "flex" 
}

const translateToPortuguese = () => {
    let h1 = document.querySelector("h1");
    h1.textContent = "casas ou museus?"

    english_text.style.display = "none" 
    portuguese_text.style.display = "flex" 
}

// [3] define the event handler
en_btn.addEventListener("click", translateToEnglish);
pt_btn.addEventListener("click", translateToPortuguese);
