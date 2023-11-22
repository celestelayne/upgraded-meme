console.log('this works')

// [1] get text
const en_btn = document.querySelector(".en");
const pt_btn = document.querySelector(".pt");

const english_text = document.querySelector("#english_content")
const portuguese_text = document.querySelector("#portuguese_content")

// [3] define the event handler
const translateToEnglish = () => {
    let h1 = document.querySelector("h1");
    h1.textContent = "Houses or Museums?";

    portuguese_text.style.display = "none";
    english_text.style.display = "flex";
}

const translateToPortuguese = () => {
    // swapping the title
    let h1 = document.querySelector('h1');
    h1.textContent = "casas ou museus?";
    
    english_text.style.display = "none";
    portuguese_text.style.display = "flex";
}

// [2] add event listener
en_btn.addEventListener("click", translateToEnglish)
pt_btn.addEventListener("click", translateToPortuguese)