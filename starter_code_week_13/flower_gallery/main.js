console.log('this works');

const flowers = [
    {
        name: "Tulip",
        color: "yellow",
        image:
        "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
    },
    {
        name: "Daffodil",
        color: "yellow",
        image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
    },
    {
        name: "Sunflower",
        color: "yellow",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
    },
    {
        name: "Bluebell",
        color: "blue",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
    },
    {
        name: "Rose",
        color: "red",
        image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
    }
];

// grab the ul
const ul = document.querySelector('ul');
const filterBtns = document.querySelector('.filters')
const cards = document.getElementsByClassName('card');

// write function
const renderFlowersToPage = (items) => {
    for(let i = 0; i < items.length; i++){
        // console.log(items[i]);

        // create a list item
        let list_item = document.createElement("li");
        list_item.classList.add("card", flowers[i].color, `item--${i + 1}`)
        // flower name
        let title = document.createElement("h3");
        title.textContent = flowers[i].name;
        // flower color
        let color = document.createElement("p");
        color.textContent = flowers[i].color;
        // flower image
        let image = document.createElement("img");
        image.setAttribute("src", flowers[i].image);

        // append to page
        ul.appendChild(list_item)
        list_item.appendChild(title)
        list_item.appendChild(color)
        list_item.appendChild(image  )
    }
}
// pass data into it
renderFlowersToPage(flowers)



// filter flowers by color function
const filterFn = (event) => {
    // console.log(event)
    console.log(event.target)

    if(event.target.classList.contains('filter-btn')){
        let active = filterBtns.querySelector('.active');
        active.classList.remove('active');

        event.target.classList.add('active');

        const filterValue = event.target.getAttribute("data-filter")
        console.log(filterValue) // red, yellow

        for(let i = 0; i < cards.length; i++){
            if(cards[i].classList.contains(filterValue)  || filterValue === "all"){
                cards[i].classList.remove('hide');
                cards[i].classList.add('show');
            } else {
                cards[i].classList.remove('show');
                cards[i].classList.add('hide');
            }
        }
    }
}

filterBtns.addEventListener('click', filterFn)