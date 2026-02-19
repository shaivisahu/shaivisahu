const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const internshipData = [
  {
    role: 'Java Full-Stack Intern',
    company: 'Add Your Company Name',
    duration: 'Add dates (e.g., Jun 2025 - Aug 2025)',
    summary: 'Worked on REST APIs, frontend integration, bug fixes, and deployment support.',
    highlights: ['Built feature modules end-to-end', 'Collaborated through Git workflows', 'Improved API response handling'],
  },
];

const certificateData = [
  {
    title: 'Java Full-Stack Development',
    issuer: 'Add Issuer Name',
    year: '2025',
    link: 'https://example.com/certificate-link',
  },
  {
    title: 'Data Structures and Algorithms in Java',
    issuer: 'Add Issuer Name',
    year: '2025',
    link: 'https://example.com/certificate-link',
  },
  {
    title: 'Spring Boot / Backend Certification',
    issuer: 'Add Issuer Name',
    year: '2025',
    link: 'https://example.com/certificate-link',
  },
];

const projectData = [
  {
    name: 'fitness-microservices',
    area: 'Backend architecture',
    stack: 'Java • Microservices • Backend',
    description: 'Java microservices architecture for a fitness domain with modular, scalable backend design.',
    primaryLink: 'https://github.com/shaivisahu/fitness-microservices',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'Personal Portfolio Website',
    area: 'Web presence',
    stack: 'HTML • CSS • UI Design',
    description: 'Live personal portfolio website showcasing skills, profile, and project highlights.',
    primaryLink: 'https://shaivisahu.github.io/personal-portfolio.github.io/',
    primaryLabel: 'Live Demo ↗',
  },
  {
    name: 'Face-Recognition-System',
    area: 'AI/ML + CV',
    stack: 'Python • OpenCV • ML',
    description: 'Computer vision project for facial recognition using Python-based ML/CV tooling.',
    primaryLink: 'https://github.com/shaivisahu/Face-Recognition-System',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'supply_chain_risk_app',
    area: 'Applied analytics',
    stack: 'Python • Analytics • App Design',
    description: 'Risk analysis concept app focused on supply chain insights and data-driven monitoring.',
    primaryLink: 'https://github.com/shaivisahu/supply_chain_risk_app',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'Stock-Price-Prediction-Model-',
    area: 'ML forecasting',
    stack: 'Python • scikit-learn • Pandas',
    description: 'ML model for stock-price forecasting with preprocessing, training, and visualized predictions.',
    primaryLink: 'https://github.com/shaivisahu/Stock-Price-Prediction-Model-',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'ATM-simulation-System',
    area: 'OOP simulation',
    stack: 'Java • OOP • Simulation',
    description: 'Core banking simulation project modeling ATM operations and transaction flow.',
    primaryLink: 'https://shaivisahu.github.io/ATM-simulation-System/',
    primaryLabel: 'Live Demo ↗',
  },
  {
    name: 'Racing-Game',
    area: 'Frontend/game logic',
    stack: 'JavaScript • Game Dev • Frontend',
    description: 'Browser-based racing game demonstrating JavaScript logic, DOM events, and gameplay loops.',
    primaryLink: 'https://shaivisahu.github.io/Racing-Game/',
    primaryLabel: 'Live Demo ↗',
  },
  {
    name: 'DSA-Bootcamp-Java',
    area: 'DSA practice',
    stack: 'Java • DSA • Problem Solving',
    description: 'Consistent DSA practice repository with Java coding exercises and interview prep content.',
    primaryLink: 'https://github.com/shaivisahu/DSA-Bootcamp-Java',
    primaryLabel: 'Repository ↗',
  },
];

const grid = document.getElementById('project-grid');
const search = document.getElementById('project-search');
const projectCount = document.getElementById('project-count');
const languageCount = document.getElementById('language-count');
const searchState = document.getElementById('search-state');
const internshipList = document.getElementById('internship-list');
const certificateList = document.getElementById('certificate-list');

function renderProjects(items, query = '') {
  grid.innerHTML = items
    .map(
      (project) => `
      <article class="project-card">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <small>${project.area}</small>
        <span>${project.stack}</span>
        <a href="${project.primaryLink}" target="_blank" rel="noreferrer">${project.primaryLabel}</a>
      </article>
    `,
    )
    .join('');

  const languages = new Set(
    items.flatMap((item) => item.stack.split('•').map((token) => token.trim()).filter(Boolean)),
  );

  projectCount.textContent = `${items.length} project${items.length === 1 ? '' : 's'}`;
  languageCount.textContent = `${languages.size} keywords`;

  if (query && items.length === 0) {
    searchState.textContent = `No projects matched "${query}". Try "java", "python", or "frontend".`;
  } else if (query) {
    searchState.textContent = `Showing ${items.length} result${items.length === 1 ? '' : 's'} for "${query}".`;
  } else {
    searchState.textContent = 'Showing all projects.';
  }
}


function renderInternships(items) {
  internshipList.innerHTML = items
    .map(
      (item) => `
      <article class="timeline-item">
        <h3>${item.role}</h3>
        <p class="meta">${item.company} • ${item.duration}</p>
        <p>${item.summary}</p>
        <ul>
          ${item.highlights.map((h) => `<li>${h}</li>`).join('')}
        </ul>
      </article>
    `,
    )
    .join('');
}

function renderCertificates(items) {
  certificateList.innerHTML = items
    .map(
      (item) => `
      <article class="cert-card">
        <h3>${item.title}</h3>
        <p>${item.issuer} • ${item.year}</p>
        <a href="${item.link}" target="_blank" rel="noreferrer">View Certificate ↗</a>
      </article>
    `,
    )
    .join('');
}

search.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  const filtered = projectData.filter((project) => {
    const blob = `${project.name} ${project.area} ${project.stack} ${project.description}`.toLowerCase();
    return blob.includes(query);
  });
  renderProjects(filtered, query);
});

renderProjects(projectData);
renderInternships(internshipData);
renderCertificates(certificateData);

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = Array.from({ length: 65 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    size: Math.random() * 2 + 0.5,
  }));
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(56, 189, 248, 0.55)';
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);
resize();
draw();
