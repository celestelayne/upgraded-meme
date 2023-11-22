let anchor = document.querySelector("a");

const viewComments = (event) => {
  console.log(event);
  // To access a property of the event object, we can use dot notation:
  let eventTarget = event.target;
  // Log the target to the console
  console.log(eventTarget);

  var eventType = event.type;
  console.log("The event type is: " + eventType);

  // Prevent page from jumping to top.
  event.preventDefault();

  document.querySelector("#comments").className = "show-comments";
};

anchor.addEventListener("click", viewComments);
