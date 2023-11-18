/*
 * I Do:
 *
 * Watch me as I:
 *   - Use the methods/properties for managing a DOM Node's content
 */

/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of "first" and save it to a variable called
const first = document.querySelector('#first')
const alsofirst = document.getElementById('first')
//    first (use any method you'd like!).
// 2. Print just the text of `first`.
console.log(first.textContent)
// 3. Print the HTML of `first`.
console.log(first.outerHTML)
// 4. Get the section tag from the page and save it to a variable.
const section = document.querySelector('section')
// 5. Print the text content of the section tag
console.log(section.textContent)
// 6. Print the HTML content of the section tag
console.log(section.outerHTML)