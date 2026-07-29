// ===============================
// Dark / Light Mode
// ===============================


const themeButton = document.getElementById("theme-btn");


// Load saved theme

const savedTheme = localStorage.getItem("theme");


if(savedTheme === "dark"){

    document.body.classList.add("dark");

    if(themeButton){
        themeButton.textContent = "☀️";
    }

}





// Change Theme

if(themeButton){


themeButton.addEventListener("click",()=>{


    document.body.classList.toggle("dark");



    const isDark =
    document.body.classList.contains("dark");



    if(isDark){

        themeButton.textContent = "☀️";

        localStorage.setItem(
            "theme",
            "dark"
        );


    }else{


        themeButton.textContent = "🌙";


        localStorage.setItem(
            "theme",
            "light"
        );


    }



});


}
