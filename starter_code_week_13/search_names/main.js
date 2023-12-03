console.log('this works');

const people = [
    { name: "adri" },
    { name: "becky" },
    { name: "chris" },
    { name: "dillon" },
    { name: "evan" },
    { name: "frank" },
    { name: "georgette" },
    { name: "hugh" },
    { name: "igor" },
    { name: "jacoby" },
    { name: "kristina" },
    { name: "lemony" },
    { name: "matilda" },
    { name: "nile" },
    { name: "ophelia" },
    { name: "patrick" },
    { name: "quincy" },
    { name: "roslyn" },
    { name: "solene" },
    { name: "timothy" },
    { name: "uve" },
    { name: "violet" },
    { name: "wyatt" },
    { name: "xenia" },
    { name: "yadri" },
    { name: "zack" }
];

const ul = document.querySelector('ul');
const searchBar = document.querySelector('input');

// rendering all the names to the page
const renderNamesToPage = (names) => {
    // iterate over data
    for(let i = 0; i < names.length; i++){
        // console.log(names[i])
        // create the list items
        let list_item = document.createElement("li");
        // add a class to the list item, result-item
        list_item.classList.add("result-item");
        // place the name in the list item
        list_item.textContent = names[i].name;
        // append to ul
        ul.appendChild(list_item)
    }
}
// call the function and pass in data
renderNamesToPage(people)

// search names
const searchNames = (event) => {
    console.log(event.target.value)
    let searchString = event.target.value;
    // filter function
    const nameFilter = people.filter(function(person){
        // if there is text in the input field
        if(searchString){
            return person.name.includes(searchString)
        }
    })
    // display search string function
    displaySearched(nameFilter)
}

const displaySearched = (name) => {
    console.log('line 67', name)
    clearList()
    for(let i = 0; i < name.length; i++){
        let listItem = document.createElement("li");
        listItem.textContent = name[i].name;
        ul.appendChild(listItem)
    }
}

const clearList = () => {
    console.log('clear web page before search results')
    ul.innerHTML = ""
}

searchBar.addEventListener('keyup', searchNames)