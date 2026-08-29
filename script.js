/**
 * Raghav Bansal — Professional Information & Digital Hub JavaScript Engine
 * Features Dual-Theme Switcher, 3D Depth Tilt, Reactive Particle Bursts & Scroll Reveals
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. User Configurations & Global State
    // ----------------------------------------------------------------------
    const CONFIG = {
        name: 'Raghav Bansal',
        whatsappNumber: '919876543210',
        instagramHandle: '@raghavbansal0704',
        instagramUrl: 'https://www.instagram.com/raghavbansal0704?igsh=MWN1c2I4N20xMGk2dg==',
        linkedinUrl: 'https://www.linkedin.com/in/raghav-bansal-04a252328?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        githubUrl: 'https://github.com/raghavbansal0704',
        email: 'raghavbansal0704@gmail.com'
    };

    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth < 768);

    // ----------------------------------------------------------------------
    // 2. Dual-Theme Switcher System (Light & Dark Mode)
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';

    function setTheme(themeName) {
        document.body.setAttribute('data-theme', themeName);
        localStorage.setItem('portfolio-theme', themeName);

        if (themeToggleBtn) {
            const icon = themeToggleBtn.querySelector('i');
            if (themeName === 'dark') {
                icon.className = 'fa-solid fa-sun';
                themeToggleBtn.setAttribute('title', 'Switch to Executive Light Theme');
            } else {
                icon.className = 'fa-solid fa-moon';
                themeToggleBtn.setAttribute('title', 'Switch to Google Antigravity Dark Theme');
            }
        }
    }

    // Initialize saved theme
    setTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', (e) => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
            showToast(newTheme === 'dark' ? 'Switched to Google Antigravity Dark Theme' : 'Switched to Executive Light & Gold Theme');
            triggerParticleBurst(e.clientX, e.clientY);
        });
    }

    // ----------------------------------------------------------------------
    // 3. Interactive Background Particle Canvas
    // ----------------------------------------------------------------------
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = [];
        const particleCount = Math.min(Math.floor(window.innerWidth / 20), 45);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 1.8 + 0.8
            });
        }

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);
            const isDark = document.body.getAttribute('data-theme') === 'dark';

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = isDark ? 'rgba(138, 180, 248, 0.4)' : 'rgba(15, 43, 92, 0.25)';
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = isDark 
                            ? `rgba(138, 180, 248, ${0.15 * (1 - dist / 120)})`
                            : `rgba(197, 155, 39, ${0.15 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(drawParticles);
        }

        drawParticles();
    }

    // ----------------------------------------------------------------------
    // 4. Reactive Mouse Spotlight & Particle Bursts
    // ----------------------------------------------------------------------
    const spotlight = document.getElementById('cursor-spotlight');
    if (spotlight && !isTouchDevice) {
        window.addEventListener('mousemove', (e) => {
            spotlight.style.left = `${e.clientX}px`;
            spotlight.style.top = `${e.clientY}px`;
        });
    }

    // Interactive Particle Burst Spawner
    function triggerParticleBurst(x, y) {
        const count = 16;
        const colors = document.body.getAttribute('data-theme') === 'dark' 
            ? ['#8ab4f8', '#81c995', '#fbbc04', '#ea4335', '#ffffff'] 
            : ['#0f2b5c', '#c59b27', '#1e3a8a', '#d97706', '#2563eb'];

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'burst-particle';

            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 6 + 4;
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 60 + 20;

            const targetX = Math.cos(angle) * distance;
            const targetY = Math.sin(angle) * distance;

            particle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                background-color: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 10px ${color};
                transform: translate(-50%, -50%) scale(1);
                transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out;
                opacity: 1;
            `;

            document.body.appendChild(particle);

            requestAnimationFrame(() => {
                particle.style.transform = `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px)) scale(0)`;
                particle.style.opacity = '0';
            });

            setTimeout(() => particle.remove(), 600);
        }
    }

    // Trigger particle burst on interactive element clicks
    document.querySelectorAll('.btn, .social-card, .project-card, .achievement-card, .pub-card, .tab-btn').forEach(elem => {
        elem.addEventListener('click', (e) => {
            triggerParticleBurst(e.clientX, e.clientY);
        });
    });

    // ----------------------------------------------------------------------
    // 5. Immersive 3D Depth Tilt Effect (Desktop)
    // ----------------------------------------------------------------------
    if (!isTouchDevice) {
        const tiltCards = document.querySelectorAll('.glass-card, .project-card, .pub-card, .achievement-card, .social-card, .skill-card');

        tiltCards.forEach(card => {
            card.style.transformStyle = 'preserve-3d';
            card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease';

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // 20-25 deg max tilt
                const rotateX = ((y - centerY) / centerY) * -18;
                const rotateY = ((x - centerX) / centerX) * 18;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(14px) scale(1.02)`;
                card.classList.add('card-3d-active');
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
                card.classList.remove('card-3d-active');
            });
        });
    }

    // ----------------------------------------------------------------------
    // 6. Scroll-Triggered Reveal Animations
    // ----------------------------------------------------------------------
    const revealElements = document.querySelectorAll('.section-header, .project-card, .pub-card, .achievement-card, .social-card, .skill-card, .timeline-item, .contact-info-panel, .contact-form-panel');

    revealElements.forEach(el => el.classList.add('reveal-element'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // ----------------------------------------------------------------------
    // 7. Toast Notification Framework
    // ----------------------------------------------------------------------
    const toastContainer = document.getElementById('toast-container');

    function showToast(message, type = 'success', duration = 3000) {
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            <span>${message}</span>
        `;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'toastOut 0.35s forwards';
            setTimeout(() => toast.remove(), 350);
        }, duration);
    }

    // ----------------------------------------------------------------------
    // 8. Copy-To-Clipboard Handlers
    // ----------------------------------------------------------------------
    document.querySelectorAll('[data-copy]').forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy');
            if (!textToCopy) return;

            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`Copied "${textToCopy}" to clipboard!`);
            }).catch(() => {
                showToast('Failed to copy text', 'error');
            });
        });
    });

    // ----------------------------------------------------------------------
    // 9. Navigation Bar Scroll & Active Link Detection
    // ----------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinksMenu = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Navigation Toggle
    if (mobileToggle && navLinksMenu) {
        mobileToggle.addEventListener('click', () => {
            navLinksMenu.classList.toggle('open');
            const icon = mobileToggle.querySelector('i');
            if (navLinksMenu.classList.contains('open')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars-staggered';
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksMenu.classList.remove('open');
                mobileToggle.querySelector('i').className = 'fa-solid fa-bars-staggered';
            });
        });
    }

    // ----------------------------------------------------------------------
    // 10. About Section Tab Switcher
    // ----------------------------------------------------------------------
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const activePane = document.getElementById(targetTab);
            if (activePane) activePane.classList.add('active');
        });
    });

    // ----------------------------------------------------------------------
    // 11. Project Category Filter
    // ----------------------------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.4s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ----------------------------------------------------------------------
    // 12. Animated Stats Counter
    // ----------------------------------------------------------------------
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasCounted = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                hasCounted = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'), 10);
                    let count = 0;
                    const speed = 2000 / target;

                    const updateCounter = () => {
                        count += Math.ceil(target / 40);
                        if (count >= target) {
                            stat.innerText = target;
                        } else {
                            stat.innerText = count;
                            setTimeout(updateCounter, speed);
                        }
                    };

                    updateCounter();
                });
            }
        });
    }, { threshold: 0.5 });

    const statsBar = document.querySelector('.stats-bar');
    if (statsBar) statsObserver.observe(statsBar);

    // ----------------------------------------------------------------------
    // 13. WhatsApp Direct Modal Logic
    // ----------------------------------------------------------------------
    const waModal = document.getElementById('wa-modal');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalCancelBtn = document.getElementById('modal-cancel');
    const presetBtns = document.querySelectorAll('.preset-btn');
    const waCustomMsgTextarea = document.getElementById('wa-custom-msg');
    const btnLaunchWa = document.getElementById('btn-launch-wa');
    const quickWaNavBtn = document.getElementById('btn-quick-wa');

    function openWaModal() {
        if (waModal) waModal.classList.add('active');
    }

    function closeWaModal() {
        if (waModal) waModal.classList.remove('active');
    }

    document.querySelectorAll('.open-wa-modal').forEach(el => {
        el.addEventListener('click', openWaModal);
    });

    if (quickWaNavBtn) quickWaNavBtn.addEventListener('click', openWaModal);

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeWaModal);
    if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeWaModal);

    if (waModal) {
        waModal.addEventListener('click', (e) => {
            if (e.target === waModal) closeWaModal();
        });
    }

    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            presetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const msg = btn.getAttribute('data-msg');
            if (waCustomMsgTextarea) waCustomMsgTextarea.value = msg;
        });
    });

    if (btnLaunchWa) {
        btnLaunchWa.addEventListener('click', () => {
            const text = waCustomMsgTextarea ? waCustomMsgTextarea.value.trim() : '';
            if (!text) {
                showToast('Please enter a message', 'error');
                return;
            }

            const encodedMsg = encodeURIComponent(text);
            const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMsg}`;
            window.open(waUrl, '_blank', 'noopener,noreferrer');
            closeWaModal();
            showToast('Opening WhatsApp...');
        });
    }

    // ----------------------------------------------------------------------
    // 14. Contact Form Submit Handler
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const btnSubmit = document.getElementById('btn-submit');

    if (contactForm && btnSubmit) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const message = document.getElementById('form-message').value;

            if (!name || !email || !message) {
                showToast('Please fill in all required fields.', 'error');
                return;
            }

            const originalBtnContent = btnSubmit.innerHTML;
            btnSubmit.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;
            btnSubmit.disabled = true;

            setTimeout(() => {
                btnSubmit.innerHTML = `<i class="fa-solid fa-check"></i> Message Sent!`;
                btnSubmit.style.background = 'var(--gold-primary)';
                showToast(`Thank you, ${name}! Your message has been sent successfully.`);

                contactForm.reset();

                setTimeout(() => {
                    btnSubmit.innerHTML = originalBtnContent;
                    btnSubmit.style.background = '';
                    btnSubmit.disabled = false;
                }, 3000);
            }, 1200);
        });
    }

    // ----------------------------------------------------------------------
    // 15. Back To Top Button
    // ----------------------------------------------------------------------
    const backToTopBtn = document.getElementById('btn-back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
