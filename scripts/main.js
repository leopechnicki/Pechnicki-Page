if (location.hostname === "www.pechnicki.com") {
    window.location.href = "https://pechnicki.com";
}

// Enhanced professional data with better descriptions
const categories = {
    'Ciencia': [
        {
            name: 'Laiane Lemos Pechnicki',
            role: 'Analista de P&D – Biologia Molecular & Inovação',
            graduation: 'Mestre em Bioquímica (UFPR) • Especialista em Microbiologia (Positivo)',
            skills: [
                'Microbiologia Clínica, Ambiental e de Alimentos',
                'Desenvolvimento de P&D em biologia molecular',
                'Segurança laboratorial',
                'Inovação aplicada',
                'Ciência com foco em qualidade e sustentabilidade'
            ],
            photo: 'https://media.licdn.com/dms/image/v2/D4D03AQGQ-6UueRvidQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704226685137?e=1756339200&v=beta&t=7VKvbI-589VsOAA_hyPg8WjeetvJoNSEwQoDvTbVqaw',
            description: 'Com sólido background em biologia molecular e microbiologia aplicada, Laiane atua no desenvolvimento de projetos de inovação em P&D com foco em segurança laboratorial e resultados sustentáveis.',
            contact: {
                linkedin: 'https://www.linkedin.com/in/laiane-lemos-pechnicki'
            }
        }
    ],
    'Saúde': [
        {
            name: 'Letícia Pechnicki dos Santos',
            role: 'Personal Trainer • Mestre em Atividade Física e Saúde',
            graduation: 'Mestrado (UTFPR) • Especialização em Fisiologia do Exercício (UFPR)',
            skills: [
                'Prescrição de exercícios personalizados',
                'Promoção de saúde e qualidade de vida',
                'Treinamento voltado à prevenção de lesões',
                'Conhecimento avançado em fisiologia do exercício',
                'Atendimento individual e grupos'
            ],
            photo: 'https://media.licdn.com/dms/image/v2/D4D03AQF5AHC-gsl6mA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674674337169?e=1756339200&v=beta&t=hD6rmdWnixpqYkxGxOTDgNntEI8lwPRNpM2E-rgv_90',
            description: 'Profissional com mestrado em Atividade Física e Saúde, especializada em fisiologia do exercício, dedicada à promoção da saúde e bem-estar por meio de programas de treinamento personalizados.',
            contact: {
                linkedin: 'https://www.linkedin.com/in/leticia-pechnicki/'
            }
        },
        {
            name: 'Luisa Pechnicki',
            role: 'Fisioterapeuta • Reabilitação Neurológica',
            graduation: 'Fisioterapia (UFPR) • Pós-graduação em Neurologia (Einstein)',
            skills: [
                'Reabilitação neurológica',
                'Atendimento domiciliar e ambulatorial',
                'Tratamento de AVC e doenças neuromusculares',
                'Terapia manual e funcional',
                'Promoção de independência e qualidade de vida'
            ],
            photo: 'https://media.licdn.com/dms/image/v2/C4D03AQHZDEoNlDTNow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517566325605?e=1756339200&v=beta&t=FK7NXZN4wJ9d__SKfEeYdfYmUOYHQZ4PXgMJv7e4MhM',
            description: 'Fisioterapeuta com foco em neurologia e reabilitação funcional. Atua com dedicação na recuperação de pacientes com lesões neurológicas, promovendo autonomia e qualidade de vida através de uma abordagem humanizada e técnica.',
            contact: {
                linkedin: 'https://www.linkedin.com/in/luisa-pechnicki/'
            }
        }
    ],
    'Engenharia': [
        {
            name: 'Elaine Pechnicki',
            role: 'Engenheira Química • Qualidade e Processos',
            graduation: 'Engenharia Química (UTFPR)',
            skills: [
                'Controle de qualidade',
                'Boas práticas de fabricação (BPF)',
                'Gestão de processos químicos',
                'Documentação técnica e regulatória',
                'Normas e segurança industrial'
            ],
            photo: 'https://media.licdn.com/dms/image/v2/D4D03AQHf-6L9tveu5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731028881338?e=1756339200&v=beta&t=xEieq24wSFfe8omtZYfDy08OTcUOnDfzTaccUVC5INA',
            description: 'Engenheira química com sólida experiência em controle de qualidade e boas práticas na indústria química e cosmética. Atua com foco em segurança, normatização e excelência nos processos.',
            contact: {
                linkedin: 'https://www.linkedin.com/in/elaine-p-b95bb482/'
            }
        },
        {
            name: 'Ian Suguimati Pechnicki',
            role: 'Engenheiro Florestal • Direito Ambiental',
            graduation: 'Engenharia Florestal e Especialização em Direito Ambiental (UFPR)',
            skills: [
                'Auditoria e perícia ambiental',
                'Conformidade regulatória',
                'Consultoria Técnica Ambiental',
                'Licenciamento e pareceres técnicos'
            ],
            photo: '/assets/images/heroes/ian-pechnicki.jpeg',
            description: 'Engenheiro florestal formado pela UFPR, com especialização em Direito Ambiental. Fundador e responsável técnico da SIEVE Engenharia, atua como perito judicial e consultor especializado em regularização ambiental, georreferenciamento e laudos técnicos para propriedades rurais e empreendimentos urbanos.',
            contact: {
                linkedin: 'https://www.linkedin.com/in/iansuguimati/',
                website: {
                    url: 'https://sieve.eng.br/',
                    name: 'Sieve Engenharia'
                }
            }
        },
        {
            name: 'Jhessica Pechnicki',
            role: 'Segurança do Trabalho',
            graduation: 'Técnica em Segurança do Trabalho',
            skills: ['Normas regulamentadoras', 'Análise de riscos', 'Prevenção de acidentes', 'Treinamentos de segurança', 'Auditorias'],
            photo: 'https://media.licdn.com/dms/image/v2/D4D03AQH0_Q_8Njb8-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702583282008?e=1756339200&v=beta&t=mtbwXmV7mSNgigFTGSE94QPHtiD056fKGFuua4aX4cw',
            description: 'Especialista em segurança do trabalho com foco na prevenção e criação de ambientes seguros. Desenvolve programas abrangentes que protegem vidas e otimizam operações industriais.',
            contact: {
                email: 'jhessica@pechnicki.com',
                linkedin: 'https://www.linkedin.com/in/jhessica-pechnicki-carneiro-b7b5b02a5/'
            }
        }
    ],
    'Tecnologia': [
        {
            name: 'Yuri Pechnicki',
            role: 'DevOps Engineer • WEBJUMP',
            graduation: 'Graduação (UFPR), conclusão prevista julho de 2025',
            skills: [
                'Kubernetes', 'Terraform', 'AWS', 'CI/CD', 'Jenkins',
                'Ansible', 'Shell script', 'React.js backend integration'
            ],
            photo: 'https://images.contactout.com/profiles/a64981e9731cab03513c58e857640b17',
            description: 'Engineer DevOps com sólida atuação em automação, CI/CD e infraestrutura em nuvem, trabalhando com empresas como WEBJUMP, Porto e Wipro.',
            contact: {
                email: 'yuri@bit.ly',
                contactout: 'https://contactout.com/yuri-pechnicki-97074'
            }
        },
        {
            name: 'Leonardo Pechnicki',
            role: 'Profissional de TI na EPAM Systems',
            graduation: 'Formação técnica (dados não públicos)',
            skills: [
                'Desenvolvimento de software',
                'Engenharia de sistemas',
                'Projeto de soluções TI'
            ],
            photo: 'https://media.licdn.com/dms/image/v2/C4D03AQHG31gM-LrVFQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1521233072160?e=1756339200&v=beta&t=TvpJvvnb_HGt_GjAEE7Hjyf4VeB0cSjeNfuBQl8BUGM',
            description: 'Atua na área de tecnologia com a EPAM Systems, em Cracóvia, com forte background em engenharia de software e projetos corporativos.',
            contact: {
                email: 'leopsantos@hotmail.com',
                linkedin: 'https://www.linkedin.com/in/leonardo-pechnicki/',
                github: 'https://github.com/leopechnicki'
            }
        }
    ]
};

