// ===============================
// Page Loader
// ===============================


window.addEventListener("load",()=>{


    const loader =
    document.querySelector(".loader");



    if(loader){


        loader.classList.add("hide");


        setTimeout(()=>{

            loader.remove();

        },500);


    }



});
