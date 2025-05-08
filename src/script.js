function generatePoem(event) {
    event.preventDefault();
  
    new Typewriter("#poem", {
      strings: "She walks in beauty, like the night",
      autoStart: true,
      cursor: "",
    });
  }
  
 
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);
  
  