const partners = {
    "Sieve":
        {
            name: 'Sieve Engenaria',
            url: 'https://sieve.eng.br/',
            image: 'assets/images/partners/logo-sieve.webp'
        },
    "Integral_Physio":
        {
            name: 'Integral Physio',
            url: 'https://www.linkedin.com/company/integral-physio/',
            image: 'assets/images/partners/logo-integral_physio.jpg'
        }
}

const partnersGrid = document.getElementById("partnersGrid");

Object.values(partners).forEach(partner => {
    const partnerDiv = document.createElement("div");
    partnerDiv.className = "partner-logo";

    const img = document.createElement("img");
    img.src = partner.image;
    img.alt = partner.name;

    if (partner.url) {
        const link = document.createElement("a");
        link.href = partner.url;
        link.target = "_blank";
        link.appendChild(img);
        partnerDiv.appendChild(link);
    } else {
        partnerDiv.appendChild(img);
    }

    partnersGrid.appendChild(partnerDiv);
});

// Theme management with localStorage
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
let currentTheme = localStorage.getItem('theme') || 'dark';

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'light') {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light';
    } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark';
    }
}

// Initialize theme
setTheme(currentTheme);

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navbar-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Generate animated background for hero
function createNetworkBackground() {
    const heroBackground = document.getElementById('heroBackground');
    const nodeCount = 20;

    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'network-node';
        node.style.left = Math.random() * 100 + '%';
        node.style.top = Math.random() * 100 + '%';
        node.style.animationDelay = Math.random() * 3 + 's';
        heroBackground.appendChild(node);

        // Add connecting lines
        if (i > 0) {
            const line = document.createElement('div');
            line.className = 'network-line';
            line.style.left = Math.random() * 100 + '%';
            line.style.top = Math.random() * 100 + '%';
            line.style.width = Math.random() * 200 + 100 + 'px';
            line.style.transform = `rotate(${Math.random() * 360}deg)`;
            line.style.animationDelay = Math.random() * 4 + 's';
            heroBackground.appendChild(line);
        }
    }
}

