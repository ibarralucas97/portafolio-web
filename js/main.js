// Desde un array de objetos en JS. Se recorren y se renderizan dinámicamente en el DOM.

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;

  projectList.appendChild(card);
});


