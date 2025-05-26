const verticalBars = document.getElementById("verticalBars");
const text = "XIRTAISA";
const barCount = 10;

for (let i = 0; i < barCount; i++) {
  const column = document.createElement("div");
  column.className = "bar-column";

  for (let j = 0; j < text.length; j++) {
    const letter = document.createElement("span");
    letter.textContent = text[j];
    column.appendChild(letter);
  }

  verticalBars.appendChild(column);
}

document.querySelector(".footer-right").addEventListener("mousemove", (e) => {
  const container = e.currentTarget;
  const mouseX = e.clientX - container.getBoundingClientRect().left;
  const percent = (mouseX / container.offsetWidth - 0.5) * 2;
  verticalBars.style.transform = `translateX(${percent * 40}px)`;
});