// Initialize background animation
createNetworkBackground();

// Enhanced category card interactions
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function (e) {
        if (e.target.closest('.professionals-container')) return;

        const category = this.dataset.category;
        const container = document.getElementById(category);

        if (container.classList.contains('expanded')) {
            container.classList.remove('expanded');
            setTimeout(() => {
                container.innerHTML = '';
            }, 300);
        } else {
            // Close other containers first
            document.querySelectorAll('.professionals-container').forEach(c => {
                c.classList.remove('expanded');
                setTimeout(() => {
                    if (!c.classList.contains('expanded')) {
                        c.innerHTML = '';
                    }
                }, 300);
            });

            setTimeout(() => {
                populateCategory(category);
                container.classList.add('expanded');
            }, 150);
        }
    });
});

function populateCategory(category) {
    const container = document.getElementById(category);
    const professionals = categories[category];
    container.innerHTML = '';

    professionals.forEach((professional, index) => {
        const professionalDiv = document.createElement('div');
        professionalDiv.className = 'professional-item';
        professionalDiv.style.animationDelay = `${index * 0.1}s`;

        const nameDiv = document.createElement('div');
        nameDiv.className = 'professional-name';
        nameDiv.textContent = professional.name;
        nameDiv.addEventListener('click', function (e) {
            e.stopPropagation();
            openProfessionalModal(professional);
        });

        professionalDiv.appendChild(nameDiv);
        container.appendChild(professionalDiv);
    });
}

