// MODAL - referencias
const modal = document.getElementById("project-modal");
const closeModal = document.getElementById("close-modal");

const modalTitle = document.getElementById("modal-title");
const modalNeed = document.getElementById("modal-need");
const modalSolution = document.getElementById("modal-solution");
const modalGithub = document.getElementById("modal-github");

// LISTA DE PROYECTOS
const projectList = document.getElementById("project-list");


projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;

  // CLICK SOLO PARA REPORTE JIRA
  card.addEventListener("click", () => {
    if (project.title === "Reporte Jira") {
      openModal(project);
    }
  });

  projectList.appendChild(card);
});


// FUNCION CLICK

function openModal(project) {
  modalTitle.textContent = project.title;
  modalNeed.textContent = project.need;
  modalSolution.textContent = project.solution;
  modalGithub.href = project.github;

  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
 


