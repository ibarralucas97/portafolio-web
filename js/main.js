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
  openModal(project);
});


  projectList.appendChild(card);
});


// FUNCION CLICK

function openModal(project) {
  modalTitle.textContent = project.title || "Proyecto";
  modalNeed.textContent = project.need || "Detalle en construcción.";
  modalSolution.textContent = project.solution || "Detalle en construcción.";

  if (project.github) {
    modalGithub.href = project.github;
    modalGithub.style.display = "inline";
  } else {
    modalGithub.style.display = "none";
  }

  modal.classList.remove("hidden");
}


// CLICK FUERA SACA EL MODAL 
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});