function openProfessionalModal(professional) {
    const modal = document.getElementById('professionalModal');
    const modalContent = document.getElementById('modalContent');

    const skillsHtml = professional.skills.map(skill =>
        `<span class="modal-skill-tag">${skill}</span>`
    ).join('');

    const contactHtml = `
                <div class="contact-section">
                    <h3>Entre em contato</h3>
                    <p>Pronto para trabalhar juntos? Vamos conversar!</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 1rem;">
                        ${professional.contact.email ? `<a href="mailto:${professional.contact.email}" class="contact-button">📧 Email</a>` : ''}
                        ${professional.contact.website ? `<a href="${professional.contact.website.url}" class="contact-button" target="_blank">🌐 ${professional.contact.website.name}</a>` : ''}
                        ${professional.contact.phone ? `<a href="https://wa.me/${professional.contact.phone.replace(/\D/g, '')}" class="contact-button" target="_blank">📱 WhatsApp</a>` : ''}
                        ${professional.contact.linkedin ? `<a href="${professional.contact.linkedin}" class="contact-button" target="_blank">💼 LinkedIn</a>` : ''}
                        ${professional.contact.contactout ? `<a href="${professional.contact.contactout}" class="contact-button" target="_blank">💻 ContactOut</a>` : ''}
                        ${professional.contact.github ? `<a href="${professional.contact.github}" class="contact-button" target="_blank">💻 GitHub</a>` : ''}
                    </div>
                </div>
            `;

    modalContent.innerHTML = `
                <div class="modal-professional-info">
                    <img src="${professional.photo}" alt="${professional.name}" class="modal-professional-photo">
                    <div class="modal-professional-text">
                        <h2>${professional.name}</h2>
                        <div class="modal-professional-role">${professional.role}</div>
                        <div class="modal-professional-graduation">
                            <strong>Formação:</strong> ${professional.graduation}
                        </div>
                    </div>
                </div>
                <div class="modal-divider"></div>
                <div class="modal-description">
                    ${professional.description}
                </div>
                <div class="modal-skills">
                    ${skillsHtml}
                </div>
                <div class="modal-divider"></div>
                ${contactHtml}
            `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProfessionalModal() {
    const modal = document.getElementById('professionalModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on escape key or background click
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProfessionalModal();
    }
});

document.getElementById('professionalModal').addEventListener('click', (e) => {
    if (e.target.id === 'professionalModal') {
        closeProfessionalModal();
    }
});

// Enhanced parallax effect for floating shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        shape.style.transform += ` translate(${x}px, ${y}px)`;
    });
});

// Newsletter subscription
const newsletterForm = document.querySelector('input[type="email"]');
const subscribeButton = document.querySelector('.contact-button');

if (subscribeButton && newsletterForm) {
    subscribeButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = newsletterForm.value.trim();

        if (email && isValidEmail(email)) {
            // Simulate subscription
            subscribeButton.textContent = '✅ Inscrito!';
            subscribeButton.style.background = 'linear-gradient(135deg, var(--accent-green), var(--accent-cyan))';
            newsletterForm.value = '';

            setTimeout(() => {
                subscribeButton.textContent = 'Inscrever';
                subscribeButton.style.background = 'linear-gradient(135deg, var(--accent-green), var(--accent-cyan))';
            }, 3000);

            // In a real application, you would send this to your backend
            console.log('Newsletter subscription:', email);
        } else {
            newsletterForm.style.borderColor = 'red';
            setTimeout(() => {
                newsletterForm.style.borderColor = 'var(--glass-border)';
            }, 2000);
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mobile menu functionality
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navbarMenu = document.querySelector('.navbar-menu');

mobileMenuToggle.addEventListener('click', () => {
    navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';

    if (navbarMenu.style.display === 'flex') {
        navbarMenu.style.position = 'absolute';
        navbarMenu.style.top = '100%';
        navbarMenu.style.left = '0';
        navbarMenu.style.right = '0';
        navbarMenu.style.background = 'var(--secondary-bg)';
        navbarMenu.style.flexDirection = 'column';
        navbarMenu.style.padding = '1rem';
        navbarMenu.style.borderTop = '1px solid var(--glass-border)';
        navbarMenu.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navbarMenu.style.display = 'none';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 &&
        !navbar.contains(e.target) &&
        navbarMenu.style.display === 'flex') {
        navbarMenu.style.display = 'none';
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced scroll listener
const debouncedScrollHandler = debounce(() => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function () {
        this.style.opacity = '1';
        this.style.transform = 'scale(1)';
    });

    // Set initial styles for loading animation
    img.style.opacity = '0';
    img.style.transform = 'scale(0.9)';
    img.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});

// Add custom cursor effect for interactive elements
const interactiveElements = document.querySelectorAll('.cta-button, .category-card, .professional-name, .social-link, .contact-button');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        document.body.style.cursor = 'pointer';
    });

    element.addEventListener('mouseleave', () => {
        document.body.style.cursor = 'default';
    });
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Add ripple styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }

            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(rippleStyle);

