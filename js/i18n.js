/* Small, dependency-free bilingual interface. English is the default language. */
const translations = {
  en: {
    'nav.about': 'About', 'nav.experience': 'Experience', 'nav.skills': 'Skills', 'nav.portfolio': 'Portfolio', 'nav.contact': 'Contact',
    'language.label': 'Language',
    'hero.eyebrow': 'Hi, I’m Christian Román', 'hero.title': 'Software Engineer', 'hero.specialty': 'Full Stack Development · Angular · Backend · Cloud & DevOps',
    'hero.description': 'I build web applications and custom software with Angular, Python, Django and AWS.', 'hero.work': 'View my work', 'hero.cv': 'Download CV',
    'experience.title': 'Experience', 'experience.subtitle': 'Professional experience', 'experience.cv': 'Download my CV',
    'experience.viewnext.role': 'Senior Frontend Engineer', 'experience.viewnext.text': 'Led frontend architecture decisions and Angular 14–20 migrations for enterprise banking applications, advancing microfrontend modernization.', 'experience.viewnext.date': 'May 2024 - Present',
    'experience.hotelbeds.role': 'Senior Frontend Engineer', 'experience.hotelbeds.text': 'Built and optimized high-traffic hotel search, filtering and booking experiences using Angular, supporting thousands of concurrent users.', 'experience.hotelbeds.date': 'Jun 2023 - May 2024',
    'experience.metrica.role': 'Full-Stack Engineer', 'experience.metrica.text': 'Delivered enterprise banking features with Angular and Symfony, including APIs, third-party integrations and automated testing.', 'experience.metrica.date': 'Oct 2021 - Jul 2023',
    'experience.trm.role': 'Full-Stack Engineer', 'experience.trm.text': 'Architected and delivered ERP and comparison platforms end to end, owning system design, databases, infrastructure, CI/CD and key technical decisions.', 'experience.trm.date': 'Mar 2021 - Oct 2021',
    'experience.c2.role': 'Full-Stack Developer', 'experience.c2.text': 'Built web and mobile products for major brands, including real-time applications, indoor positioning and high-traffic e-commerce; designed APIs and authentication.', 'experience.c2.date': 'May 2018 - Mar 2021',
    'experience.wolfcrass.role': 'Full-Stack Engineer / DevOps', 'experience.wolfcrass.text': 'Built Django-based web and commerce applications, mobile apps and managed AWS infrastructure, CI/CD and deployments from scratch.', 'experience.wolfcrass.date': 'Mar 2017 - May 2018',
    'skills.title': 'Skills & expertise', 'skills.intro': 'I help teams design, build and maintain useful digital products.', 'skills.intro2': 'My experience covers product development, backend systems, cloud infrastructure and delivery.',
    'skills.web.title': 'Web Development', 'skills.web.text': 'Responsive, accessible websites and web applications built from the ground up.',
    'skills.backend.title': 'Backend & APIs', 'skills.backend.text': 'Robust services and integrations with Python, Django, databases and REST APIs.',
    'skills.cloud.title': 'Cloud & DevOps', 'skills.cloud.text': 'AWS deployments, Docker, CI/CD pipelines and practical infrastructure automation.',
    'skills.tech.title': 'Technologies', 'skills.tech.text': 'Angular, TypeScript, Python, Django, JavaScript, SQL, AWS, Docker and Git.',
    'portfolio.title': 'Selected work', 'portfolio.website': 'Website', 'portfolio.webapp': 'Web application',
    'contact.title': 'Let’s work together', 'contact.intro': 'Have a project, an opportunity or a technical challenge in mind? Send me a message and I’ll get back to you soon.',
    'contact.name': 'Full name', 'contact.email': 'Email address', 'contact.phone': 'Phone number', 'contact.message': 'Message', 'contact.send': 'Send message', 'contact.note': 'Your details will only be used to reply to your message.', 'contact.namePlaceholder': 'Enter your name...', 'contact.emailPlaceholder': 'name@example.com', 'contact.phonePlaceholder': '(123) 456-7890', 'contact.messagePlaceholder': 'Enter your message here...'
  },
  es: {
    'nav.about': 'Sobre mí', 'nav.experience': 'Experiencia', 'nav.skills': 'Habilidades', 'nav.portfolio': 'Portfolio', 'nav.contact': 'Contacto',
    'language.label': 'Idioma',
    'hero.eyebrow': 'Hola, soy Christian Román', 'hero.title': 'Ingeniero de Software', 'hero.specialty': 'Desarrollo Full Stack · Angular · Backend · Cloud y DevOps',
    'hero.description': 'Creo aplicaciones web y software a medida con Angular, Python, Django y AWS.', 'hero.work': 'Ver mis proyectos', 'hero.cv': 'Descargar CV',
    'experience.title': 'Experiencia', 'experience.subtitle': 'Experiencia profesional', 'experience.cv': 'Descargar mi CV',
    'experience.viewnext.role': 'Ingeniero de Frontend Sénior', 'experience.viewnext.text': 'Lideré decisiones de arquitectura frontend y migraciones de Angular 14–20 en aplicaciones bancarias empresariales, impulsando la modernización mediante microfrontends.', 'experience.viewnext.date': 'Mayo 2024 - Actualidad',
    'experience.hotelbeds.role': 'Ingeniero de Frontend Sénior', 'experience.hotelbeds.text': 'Desarrollé y optimicé el buscador, los filtros y el sistema de reservas hoteleras de alto tráfico con Angular, dando servicio a miles de usuarios simultáneos.', 'experience.hotelbeds.date': 'Junio 2023 - Mayo 2024',
    'experience.metrica.role': 'Ingeniero Full-Stack', 'experience.metrica.text': 'Desarrollé funcionalidades bancarias empresariales con Angular y Symfony, incluyendo APIs, integraciones con terceros y pruebas automatizadas.', 'experience.metrica.date': 'Octubre 2021 - Julio 2023',
    'experience.trm.role': 'Ingeniero Full-Stack', 'experience.trm.text': 'Diseñé y desarrollé de principio a fin plataformas ERP y comparadores, responsabilizándome del diseño del sistema, bases de datos, infraestructura, CI/CD y decisiones técnicas clave.', 'experience.trm.date': 'Marzo 2021 - Octubre 2021',
    'experience.c2.role': 'Desarrollador Full-Stack', 'experience.c2.text': 'Desarrollé productos web y móviles para grandes marcas, incluyendo aplicaciones en tiempo real, posicionamiento en interiores y comercio electrónico de alto tráfico; diseñé APIs y autenticación.', 'experience.c2.date': 'Mayo 2018 - Marzo 2021',
    'experience.wolfcrass.role': 'Ingeniero Full-Stack / DevOps', 'experience.wolfcrass.text': 'Desarrollé aplicaciones web y de comercio electrónico con Django, aplicaciones móviles y gestioné desde cero la infraestructura AWS, CI/CD y los despliegues.', 'experience.wolfcrass.date': 'Marzo 2017 - Mayo 2018',
    'skills.title': 'Habilidades y especialización', 'skills.intro': 'Ayudo a equipos a diseñar, crear y mantener productos digitales útiles.', 'skills.intro2': 'Mi experiencia abarca desarrollo de producto, sistemas backend, infraestructura cloud y despliegues.',
    'skills.web.title': 'Desarrollo web', 'skills.web.text': 'Webs y aplicaciones web responsive y accesibles construidas desde cero.',
    'skills.backend.title': 'Backend y APIs', 'skills.backend.text': 'Servicios e integraciones robustas con Python, Django, bases de datos y APIs REST.',
    'skills.cloud.title': 'Cloud y DevOps', 'skills.cloud.text': 'Despliegues en AWS, Docker, pipelines CI/CD y automatización de infraestructura.',
    'skills.tech.title': 'Tecnologías', 'skills.tech.text': 'Angular, TypeScript, Python, Django, JavaScript, SQL, AWS, Docker y Git.',
    'portfolio.title': 'Proyectos destacados', 'portfolio.website': 'Web', 'portfolio.webapp': 'Aplicación web',
    'contact.title': 'Trabajemos juntos', 'contact.intro': '¿Tienes un proyecto, una oportunidad o un reto técnico en mente? Escríbeme y te responderé pronto.',
    'contact.name': 'Nombre completo', 'contact.email': 'Correo electrónico', 'contact.phone': 'Teléfono', 'contact.message': 'Mensaje', 'contact.send': 'Enviar mensaje', 'contact.note': 'Tus datos solo se utilizarán para responder a tu mensaje.', 'contact.namePlaceholder': 'Escribe tu nombre...', 'contact.emailPlaceholder': 'nombre@ejemplo.com', 'contact.phonePlaceholder': '(123) 456-7890', 'contact.messagePlaceholder': 'Escribe tu mensaje...'
  }
};

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value) element.setAttribute('placeholder', value);
  });
  const cvPath = language === 'es' ? 'pdf/Christian_Roman_CV_ES.pdf' : 'pdf/Christian_Roman_CV_EN.pdf';
  document.querySelectorAll('[data-cv-link]').forEach((link) => {
    link.href = cvPath;
    link.setAttribute('download', '');
  });
  document.title = language === 'es' ? 'Christian Román | Ingeniero de Software' : 'Christian Román | Software Engineer';
  const selector = document.getElementById('languageSelect');
  if (selector) selector.value = language;
  try { localStorage.setItem('site-language', language); } catch (_) {}
}

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('languageSelect');
  let language = 'en';
  try { language = localStorage.getItem('site-language') || 'en'; } catch (_) {}
  applyLanguage(language);
  selector?.addEventListener('change', (event) => applyLanguage(event.target.value));
});
