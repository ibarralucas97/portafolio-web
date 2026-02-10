const projects = [
{
  title: "Reporte Jira",
  description: "Reportes historicos de Tickets en JIRA con filtros.",
  need: "Necesidad de contar con reportes historicos centralizados para medir desempeño del area de soporte.",
  solution: "Se desarrollo una solucion en Google Apps Script que consume la API de Jira, procesa los datos, los guarda en una Sheets y genera reportes filtrables.",
  stack: ["App Script", "Jira REST API", "Google Sheets", "HTML/CSS", "JS", "JQL"],
  github: "https://github.com/ibarralucas97/reporte-jira",
  url: "https://ejemplo-demo.com",
  images: [
    "assets/images/reportejira/image3.png",
    "assets/images/reportejira/image4.png",
    "assets/images/reportejira/image5.png",
  ]
},
  {
    title: "Laboratorios Linux",
    description: "Practicas de redes, bash, cron y troubleshooting en Linux."
  },
  {
    title: "Dashboard Operativo Soporte",
    description: "Panel de metricas de resoluciones de ticket + info extra",
    need: "Necesidad de tener un promedio y control de la cantidad de dias que tardamos en resolver los casos del cliente",
    solution: "Se desarrolló una solución en Google Apps Script que consume la API de Jira para generar métricas claras y automatizadas sobre el rendimiento del equipo y el estado real de los tickets. La información se presenta en un dashboard diseñado para un entorno de 4 monitores, donde cada pantalla cumple una función específica: una vista de casos en desarrollo, un promedio de tiempos de resolución de líneas 1 y 2, la identificación del operador de guardia técnica y un ranking mensual de tickets resueltos.",
    stack: ["App Script", "Jira REST API", "Google Sheets", "HTML/CSS", "JS", "JQL", "KPI"],
    images: [
      "assets/images/dashboard/image7.png",
      "assets/images/dashboard/image6.png",
    ]
  },
{
  title: "Micronauta Ops",
  description: "Herramienta interna de soporte técnico desarrollada en PowerShell con interfaz gráfica (WinForms)",
  need: "El equipo de soporte necesitaba una herramienta única que reduzca errores humanos, estandarice diagnósticos técnicos y centralice tareas frecuentes de redes, sistema e instalaciones, evitando depender de múltiples scripts o procedimientos manuales.",
  solution: "Se desarrolló una aplicación en PowerShell con interfaz gráfica WinForms que integra módulos de red, sistema y utilidades operativas. Incluye control de acceso por contraseña, consola integrada, diagnósticos avanzados (DNS, firewall, proxy), registro automático de instalaciones vía Telegram y carga dinámica de datos desde Google Sheets.",
  stack: ["PowerShell", "WinForms", "Telegram API", "Google Sheets"],
  github: null,
  images: [
    "assets/images/micronautaops/image1.png",
    "assets/images/micronautaops/image2.png",
  ]
},
  {
    title: "Chequeo URL",
    description: "Bash - cron - Telegram API."
  },
  {
    title: "Web E-commerce",
    description: "JS puro - Firebase - seguridad - deploy en Vercel.",
    url: "https://paginaweb-carniceria.vercel.app/",
    images: [
      "assets/images/web/web2.png",
      "assets/images/web/web1.png",
      "assets/images/web/vercel.png",
      "assets/images/web/storage.png",
      "assets/images/web/firebasedba.png",
    ]
  }
];
