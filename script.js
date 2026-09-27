const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "Git & GitHub",
    "Problem Solving"
];

const skillsContainer = document.getElementById("skills-container");

skills.forEach(function(skill){

    const skillCard =document.createElement("div");

    skillCard.classList.add("skill-card");

    skillCard.textContent =skill;

    skillsContainer.appendChild(skillCard);
});

const projects =[
{
    title:"Personal Porfolio Website",

    description:
        "A reponsive personal porfolio  website that introduces me , displays my skills and showcases my projects.",

    tech: [
        "HTML",
        "CSS",
        "JavaScript"
    ]    
},
{
    title: "Hospital Management System",

    description:
        "A hospital management system where admins, doctors and patients can sign in securely and access features based on their roles, including managing patient records, appointments, medical information and hospital operations.",

    tech: [
        "HTML",
        "CSS",
        "React",
        "Php/ Laravel"
    ]
},


{
    title: "School Management System",

    description:
        "A school management system where admins, parents, lecturers and students can sign in and access role-specific features for managing academic records, communication, courses, student progress and school activities.",

    tech: [
        "HTML",
        "CSS",
        "React",
        "Php/Laravel"
    ]
}

];
const projectsContainer =
    document.getElementById("projects-container");



projects.forEach(function(project, index) {

    
    const projectCard = document.createElement("div");

    projectCard.classList.add("project-card");



    const projectNumber = document.createElement("span");

    projectNumber.classList.add("project-number");

    projectNumber.textContent =
        `PROJECT ${String(index + 1).padStart(2, "0")}`;

    
    const projectTitle = document.createElement("h3");

    projectTitle.textContent = project.title;


    
    const projectDescription = document.createElement("p");

    projectDescription.textContent =
        project.description;


    
    const techList = document.createElement("div");

    techList.classList.add("tech-list");


    
    project.tech.forEach(function(technology) {

        const tech = document.createElement("span");

        tech.classList.add("tech");

        tech.textContent = technology;

        techList.appendChild(tech);

    });



    projectCard.appendChild(projectNumber);

    projectCard.appendChild(projectTitle);

    projectCard.appendChild(projectDescription);

    projectCard.appendChild(techList);


    
    projectsContainer.appendChild(projectCard);

});



const year = document.getElementById("year");

year.textContent = new Date().getFullYear();