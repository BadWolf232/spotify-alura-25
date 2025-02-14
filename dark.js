const switchColor = document.getElementById('switch-shadow');
const theme = localStorage.getItem("theme");

if (theme === "dark"){
    document.body.classList.add('dark');
    switchColor.checked = true
}else{
    document.body.classList.remove('dark');
    switchColor.checked = false
}

switchColor.addEventListener("change", (event) => {
    if (switchColor.checked) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
});