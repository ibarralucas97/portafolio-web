// MODAL - referencias
const modalStack = document.getElementById("modal-stack");


const modalImages = document.getElementById("modal-images");
const modalDemo = document.getElementById("modal-demo");

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
  // Color especial para Micronauta Ops
if (project.title === "Micronauta Ops") {
  modalTitle.style.color = "var(--danger-color)";
} else {
  modalTitle.style.color = "var(--section-color)";
}

  modalNeed.textContent = project.need || "Detalle en construcción.";
  modalSolution.textContent = project.solution || "Detalle en construcción.";

  // GitHub
  if (project.github) {
    modalGithub.href = project.github;
    modalGithub.style.display = "inline";
  } else {
    modalGithub.style.display = "none";
  }

  // Demo
  if (project.demo) {
    modalDemo.href = project.demo;
    modalDemo.style.display = "inline";
  } else {
    modalDemo.style.display = "none";
  }

  // Imágenes
  modalImages.innerHTML = "";
  if (project.images && project.images.length > 0) {
    project.images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      modalImages.appendChild(img);
    });
  }

  modal.classList.remove("hidden");

  // STACK
modalStack.innerHTML = "";

if (project.stack && project.stack.length > 0) {
  project.stack.forEach(tech => {
    const tag = document.createElement("span");
    tag.textContent = tech;
    modalStack.appendChild(tag);
  });
}

}



// CLICK FUERA SACA EL MODAL 
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// CERRAR CON LA X
closeModal.addEventListener("click", (e) => {
  e.stopPropagation();
  modal.classList.add("hidden");
});


// ESTILO LINUX EN HEADER
const text = "lucas@linux-support";
const output = document.getElementById("whoami-output");

let i = 0;

function typeWhoami() {
  if (i < text.length) {
    output.textContent += text[i];
    i++;
    setTimeout(typeWhoami, 80);
  }
}

typeWhoami();


// MENUSITO
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // ← IMPORTANTE
  mobileMenu.classList.toggle("hidden");
});


// cerrar al hacer click en un link
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

document.addEventListener("click", (e) => {
  const clickedInsideMenu = mobileMenu.contains(e.target);
  const clickedToggle = menuToggle.contains(e.target);

  if (!clickedInsideMenu && !clickedToggle) {
    mobileMenu.classList.add("hidden");
  }
});

