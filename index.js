const button = document.getElementById("icon");
const advice = document.getElementById("advice");
const quote = document.getElementById("quote");
const api = "https://api.adviceslip.com/advice";

function delay(timeDelay) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeDelay);
  });
}

async function adviceResult() {
  try {
    advice.style.color = "hsl(150, 100%, 66%)";

    button.disabled = true;
    quote.innerHTML = "Loading";
    advice.innerHTML = "Loading";

    button.disabled = true;
    await delay(1000);
    const response = await fetch(api);
    const data = await response.json();
    const dataAdvice = data.slip.id;
    const dataQuote = data.slip.advice;
    quote.innerHTML = `"${dataQuote}"`;
    advice.innerHTML = `${dataAdvice}`;
    button.disabled = false;
  } catch {
    advice.style.color = "hsl(150, 100%, 66%)";
    quote.style.color = "crimson";
    advice.innerHTML = "404";
    quote.style.color = "red";
    quote.innerHTML = "Please try to click the button again, if it still not working its probably because the advice generator has some issue";
  }
}
button.addEventListener("click", adviceResult);
