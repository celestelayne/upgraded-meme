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

// grab ul element
const ul = document.querySelector("ul");

// write function that renders each name to the brower window
const renderNames = (names) => {
    for(let i = 0; i < names.length; i++){
        // create a list item
        let listItem = document.createElement("li");

        // add a class to each item
        listItem.classList.add("result-item");

        // grab the name of the current point of the loop and add the name as the list items' text
        listItem.textContent = names[i].name;
        // console.log(names[i])
        // append the result to the unordered list
        ul.appendChild(listItem)
    }
}

// invoke or call the function
renderNames(people)