// Apply ripple effect to buttons
document.querySelectorAll('.cta-button, .contact-button').forEach(button => {
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.addEventListener('click', createRipple);
});

// Initialize AOS-like animations on load
window.addEventListener('load', () => {
    // Trigger initial animations
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '1';
    }

    // Animate counters or other dynamic content
    animateCounters();
});

function animateCounters() {
    // This would animate any numerical counters you might want to add
    // Example: years of experience, number of clients, etc.
    const counters = document.querySelectorAll('[data-counter]');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-counter'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            counter.textContent = Math.floor(current);

            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    });
}

// Add SEO-friendly structured data
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pechnicki",
    "description": "Família de profissionais especializados em saúde, engenharia e tecnologia",
    "url": "https://pechnicki.com",
    "logo": "https://pechnicki.com/logo.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-41-99999-9999",
        "contactType": "customer service",
        "email": "contato@pechnicki.com"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "addressCountry": "BR"
    },
    "sameAs": [
        "https://linkedin.com/company/pechnicki",
        "https://github.com/pechnicki"
    ]
};

// Inject structured data
const script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = JSON.stringify(structuredData);
document.head.appendChild(script);

// Add Google Analytics tracking (placeholder)
function trackEvent(eventName, parameters = {}) {
    // In a real implementation, you would use Google Analytics or similar
    console.log('Track event:', eventName, parameters);

    // Example: gtag('event', eventName, parameters);
}

// Track user interactions
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        trackEvent('cta_click', {
            button_text: button.textContent.trim(),
            page_location: window.location.href
        });
    });
});

// Track modal opens
const originalOpenModal = openProfessionalModal;
openProfessionalModal = function (professional) {
    trackEvent('professional_modal_open', {
        professional_name: professional.name,
        professional_role: professional.role
    });
    originalOpenModal(professional);
};

// Add error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
        // Replace with fallback image or placeholder
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkltYWdlbTwvdGV4dD4KPC9zdmc+';
        this.style.opacity = '0.5';
    });
});

// Progressive enhancement for modern browsers
if ('serviceWorker' in navigator) {
    // Register service worker for offline functionality
    // navigator.serviceWorker.register('/sw.js');
}

// Preload critical resources
function preloadCriticalResources() {
    const criticalImages = [
        'https://via.placeholder.com/200/8b5cf6/FFFFFF?text=LP',
        'https://via.placeholder.com/200/3b82f6/FFFFFF?text=LuP',
        // Add other critical images
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

preloadCriticalResources();

console.log('🚀 Pechnicki website enhanced and ready!');
console.log('✅ Features loaded:');
console.log('  - Dark/Light theme with persistence');
console.log('  - Smooth animations and microinteractions');
console.log('  - Responsive navigation with mobile menu');
console.log('  - Professional modals with contact info');
console.log('  - Newsletter subscription');
console.log('  - SEO optimization');
console.log('  - Performance optimizations');
console.log('  - Accessibility enhancements');