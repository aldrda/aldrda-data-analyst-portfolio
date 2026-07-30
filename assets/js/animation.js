// ===============================
// Scroll Reveal
// ===============================


const elements =
document.querySelectorAll(
".section,.hero-content,  .skill-card, .project-card, .certificate-card"
);



const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{
threshold:0.15
});



elements.forEach(element=>{

observer.observe(element);

});
