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