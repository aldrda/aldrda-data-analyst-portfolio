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

    // Stats

if(data.stats){


    document.getElementById(
        "projects-count"
    ).textContent =
    data.stats.projects + "+";



    document.getElementById(
        "skills-count"
    ).textContent =
    data.stats.skills + "+";



    document.getElementById(
        "certificates-count"
    ).textContent =
    data.stats.certificates + "+";


}

    

}





// ===============================
// Skills
// ===============================

async function loadSkills(){

    const response =
    await fetch("data/skills.json");


    const skills =
    await response.json();



    const container =
    document.querySelector(".skills-container");



    if(!container) return;



    container.innerHTML = "";



    skills.forEach(group => {


        let card =
        document.createElement("div");


        card.className = "skill-card";



        let skillsHTML = "";



        group.skills.forEach(skill => {


            skillsHTML += `

            <div class="skill-item">


                <div class="skill-info">

                    <span>
                    ${skill.name}
                    </span>

                    <span>
                    ${skill.level}
                    </span>

                </div>



                <div class="progress">

                    <div class="progress-bar"
                    style="width:${skill.level}">
                    </div>

                </div>


            </div>

            `;


        });



        card.innerHTML = `

            <h3>
            ${group.category}
            </h3>


            ${skillsHTML}


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


// ===============================
// Typing Effect
// ===============================


async function typingEffect(){


    const response =
    await fetch("data/profile.json");


    const data =
    await response.json();



    const element =
    document.getElementById("typing");



    if(!element) return;



    let index = 0;

    let charIndex = 0;

    let deleting = false;



    function type(){


        let current =
        data.typing[index];



        if(!deleting){


            element.textContent =
            current.substring(0,charIndex++);



            if(charIndex > current.length){

                deleting = true;

                setTimeout(type,1000);

                return;

            }


        }else{


            element.textContent =
            current.substring(0,charIndex--);



            if(charIndex === 0){


                deleting = false;

                index =
                (index + 1) % data.typing.length;


            }


        }


        setTimeout(type,
        deleting ? 50 : 100);


    }



    type();

}


typingEffect();
