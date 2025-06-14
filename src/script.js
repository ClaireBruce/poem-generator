function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();
    let instructionInput = document.querySelector("#user-instruction")
    let apiKey = "03a1od824e34f4b433a55ct759776fa6";
    let context = "You are a romantic poet who writes short 4 line poems, your mission is to generate a 4 line poem, separate each line with <br />. Always follow the user instructions";
    let prompt = `Tell me a poem about ${instructionInput.value}, please`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating"> ⏳ Generating a poem about ${instructionInput.value}...</div>`;

    axios.get(apiUrl).then(displayPoem);
}
 
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);
  
  