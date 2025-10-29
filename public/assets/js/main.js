document.addEventListener('DOMContentLoaded', () => {

    // --- MODO DARK/LIGHT ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    };

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        applyTheme(event.matches ? "dark" : "light");
    });
    
    // --- ANIMAÇÃO DE ABERTURA ---
    const introTimeline = gsap.timeline({
        onComplete: () => {
            gsap.to("#intro-screen", { 
                duration: 0.8, 
                opacity: 0, 
                onComplete: () => {
                    document.getElementById('intro-screen').style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
            gsap.from("header, main, footer", {
                duration: 1,
                opacity: 0,
                delay: 0.2,
                ease: "power2.inOut"
            });
        }
    });

    introTimeline
        .from("#intro-logo", { duration: 1, scale: 0.8, opacity: 0, ease: "power2.out" })
        .to("#intro-logo", { duration: 0.5, filter: "brightness(1.5)", yoyo: true, repeat: 1 }, "-=0.5")
        .to("#intro-logo", { duration: 1, filter: "blur(10px)", opacity: 0, scale: 1.2, delay: 1, ease: "power2.in" });

    // --- ANIMAÇÕES DE SCROLL ---
    ScrollReveal().reveal('.reveal', {
        distance: '50px',
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 200
    });

    // --- DEPOIMENTOS ---
    const testimonials = [
      {
        quote: "A Kivo transformou nosso produto digital — design impecável e entrega pontual.",
        name: "Mariana Silva",
        role: "Head of Product — Pulse Studio",
        avatar: "https://i.postimg.cc/9F0M3H7Y/team-member-1.jpg",
        logo: "https://i.postimg.cc/wMPzL92j/pulse-logo.png"
      },
      {
        quote: "O resultado superou todas as expectativas. A atenção aos detalhes foi incrível.",
        name: "João Pereira",
        role: "CEO — Nexus Creative",
        avatar: "https://i.postimg.cc/L5b6m9n4/team-member-2.jpg",
        logo: "https://i.postimg.cc/6p2D7Vd8/nexus-logo.png"
      },
      {
        quote: "Uma equipe talentosa e dedicada. Recomendo fortemente a Kivo para qualquer projeto de design.",
        name: "Carla Souza",
        role: "Marketing Director — Orbit Inc.",
        avatar: "https://i.postimg.cc/8c3KzX4d/team-member-3.jpg",
        logo: "https://i.postimg.cc/tTWs1tYv/orbit-logo.png"
      }
    ];

    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (testimonialsContainer) {
        testimonials.forEach(testimonial => {
            const card = document.createElement('div');
            card.className = 'testimonial-card card';
            card.innerHTML = `
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="avatar">
                <div class="stars">★★★★☆</div>
                <p class="quote">"${testimonial.quote}"</p>
                <p class="name">${testimonial.name}</p>
                <p class="role">${testimonial.role}</p>
                <img src="${testimonial.logo}" alt="${testimonial.role}" class="client-logo">
            `;
            testimonialsContainer.appendChild(card);
        });
    }

});
