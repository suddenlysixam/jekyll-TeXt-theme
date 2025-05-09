let blocks = document.querySelectorAll("pre:has(code)");
let copyButtonLabel = "Click to copy";


blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");

    button.innerText = copyButtonLabel;
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;
  text = text.replace(/^\s+|\s+$/g, '');

  await navigator.clipboard.writeText(text);

  button.innerText = "Copied!";

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 1400);
}