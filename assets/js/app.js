// ===============================
// Load Portfolio Data Dynamically
// ===============================


document.addEventListener("DOMContentLoaded", () => {

    loadProfile();
    loadSkills();
    loadProjects();
    loadCertificates();

});




// ===============================
// Profile
// ===============================

async function loadProfile(){

    const response = await fetch("data/profile.json");

    const data = await response.json();


    // Name

    const name = document.querySelector(".hero-text h1");

    if(name){
        name.textContent = data.name;
    }



    // Title

    const title = document.querySelector("#typing");

    if(title){
        title.textContent = data.title;
    }



    // About

    const about = document.querySelector("#about-text");

    if(about){
        about.textContent = data.about;
    }



    // Image

    const image = document.querySelector(".hero-image img");

    if(image){
        image.src = data.image;
    }



    // Email

    const email = document.querySelector(".contact-box a");

    if(email){

        email.textContent = data.email;

        email.href = "mailto:" + data.email;

    }


}





// ===============================
// Skills
// ===============================


async function loadSkills(){

    const response = await fetch("data/skills.json");

    const skills = await response.json();


    const container =
    document.querySelector(".skills-container");


    if(!container) return;


    container.innerHTML = "";



    skills.forEach(group => {


        let card = document.createElement("div");

        card.className = "skill-card";


        card.innerHTML = `

        <h3>
        ${group.category}
        </h3>


        <ul>

        ${group.skills
        .map(skill => `<li>${skill}</li>`)
        .join("")}

        </ul>

        `;


        container.appendChild(card);


    });


}






// ===============================
// Projects
// ===============================


async function loadProjects(){

    const response = await fetch("data/projects.json");

    const projects = await response.json();



    const container =
    document.querySelector("#projects-container");



    if(!container) return;


    container.innerHTML = "";



    projects.forEach(project => {


        let card =
        document.createElement("div");


        card.className =
        "project-card";



        card.innerHTML = `


        <img src="${project.image}"
        alt="${project.title}">


        <div class="project-content">


        <h3>
        ${project.title}
        </h3>


        <p>
        ${project.description}
        </p>



        <p>
        <strong>
        Tools:
        </strong>

        ${project.tools.join(", ")}

        </p>



        <a href="${project.github}"
        target="_blank">
        GitHub
        </a>


        |

        <a href="${project.demo}"
        target="_blank">
        Demo
        </a>



        </div>


        `;



        container.appendChild(card);



    });



}







// ===============================
// Certificates
// ===============================


async function loadCertificates(){


    const response =
    await fetch("data/certificates.json");


    const certificates =
    await response.json();



    const container =
    document.querySelector("#certificates-container");



    if(!container) return;



    container.innerHTML = "";



    certificates.forEach(cert => {


        let card =
        document.createElement("div");


        card.className =
        "certificate-card";



        card.innerHTML = `


        <img src="${cert.image}"
        alt="${cert.name}"
        width="100%">



        <h3>
        ${cert.name}
        </h3>



        <p>
        ${cert.issuer}
        </p>



        <a href="${cert.link}">
        View Certificate
        </a>


        `;



        container.appendChild(card);



    });


}
