/* =====================================================================
   YOUR CONTENT — edit everything between the lines below.
   This is the only part of the website you need to change.
   ===================================================================== */
const CONTENT = {
  name: "Alex Morgan",
  title: "Product Designer",
  location: "Toronto, Canada",
  photo: "https://placehold.co/320x320/e8f3f1/1f7a73?text=Photo",   // change to "photo.jpg" after you add your photo to the folder
  intro: "Product designer with 6 years of experience turning messy problems into simple, friendly apps. I work closely with engineers and users, test early, and care about every detail from the first sketch to launch.",

  links: {
    email: "alex.morgan@example.com",
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    cv: "CV.pdf"                                                     // your CV file, in the same folder as index.html
  },

  experience: [
    {
      role: "Senior Product Designer",
      company: "Harbor & Pine Studio",
      dates: "2022 – Present",
      results: [
        "Redesigned the checkout flow and lifted completed orders by 18%.",
        "Built a shared design system used by 4 product teams.",
        "Mentored 3 junior designers."
      ]
    },
    {
      role: "Product Designer",
      company: "Maple Street Health",
      dates: "2020 – 2022",
      results: [
        "Designed a patient booking app used by 40,000 people a month.",
        "Cut booking time from 6 minutes to under 2.",
        "Ran 30+ usability tests with real patients."
      ]
    },
    {
      role: "UX Designer",
      company: "Bluefin Digital Agency",
      dates: "2018 – 2020",
      results: [
        "Delivered websites and apps for 12 small-business clients.",
        "Introduced user testing to the agency's process."
      ]
    }
  ],

  skills: ["Product design", "UX research", "Prototyping", "Design systems", "Figma", "Usability testing", "HTML & CSS", "Accessibility (WCAG)"],

  projects: [
    { name: "Budget Buddy", description: "A simple money-tracking app concept for students.", link: "https://example.com/budget-buddy" },
    { name: "Clinic Finder", description: "A map-first redesign for finding walk-in clinics.", link: "https://example.com/clinic-finder" },
    { name: "Calm Inbox", description: "An email app concept that groups messages by priority.", link: "https://example.com/calm-inbox" }
  ],

  certifications: [
    { name: "Google UX Design Certificate", year: "2021" },
    { name: "Nielsen Norman Group UX Certification", year: "2023" },
    { name: "IAAP CPACC Accessibility Certification", year: "2024" }
  ]
};
/* ===================================================================== */


/* ---------- You don't need to edit anything below this line ---------- */

const $ = (id) => document.getElementById(id);

// Create an element with optional class and text (text is always safe, never HTML).
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

const ICONS = {
  email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M3 6h18v12H3z M3 7l9 6 9-6"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9z"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>',
  cv: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16"/></svg>'
};

function button(href, label, icon, primary, extra = {}) {
  const a = el('a', 'btn' + (primary ? ' btn-primary' : ''));
  a.href = href;
  a.innerHTML = ICONS[icon];                 // icons are fixed SVGs from this file
  a.appendChild(document.createTextNode(label));
  Object.assign(a, extra);
  return a;
}

// If the photo can't load (wrong name, no internet), show the person's initials instead.
function initialsAvatar(name) {
  const initials = name.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320"><rect width="100%" height="100%" fill="#e8f3f1"/><text x="50%" y="54%" font-family="Arial, sans-serif" font-size="120" font-weight="700" fill="#1f7a73" text-anchor="middle" dominant-baseline="middle">${initials}</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function render(c) {
  document.title = `${c.name} — ${c.title}`;
  $('topbar-name').textContent = c.name;
  $('name').textContent = c.name;
  $('title').textContent = c.title;
  $('location').textContent = c.location;
  $('intro').textContent = c.intro;

  const photo = $('photo');
  photo.alt = `Photo of ${c.name}`;
  photo.onerror = () => { photo.onerror = null; photo.src = initialsAvatar(c.name); };
  photo.src = c.photo || initialsAvatar(c.name);

  // Contact buttons
  const actions = $('actions');
  const L = c.links;
  if (L.cv) actions.appendChild(button(L.cv, 'Download CV', 'cv', true, { download: '' }));
  if (L.email) actions.appendChild(button('mailto:' + L.email, 'Email', 'email'));
  if (L.linkedin) actions.appendChild(button(L.linkedin, 'LinkedIn', 'linkedin', false, { target: '_blank', rel: 'noopener' }));
  if (L.github) actions.appendChild(button(L.github, 'GitHub', 'github', false, { target: '_blank', rel: 'noopener' }));

  // Contact line that only shows on the printed CV
  const contact = el('p', 'print-contact',
    [c.location, L.email, L.linkedin && L.linkedin.replace(/^https?:\/\/(www\.)?/, ''), L.github && L.github.replace(/^https?:\/\//, '')]
      .filter(Boolean).join('  ·  '));
  $('intro').after(contact);

  // Experience
  const exp = $('experience');
  c.experience.forEach(job => {
    const card = el('article', 'job');
    const head = el('div', 'job-head');
    const left = el('div');
    left.appendChild(el('h3', null, job.role));
    left.appendChild(el('span', 'company', job.company));
    head.appendChild(left);
    head.appendChild(el('span', 'dates', job.dates));
    card.appendChild(head);
    const ul = el('ul');
    job.results.forEach(r => ul.appendChild(el('li', null, r)));
    card.appendChild(ul);
    exp.appendChild(card);
  });

  // Skills
  const skills = $('skills');
  c.skills.forEach(s => skills.appendChild(el('li', null, s)));

  // Projects
  const projects = $('projects');
  c.projects.forEach(p => {
    const card = el('article', 'card');
    card.appendChild(el('h3', null, p.name));
    card.appendChild(el('p', null, p.description));
    if (p.link) {
      const a = el('a', null, 'View project →');
      a.href = p.link; a.target = '_blank'; a.rel = 'noopener';
      a.setAttribute('aria-label', `View project: ${p.name}`);
      card.appendChild(a);
    }
    projects.appendChild(card);
  });

  // Certifications
  const certs = $('certifications');
  c.certifications.forEach(cert => {
    const li = el('li');
    li.appendChild(el('span', null, cert.name));
    li.appendChild(el('span', 'year', cert.year));
    certs.appendChild(li);
  });

  $('footer-text').textContent = `© ${new Date().getFullYear()} ${c.name}`;
}

// Dark mode: remembers your choice in this browser.
function setupTheme() {
  const btn = $('theme-toggle');
  const apply = (dark) => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  };
  apply(document.documentElement.getAttribute('data-theme') === 'dark');
  btn.addEventListener('click', () => {
    const dark = document.documentElement.getAttribute('data-theme') !== 'dark';
    apply(dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) { /* storage blocked: still works for this visit */ }
  });
}

render(CONTENT);
setupTheme();
