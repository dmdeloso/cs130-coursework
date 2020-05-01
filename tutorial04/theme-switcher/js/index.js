var container = document.querySelector(".container");
const defaultTheme = () => {
   container.className = "container";
};

const oceanTheme = () => {
      container.className = "ocean";
};

const desertTheme = () => {
   container.className = ('desert');
};


document.querySelector("#default").onclick = defaultTheme;
document.querySelector("#ocean").onclick = oceanTheme;
document.querySelector("#desert").onclick = desertTheme;
