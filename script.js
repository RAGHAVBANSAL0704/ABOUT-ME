/**
 * ==============================================================================
 * RAGHAV BANSAL — EXECUTIVE PORTFOLIO ENGINE
 * B.Tech Agricultural Engineering @ CCS HAU Hisar (2028)
 * Prompt Engineering • CAD 3D Design (Fusion 360) • Vercel Cloud Deployments
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    // --------------------------------------------------------------------------
    // 1. Default Portfolio Dataset (12 Vercel Apps, Achievements & Profiles)
    // --------------------------------------------------------------------------
    const DEFAULT_PORTFOLIO_DATA = {
        adminPin: "raghav2026",
        profile: {
            name: "Raghav Bansal",
            statusBadge: "B.Tech Agricultural Engineering @ CCS HAU Hisar (2028)",
            headline: "Innovating Tech, CAD & <br><span class=\"gradient-text\">Prompt Engineering</span>",
            bio: "Hello! I am Raghav Bansal. Pursuing B.Tech in Agricultural Engineering at CCS HAU Hisar. Final Year NCC Cadet with NCC 'B' Certificate ('A' Grade), skilled in Prompt Engineering for diverse problem-solving, AutoCAD & Fusion 360 (50+ 3D Models), and creator of deployed Vercel applications. Dedicated to Farmer Welfare & Viksit Bharat 2047.",
            statProjects: 12,
            statCad: 50,
            statGrad: 2028,
            statVision: 2047
        },
        socials: {
            email: "raghavbansal0704@gmail.com",
            whatsappNumber: "919999999999",
            githubUrl: "https://github.com/raghavbansal0704",
            linkedinUrl: "https://www.linkedin.com/in/raghav-bansal-04a252328?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            instagramUrl: "https://www.instagram.com/raghavbansal0704?igsh=MWN1c2I4N20xMGk2dg==",
            instagramHandle: "@raghavbansal0704"
        },
        achievements: [
            {
                id: "ach-1",
                tag: "NCC HONOR",
                title: "NCC 'B' Certificate ('A' Grade)",
                desc: "Awarded top 'A' Grade in NCC 'B' Certificate Examination. Currently serving in Final Year NCC Senior Cadence.",
                icon: "fa-solid fa-medal",
                color: "gold-icon"
            },
            {
                id: "ach-2",
                tag: "AI & TECH SKILL",
                title: "Prompt Engineering Expert",
                desc: "Specialized in Prompt Engineering across diverse domain tasks, complex problem solving, and AI workflow integration.",
                icon: "fa-solid fa-wand-magic-sparkles",
                color: "navy-icon"
            },
            {
                id: "ach-3",
                tag: "ENGINEERING CAD",
                title: "50+ Fusion 360 3D Models",
                desc: "Successfully designed and modeled 50+ basic to intermediate 3D CAD components in Autodesk Fusion 360 & AutoCAD.",
                icon: "fa-solid fa-cube",
                color: "blue-icon"
            },
            {
                id: "ach-4",
                tag: "ACADEMIC BOARDS",
                title: "83% (10th) & 81% (12th) CBSE",
                desc: "High academic distinction under CBSE New Delhi in 10th Board (83%) and 12th Board Science stream (81%).",
                icon: "fa-solid fa-school",
                color: "green-icon"
            }
        ],
        projects: [
            {
                id: "proj-1",
                title: "About Me — Executive Portfolio",
                desc: "Official digital portfolio and executive information hub showcasing B.Tech Agricultural Engineering, 50+ CAD models, and cloud deployments.",
                category: "web",
                badgeText: "Portfolio Hub",
                vercelUrl: "https://about-me-sable-two-19.vercel.app/",
                githubUrl: "https://github.com/raghavbansal0704/ABOUT-ME",
                icon: "fa-solid fa-address-card",
                banner: "banner-gradient-1",
                tags: "Vercel, Executive UI, Portfolio, Responsive"
            },
            {
                id: "proj-2",
                title: "Main NCC Portal",
                desc: "Digital operations and cadet management platform built for NCC units with structured updates, cadet resources, and fast cloud hosting.",
                category: "web",
                badgeText: "NCC Portal",
                vercelUrl: "https://main-portal-ncc-01.vercel.app/",
                githubUrl: "https://github.com/raghavbansal0704",
                icon: "fa-solid fa-shield-halved",
                banner: "banner-gradient-2",
                tags: "Vercel, NCC Portal, Cadet Ops, Responsive"
            },
            {
                id: "proj-3",
                title: "Labs and Atlas Suite",
                desc: "Interactive computational science suite featuring multi-dimensional atlas visualizations, experimental datasets, and laboratory analytics.",
                category: "ai-science",
                badgeText: "Science Suite",
                vercelUrl: "https://labs-and-atlas-suite.vercel.app/",
                githubUrl: "https://github.com/raghavbansal0704/LABS-AND-ATLAS-SUITE",
                icon: "fa-solid fa-flask-vial",
                banner: "banner-gradient-3",
                tags: "Vercel, Atlas Suite, Scientific UI, Data Viz"
            },
            {
                id: "proj-4",
                title: "Main Sci Space Portal",
                desc: "Astronomy and deep space exploration platform modeling celestial mechanics, cosmic physics calculations, and astronomical discovery.",
                category: "ai-science",
                badgeText: "Space Portal",
                vercelUrl: "https://main-sci-space-portal.vercel.app/",
                githubUrl: "https://github.com/raghavbansal0704/MAIN-SCI-SPACE-PORTAL",
                icon: "fa-solid fa-user-astronaut",
                banner: "banner-gradient-2",
                tags: "Vercel, Space Portal, Astronomy, Astrophysics"
            },
            {
                id: "proj-5",
                title: "Evolution & Genetics Explorer",
                desc: "Computational biology explorer modeling genetic mutations, natural selection trajectories, and trait inheritance lineages.",
                category: "ai-science",
                badgeText: "Genetics Explorer",
                vercelUrl: "https://evolution-genetics-explorer.vercel.app/",
                githubUrl: "https://github.com/raghavbansal0704/EVOLUTION-GENETICS-EXPLORER",
                icon: "fa-solid fa-dna",
                banner: "banner-gradient-1",
                tags: "Vercel, Genetics, Evolution, Bio-Tech"
            },
            {
                id: "proj-6",
                title: "GATE AG Prep Web Portal",
                desc: "Specialized preparation platform for GATE Agricultural Engineering aspirants with curated study modules and exam analytics.",
                category: "web",
                badgeText: "GATE Prep",
                vercelUrl: "https://gate-ag-prep-web.vercel.app/",
                githubUrl: "https://github.com/raghavbansal0704",
                icon: "fa-solid fa-graduation-cap",
                banner: "banner-gradient-3",
                tags: "Vercel, GATE Agri-Eng, AgriTech, Exam Prep"
            },
            {
                id: "proj-7",
                title: "HackHub by Raghav",
                desc: "Central developer utility toolkit and project repository hub featuring developer shortcuts, sandbox tools, and tech resources.",
                category: "web",
                badgeText: "Dev Hub",
                vercelUrl: "https://hackhub-by-raghav.vercel.app/",
                githubUrl: "https://github.com/raghavbansal0704/HACKHUB-BY-RAGHAV",
                icon: "fa-solid fa-terminal",
                banner: "banner-gradient-1",
                tags: "Vercel, HackHub, Developer Tools, Code Hub"
            },
            {
                id: "proj-8",
                title: "Security Prank 01 AI",
                desc: "Interactive cybersecurity simulator and AI terminal interface demonstrating authentic command sequences and cyber visuals.",
                category: "simulations",
                badgeText: "AI Simulator",
                vercelUrl: "https://security-prank-01-ai.vercel.app/",
                githubUrl: "https://github.com/raghavbansal0704/SECURITY-PRANK-01-AI-",
                icon: "fa-solid fa-user-secret",
                banner: "banner-gradient-2",
                tags: "Vercel, AI Prank, Cyber Terminal, Interactive"
            },
            {
                id: "proj-9",
                title: "Earth and Ember Official",
                desc: "Clean web application integrating environmental awareness, natural ecosystems, and sustainable design aesthetics.",
                category: "web",
                badgeText: "Earth & Ember",
                vercelUrl: "https://earth-and-amber-official.vercel.app/",
                githubUrl: "https://github.com/raghavbansal0704/EARTH-AND-AMBER-OFFICIAL",
                icon: "fa-solid fa-mountain-sun",
                banner: "banner-gradient-3",
                tags: "Vercel, Earth & Ember, Sustainability, Modern UI"
            },
            {
                id: "proj-10",
                title: "Author Web — Dr. RRA",
                desc: "Dedicated academic and literary author website showcasing published volumes, research papers, archives, and scholarly writings.",
                category: "web",
                badgeText: "Author Portal",
                vercelUrl: "https://author-website-drab-three.vercel.app/",
                githubUrl: "https://github.com/raghavbansal0704/MAIN-AUTHOR-WEB-DR-RRA-",
                icon: "fa-solid fa-book-open-reader",
                banner: "banner-gradient-1",
                tags: "Vercel, Author Portal, Publications, Editorial"
            },
            {
                id: "proj-11",
                title: "Coin Toss Simulation v2",
                desc: "Advanced Monte Carlo probability simulation engine with trial distribution graphs, streak analysis, and interactive stats.",
                category: "simulations",
                badgeText: "Simulator v2",
                vercelUrl: "https://coin-toss-simulation-v2.vercel.app/",
                githubUrl: "https://github.com/raghavbansal0704/COIN-TOSS-SIMULATION-V2",
                icon: "fa-solid fa-chart-line",
                banner: "banner-gradient-2",
                tags: "Vercel, Monte Carlo, Statistics, Probability"
            },
            {
                id: "proj-12",
                title: "Coin Toss Simulation v1",
                desc: "Mathematical probability simulation engine computing true-random coin flips with visual feedback and outcome ratios.",
                category: "simulations",
                badgeText: "Simulator v1",
                vercelUrl: "https://coin-toss-simulation-v1.vercel.app/",
                githubUrl: "https://github.com/raghavbansal0704/COIN-TOSS-SIMULATION-V1",
                icon: "fa-solid fa-coins",
                banner: "banner-gradient-3",
                tags: "Vercel, Math Simulation, JavaScript, Fast UI"
            }
        ]
    };

    // --------------------------------------------------------------------------
    // 2. Local Storage Hydration
    // --------------------------------------------------------------------------
    const STORAGE_KEY = "raghav_portfolio_data";

    function loadPortfolioData() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                return Object.assign({}, DEFAULT_PORTFOLIO_DATA, parsed, {
                    profile: Object.assign({}, DEFAULT_PORTFOLIO_DATA.profile, parsed.profile || {}),
                    socials: Object.assign({}, DEFAULT_PORTFOLIO_DATA.socials, parsed.socials || {}),
                    achievements: parsed.achievements || DEFAULT_PORTFOLIO_DATA.achievements,
                    projects: parsed.projects || DEFAULT_PORTFOLIO_DATA.projects
                });
            }
        } catch (e) {
            console.error("Storage load error:", e);
        }
        return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
    }

    let PortfolioData = loadPortfolioData();

    function savePortfolioData() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(PortfolioData));
        } catch (e) {
            console.error("Storage save error:", e);
        }
    }

    // --------------------------------------------------------------------------
    // 3. Theme Mode Controller (Executive Light / Google Dark)
    // --------------------------------------------------------------------------
    const themeToggleBtn = document.getElementById("theme-toggle");
    let currentTheme = localStorage.getItem("raghav_theme") || "light";
    let isDarkTheme = (currentTheme === "dark");

    function applyTheme(theme, showFeedback = false) {
        currentTheme = theme;
        isDarkTheme = (theme === "dark");
        document.documentElement.setAttribute("data-theme", theme);
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("raghav_theme", theme);
        updateThemeIcon(theme);
        if (showFeedback) {
            showToast("Theme: " + (theme === "dark" ? "Google Dark" : "Executive Light"));
        }
    }

    applyTheme(currentTheme, false);

    let isThemeSwitching = false;
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            if (isThemeSwitching) return;
            isThemeSwitching = true;
            const newTheme = currentTheme === "light" ? "dark" : "light";
            applyTheme(newTheme, true);
            setTimeout(() => { isThemeSwitching = false; }, 200);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggleBtn) return;
        const icon = themeToggleBtn.querySelector("i");
        if (icon) {
            icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
        }
    }

    // --------------------------------------------------------------------------
    // 4. Toast Notification System
    // --------------------------------------------------------------------------
    const toastContainer = document.getElementById("toast-container");

    function showToast(message, type = "success") {
        if (!toastContainer) return;
        const toast = document.createElement("div");
        toast.className = "toast " + type;
        const icon = type === "error" ? "fa-triangle-exclamation" : "fa-circle-check";
        toast.innerHTML = "<i class=\"fa-solid " + icon + "\"></i><span>" + message + "</span>";
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = "toastSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards";
            setTimeout(() => toast.remove(), 300);
        }, 2600);
    }

    // --------------------------------------------------------------------------
    // 5. Dynamic Background Canvas & Ambient Spotlight
    // --------------------------------------------------------------------------
    const bgCanvas = document.getElementById("bg-canvas");
    const spotlight = document.getElementById("cursor-spotlight");

    if (bgCanvas) {
        const ctx = bgCanvas.getContext("2d");
        let width = 0, height = 0;
        let particles = [];

        function resizeBg() {
            width = bgCanvas.width = window.innerWidth;
            height = bgCanvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resizeBg, { passive: true });
        resizeBg();

        const PARTICLE_COUNT = 24;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * (width || 800),
                y: Math.random() * (height || 600),
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                r: Math.random() * 2 + 1,
                alpha: Math.random() * 0.25 + 0.1
            });
        }

        function animateBg() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = (isDarkTheme ? "rgba(255, 215, 0, " : "rgba(30, 58, 138, ") + p.alpha + ")";
                ctx.fill();
            }
            requestAnimationFrame(animateBg);
        }
        requestAnimationFrame(animateBg);
    }

    if (spotlight) {
        window.addEventListener("mousemove", (e) => {
            spotlight.style.left = e.clientX + "px";
            spotlight.style.top = e.clientY + "px";
        });
    }

    // --------------------------------------------------------------------------
    // 6. Interactive 3D Depth Card Tilt & Clipboard Handlers
    // --------------------------------------------------------------------------
    function init3DTilt(elements) {
        elements.forEach(card => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -4;
                const rotateY = ((x - centerX) / centerX) * 4;
                card.style.transform = "perspective(1000px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-4px)";
            });
            card.addEventListener("mouseleave", () => {
                card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
            });
        });
    }

    function initClipboard() {
        document.querySelectorAll("[data-copy]").forEach(button => {
            button.onclick = (e) => {
                e.stopPropagation();
                const textToCopy = button.getAttribute("data-copy");
                if (!textToCopy) return;

                navigator.clipboard.writeText(textToCopy).then(() => {
                    showToast("Copied to clipboard: " + textToCopy);
                }).catch(() => {
                    showToast("Failed to copy", "error");
                });
            };
        });
    }

    // --------------------------------------------------------------------------
    // 7. Dynamic Content Renderers: Projects, Achievements, Profile, Socials
    // --------------------------------------------------------------------------
    let currentFilter = "all";

    function renderProjects() {
        const grid = document.getElementById("projects-grid");
        if (!grid) return;

        const projects = PortfolioData.projects || [];
        grid.innerHTML = "";

        projects.forEach(p => {
            const card = document.createElement("div");
            card.className = "project-card glass-card glow-on-hover";
            card.setAttribute("data-category", p.category || "web");
            
            if (currentFilter !== "all" && p.category !== currentFilter) {
                card.style.display = "none";
            }

            const tagsHtml = (p.tags || "").split(",").map(t => "<span class=\"tag\">" + t.trim() + "</span>").join("");
            const repoLinkHtml = p.githubUrl ? 
                "<a href=\"" + p.githubUrl + "\" target=\"_blank\" rel=\"noopener\" class=\"btn-project btn-repo\">" +
                "<i class=\"fa-brands fa-github\"></i> " + (p.githubUrl.includes("ABOUT-ME") || p.githubUrl.includes("-") ? "GitHub Repo" : "GitHub Profile") +
                "</a>" : "";

            card.innerHTML = 
                "<div class=\"project-banner " + (p.banner || "banner-gradient-1") + "\">" +
                    "<div class=\"banner-overlay\">" +
                        "<span class=\"vercel-badge\"><span class=\"live-dot\"></span> Live on Vercel</span>" +
                        "<span class=\"github-badge\"><i class=\"" + (p.icon || "fa-solid fa-cube") + "\"></i> " + (p.badgeText || "Vercel App") + "</span>" +
                    "</div>" +
                    "<div class=\"project-preview-icon\"><i class=\"" + (p.icon || "fa-solid fa-cube") + "\"></i></div>" +
                "</div>" +
                "<div class=\"project-body\">" +
                    "<h3 class=\"project-title\">" + p.title + "</h3>" +
                    "<p class=\"project-desc\">" + p.desc + "</p>" +
                    "<div class=\"project-tags\">" + tagsHtml + "</div>" +
                    "<div class=\"project-links\">" +
                        "<a href=\"" + p.vercelUrl + "\" target=\"_blank\" rel=\"noopener\" class=\"btn-project btn-live\">" +
                            "<i class=\"fa-solid fa-arrow-up-right-from-square\"></i> Visit Vercel App" +
                        "</a>" +
                        repoLinkHtml +
                    "</div>" +
                "</div>";
            grid.appendChild(card);
        });

        const countAll = projects.length;
        const countWeb = projects.filter(p => p.category === "web").length;
        const countSim = projects.filter(p => p.category === "simulations").length;
        const countSci = projects.filter(p => p.category === "ai-science").length;

        const fBtnAll = document.querySelector(".filter-btn[data-filter=\"all\"]");
        const fBtnWeb = document.querySelector(".filter-btn[data-filter=\"web\"]");
        const fBtnSim = document.querySelector(".filter-btn[data-filter=\"simulations\"]");
        const fBtnSci = document.querySelector(".filter-btn[data-filter=\"ai-science\"]");

        if (fBtnAll) fBtnAll.innerText = "All Vercel Apps (" + countAll + ")";
        if (fBtnWeb) fBtnWeb.innerText = "Web Portals & Hubs (" + countWeb + ")";
        if (fBtnSim) fBtnSim.innerText = "Simulators & Tools (" + countSim + ")";
        if (fBtnSci) fBtnSci.innerText = "AI & Science (" + countSci + ")";

        init3DTilt(grid.querySelectorAll(".project-card"));
        initClipboard();
    }

    function renderAchievements() {
        const grid = document.getElementById("achievements-grid");
        if (!grid) return;

        const achievements = PortfolioData.achievements || [];
        grid.innerHTML = "";

        achievements.forEach(a => {
            const card = document.createElement("div");
            card.className = "achievement-card glass-card glow-on-hover";
            card.innerHTML = 
                "<div class=\"achieve-icon-box " + (a.color || "gold-icon") + "\">" +
                    "<i class=\"" + (a.icon || "fa-solid fa-medal") + "\"></i>" +
                "</div>" +
                "<div class=\"achieve-content\">" +
                    "<span class=\"achieve-tag\">" + a.tag + "</span>" +
                    "<h3>" + a.title + "</h3>" +
                    "<p>" + a.desc + "</p>" +
                "</div>";
            grid.appendChild(card);
        });

        init3DTilt(grid.querySelectorAll(".achievement-card"));
    }

    function renderProfile() {
        const p = PortfolioData.profile;
        if (!p) return;

        const statusBadge = document.querySelector(".status-badge span:last-child");
        if (statusBadge && p.statusBadge) statusBadge.innerText = p.statusBadge;

        const heroTitle = document.querySelector(".hero-title");
        if (heroTitle && p.headline) heroTitle.innerHTML = p.headline;

        const heroSubtitle = document.querySelector(".hero-subtitle");
        if (heroSubtitle && p.bio) heroSubtitle.innerHTML = p.bio;

        const statProj = document.querySelector(".stat-item:nth-child(1) .stat-number");
        if (statProj && p.statProjects) {
            statProj.setAttribute("data-target", p.statProjects);
            statProj.innerText = p.statProjects;
        }

        const statCad = document.querySelector(".stat-item:nth-child(3) .stat-number");
        if (statCad && p.statCad) {
            statCad.setAttribute("data-target", p.statCad);
            statCad.innerText = p.statCad;
        }

        const statGrad = document.querySelector(".stat-item:nth-child(5) .stat-number");
        if (statGrad && p.statGrad) {
            statGrad.setAttribute("data-target", p.statGrad);
            statGrad.innerText = p.statGrad;
        }

        const statVision = document.querySelector(".stat-item:nth-child(7) .stat-number");
        if (statVision && p.statVision) {
            statVision.setAttribute("data-target", p.statVision);
            statVision.innerText = p.statVision;
        }
    }

    function renderSocials() {
        const s = PortfolioData.socials;
        if (!s) return;

        document.querySelectorAll("a[href*=\"github.com\"], .github-channel").forEach(el => {
            if (el.classList.contains("nav-github-btn") || el.classList.contains("chip-github") || el.classList.contains("gh-profile-link") || el.classList.contains("github-channel") || el.getAttribute("aria-label") === "GitHub") {
                el.href = s.githubUrl;
            }
        });

        document.querySelectorAll("a[href*=\"instagram.com\"], .insta-channel").forEach(el => {
            el.href = s.instagramUrl;
            const handleSpan = el.querySelector(".channel-handle");
            if (handleSpan) handleSpan.innerText = s.instagramHandle || "@raghavbansal0704";
        });

        document.querySelectorAll("a[href*=\"linkedin.com\"], .linkedin-channel").forEach(el => {
            el.href = s.linkedinUrl;
        });

        document.querySelectorAll("a[href^=\"mailto:\"], .email-channel").forEach(el => {
            el.href = "mailto:" + s.email;
            const detailVal = el.querySelector(".detail-val") || (el.classList.contains("detail-val") ? el : null);
            if (detailVal) detailVal.innerText = s.email;
        });

        const ghCopyBtn = document.querySelector(".github-profile-banner button[data-copy]");
        if (ghCopyBtn) ghCopyBtn.setAttribute("data-copy", s.githubUrl);
    }

    function renderAll() {
        renderProfile();
        renderSocials();
        renderAchievements();
        renderProjects();
    }

    renderAll();

    // --------------------------------------------------------------------------
    // 8. Navigation, Mobile Menu & Active Link Highlighting
    // --------------------------------------------------------------------------
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");
    const mobileToggle = document.getElementById("mobile-toggle");
    const navLinksMenu = document.getElementById("nav-links");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        let currentSectionId = "";
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            const height = sec.offsetHeight;
            if (window.scrollY >= top && window.scrollY < top + height) {
                currentSectionId = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + currentSectionId) {
                link.classList.add("active");
            }
        });
    });

    if (mobileToggle && navLinksMenu) {
        mobileToggle.addEventListener("click", () => {
            navLinksMenu.classList.toggle("open");
            const icon = mobileToggle.querySelector("i");
            if (navLinksMenu.classList.contains("open")) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-bars-staggered";
            }
        });

        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                navLinksMenu.classList.remove("open");
                mobileToggle.querySelector("i").className = "fa-solid fa-bars-staggered";

                const href = link.getAttribute("href");
                if (href && href.startsWith("#")) {
                    const targetEl = document.querySelector(href);
                    if (targetEl) {
                        e.preventDefault();
                        targetEl.scrollIntoView({ behavior: "smooth" });
                    }
                }
            });
        });
    }

    // --------------------------------------------------------------------------
    // 9. About Tabs Controller (Education / Skills / NCC)
    // --------------------------------------------------------------------------
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            tabPanes.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            const target = btn.getAttribute("data-tab");
            const targetPane = document.getElementById(target);
            if (targetPane) {
                targetPane.classList.add("active");
            }
        });
    });

    // --------------------------------------------------------------------------
    // 10. Project Category Filter
    // --------------------------------------------------------------------------
    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            currentFilter = btn.getAttribute("data-filter") || "all";
            const projectCards = document.querySelectorAll("#projects-grid .project-card");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (currentFilter === "all" || currentFilter === category) {
                    card.style.display = "flex";
                    card.style.animation = "fadeIn 0.4s ease";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // --------------------------------------------------------------------------
    // 11. Animated Stats Counter
    // --------------------------------------------------------------------------
    const statNumbers = document.querySelectorAll(".stat-number");
    let hasCounted = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                hasCounted = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute("data-target"), 10) || 0;
                    let count = 0;
                    const speed = Math.max(10, 2000 / (target || 1));

                    const updateCounter = () => {
                        count += Math.ceil(target / 40) || 1;
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

    const statsBar = document.querySelector(".stats-bar");
    if (statsBar) statsObserver.observe(statsBar);

    // --------------------------------------------------------------------------
    // 12. WhatsApp Direct Connect Modal
    // --------------------------------------------------------------------------
    const waModal = document.getElementById("wa-modal");
    const modalCloseBtn = document.getElementById("modal-close");
    const modalCancelBtn = document.getElementById("modal-cancel");
    const waCustomMsgTextarea = document.getElementById("wa-custom-msg");
    const btnLaunchWa = document.getElementById("btn-launch-wa");
    const btnQuickWa = document.getElementById("btn-quick-wa");
    const presetBtns = document.querySelectorAll(".preset-btn");

    function openWaModal() {
        if (waModal) waModal.classList.add("active");
    }

    function closeWaModal() {
        if (waModal) waModal.classList.remove("active");
    }

    document.querySelectorAll(".open-wa-modal").forEach(btn => btn.addEventListener("click", openWaModal));
    if (btnQuickWa) btnQuickWa.addEventListener("click", openWaModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeWaModal);
    if (modalCancelBtn) modalCancelBtn.addEventListener("click", closeWaModal);

    presetBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            presetBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            if (waCustomMsgTextarea) waCustomMsgTextarea.value = btn.getAttribute("data-msg") || "";
        });
    });

    if (btnLaunchWa) {
        btnLaunchWa.addEventListener("click", () => {
            const rawMsg = waCustomMsgTextarea ? waCustomMsgTextarea.value.trim() : "";
            const phone = PortfolioData.socials.whatsappNumber || "919999999999";
            const encoded = encodeURIComponent(rawMsg);
            window.open("https://wa.me/" + phone + "?text=" + encoded, "_blank");
            closeWaModal();
            showToast("Opening WhatsApp Chat...");
        });
    }

    // --------------------------------------------------------------------------
    // 13. Contact Message Form
    // --------------------------------------------------------------------------
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("form-name").value.trim();
            const email = document.getElementById("form-email").value.trim();
            const msg = document.getElementById("form-message").value.trim();

            showToast("Thank you " + name + "! Your message has been prepared.");
            const mailtoUri = "mailto:" + PortfolioData.socials.email + "?subject=Portfolio Inquiry from " + encodeURIComponent(name) + "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + msg);
            window.location.href = mailtoUri;
            contactForm.reset();
        });
    }

    // --------------------------------------------------------------------------
    // 14. Back To Top Button
    // --------------------------------------------------------------------------
    const backToTopBtn = document.getElementById("btn-back-to-top");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // --------------------------------------------------------------------------
    // 15. ADMIN PANEL CONTROLLER & MANAGEMENT ENGINE
    // --------------------------------------------------------------------------
    const btnOpenAdmin = document.getElementById("btn-open-admin");
    const authModal = document.getElementById("admin-auth-modal");
    const pinForm = document.getElementById("admin-pin-form");
    const pinInput = document.getElementById("admin-pin-input");
    const btnCancelPin = document.getElementById("btn-cancel-pin");

    const adminModal = document.getElementById("admin-dashboard-modal");
    const adminCloseBtn = document.getElementById("admin-close-btn");
    const btnCloseAdminBottom = document.getElementById("btn-close-admin-bottom");
    const adminTabBtns = document.querySelectorAll(".admin-tab-btn");
    const adminTabContents = document.querySelectorAll(".admin-tab-content");

    let isAdminUnlocked = false;

    function requestAdminAccess() {
        if (isAdminUnlocked) {
            openAdminDashboard();
        } else {
            if (authModal) {
                authModal.classList.add("active");
                if (pinInput) {
                    pinInput.value = "";
                    setTimeout(() => pinInput.focus(), 150);
                }
            }
        }
    }

    function closeAdminAuth() {
        if (authModal) authModal.classList.remove("active");
    }

    function openAdminDashboard() {
        closeAdminAuth();
        if (adminModal) {
            adminModal.classList.add("active");
            populateAdminLists();
            populateAdminForms();
        }
    }

    function closeAdminDashboard() {
        if (adminModal) adminModal.classList.remove("active");
    }

    if (btnOpenAdmin) btnOpenAdmin.addEventListener("click", requestAdminAccess);
    if (btnCancelPin) btnCancelPin.addEventListener("click", closeAdminAuth);
    if (adminCloseBtn) adminCloseBtn.addEventListener("click", closeAdminDashboard);
    if (btnCloseAdminBottom) btnCloseAdminBottom.addEventListener("click", closeAdminDashboard);

    window.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "A" || e.key === "a")) {
            e.preventDefault();
            requestAdminAccess();
        }
    });

    if (pinForm) {
        pinForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const entered = pinInput.value.trim();
            const validPin = PortfolioData.adminPin || DEFAULT_PORTFOLIO_DATA.adminPin;

            if (entered === validPin) {
                isAdminUnlocked = true;
                showToast("Admin access granted! Welcome Raghav.");
                openAdminDashboard();
            } else {
                showToast("Incorrect PIN. Please try again.", "error");
                pinInput.value = "";
                pinInput.focus();
            }
        });
    }

    adminTabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-tab");
            adminTabBtns.forEach(b => b.classList.remove("active"));
            adminTabContents.forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            const targetContent = document.getElementById(target);
            if (targetContent) targetContent.classList.add("active");
        });
    });

    function populateAdminLists() {
        populateAdminProjectsList();
        populateAdminAchievementsList();
    }

    function populateAdminProjectsList(searchQuery = "") {
        const list = document.getElementById("admin-projects-list");
        if (!list) return;

        const projects = PortfolioData.projects || [];
        const filtered = projects.filter(p => {
            const q = searchQuery.toLowerCase();
            return !q || p.title.toLowerCase().includes(q) || (p.tags || "").toLowerCase().includes(q);
        });

        list.innerHTML = "";

        filtered.forEach(p => {
            const card = document.createElement("div");
            card.className = "admin-item-card";
            card.innerHTML = 
                "<div class=\"admin-item-left\">" +
                    "<div class=\"admin-item-icon\"><i class=\"" + (p.icon || "fa-solid fa-cube") + "\"></i></div>" +
                    "<div class=\"admin-item-info\">" +
                        "<h4>" + p.title + "</h4>" +
                        "<p>" + p.desc + "</p>" +
                        "<div class=\"admin-item-meta\">" +
                            "<span class=\"admin-badge\">" + p.category + "</span>" +
                            "<span class=\"admin-badge\">" + (p.badgeText || "Vercel") + "</span>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                "<div class=\"admin-item-actions\">" +
                    "<button class=\"btn-admin-icon btn-edit-proj\" data-id=\"" + p.id + "\" title=\"Edit Project\"><i class=\"fa-solid fa-pen-to-square\"></i></button>" +
                    "<button class=\"btn-admin-icon btn-delete btn-delete-proj\" data-id=\"" + p.id + "\" title=\"Delete Project\"><i class=\"fa-solid fa-trash\"></i></button>" +
                "</div>";
            list.appendChild(card);
        });

        list.querySelectorAll(".btn-edit-proj").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                openProjectEditor(id);
            });
        });

        list.querySelectorAll(".btn-delete-proj").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                const proj = PortfolioData.projects.find(p => p.id === id);
                if (confirm("Are you sure you want to delete \"" + (proj ? proj.title : "this project") + "\"?")) {
                    PortfolioData.projects = PortfolioData.projects.filter(p => p.id !== id);
                    savePortfolioData();
                    renderAll();
                    populateAdminProjectsList();
                    showToast("Project deleted.");
                }
            });
        });
    }

    const adminProjectSearch = document.getElementById("admin-project-search");
    if (adminProjectSearch) {
        adminProjectSearch.addEventListener("input", (e) => {
            populateAdminProjectsList(e.target.value);
        });
    }

    const projEditorModal = document.getElementById("project-editor-modal");
    const projEditorForm = document.getElementById("project-editor-form");
    const btnOpenAddProj = document.getElementById("btn-open-add-project");
    const btnCloseProjEditor = document.getElementById("btn-close-proj-editor");
    const btnCancelProjEditor = document.getElementById("btn-cancel-proj-editor");

    function openProjectEditor(id = null) {
        if (!projEditorModal) return;
        const modalTitle = document.getElementById("project-modal-title");

        if (id) {
            const p = PortfolioData.projects.find(proj => proj.id === id);
            if (!p) return;
            modalTitle.innerText = "Edit Project";
            document.getElementById("proj-edit-id").value = p.id;
            document.getElementById("proj-edit-title").value = p.title || "";
            document.getElementById("proj-edit-desc").value = p.desc || "";
            document.getElementById("proj-edit-category").value = p.category || "web";
            document.getElementById("proj-edit-badge").value = p.badgeText || "";
            document.getElementById("proj-edit-vercel").value = p.vercelUrl || "";
            document.getElementById("proj-edit-github").value = p.githubUrl || "";
            document.getElementById("proj-edit-icon").value = p.icon || "fa-solid fa-cube";
            document.getElementById("proj-edit-banner").value = p.banner || "banner-gradient-1";
            document.getElementById("proj-edit-tags").value = p.tags || "";
        } else {
            modalTitle.innerText = "Add New Project";
            projEditorForm.reset();
            document.getElementById("proj-edit-id").value = "";
            document.getElementById("proj-edit-icon").value = "fa-solid fa-cube";
            document.getElementById("proj-edit-banner").value = "banner-gradient-1";
        }

        projEditorModal.classList.add("active");
    }

    function closeProjectEditor() {
        if (projEditorModal) projEditorModal.classList.remove("active");
    }

    if (btnOpenAddProj) btnOpenAddProj.addEventListener("click", () => openProjectEditor());
    if (btnCloseProjEditor) btnCloseProjEditor.addEventListener("click", closeProjectEditor);
    if (btnCancelProjEditor) btnCancelProjEditor.addEventListener("click", closeProjectEditor);

    if (projEditorForm) {
        projEditorForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const id = document.getElementById("proj-edit-id").value;
            const title = document.getElementById("proj-edit-title").value.trim();
            const desc = document.getElementById("proj-edit-desc").value.trim();
            const category = document.getElementById("proj-edit-category").value;
            const badgeText = document.getElementById("proj-edit-badge").value.trim();
            const vercelUrl = document.getElementById("proj-edit-vercel").value.trim();
            const githubUrl = document.getElementById("proj-edit-github").value.trim();
            const icon = document.getElementById("proj-edit-icon").value.trim() || "fa-solid fa-cube";
            const banner = document.getElementById("proj-edit-banner").value;
            const tags = document.getElementById("proj-edit-tags").value.trim();

            if (id) {
                const index = PortfolioData.projects.findIndex(p => p.id === id);
                if (index !== -1) {
                    PortfolioData.projects[index] = { id, title, desc, category, badgeText, vercelUrl, githubUrl, icon, banner, tags };
                    showToast("Updated project \"" + title + "\"!");
                }
            } else {
                const newId = "proj-" + Date.now();
                PortfolioData.projects.push({ id: newId, title, desc, category, badgeText, vercelUrl, githubUrl, icon, banner, tags });
                showToast("Added new project \"" + title + "\"!");
            }

            savePortfolioData();
            renderAll();
            populateAdminProjectsList();
            closeProjectEditor();
        });
    }

    function populateAdminAchievementsList() {
        const list = document.getElementById("admin-achievements-list");
        if (!list) return;

        const achievements = PortfolioData.achievements || [];
        list.innerHTML = "";

        achievements.forEach(a => {
            const card = document.createElement("div");
            card.className = "admin-item-card";
            card.innerHTML = 
                "<div class=\"admin-item-left\">" +
                    "<div class=\"admin-item-icon\"><i class=\"" + (a.icon || "fa-solid fa-medal") + "\"></i></div>" +
                    "<div class=\"admin-item-info\">" +
                        "<h4>" + a.title + "</h4>" +
                        "<p>" + a.desc + "</p>" +
                        "<div class=\"admin-item-meta\">" +
                            "<span class=\"admin-badge\">" + a.tag + "</span>" +
                            "<span class=\"admin-badge\">" + (a.color || "gold-icon") + "</span>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                "<div class=\"admin-item-actions\">" +
                    "<button class=\"btn-admin-icon btn-edit-ach\" data-id=\"" + a.id + "\" title=\"Edit Achievement\"><i class=\"fa-solid fa-pen-to-square\"></i></button>" +
                    "<button class=\"btn-admin-icon btn-delete btn-delete-ach\" data-id=\"" + a.id + "\" title=\"Delete Achievement\"><i class=\"fa-solid fa-trash\"></i></button>" +
                "</div>";
            list.appendChild(card);
        });

        list.querySelectorAll(".btn-edit-ach").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                openAchievementEditor(id);
            });
        });

        list.querySelectorAll(".btn-delete-ach").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                const ach = PortfolioData.achievements.find(a => a.id === id);
                if (confirm("Are you sure you want to delete \"" + (ach ? ach.title : "this achievement") + "\"?")) {
                    PortfolioData.achievements = PortfolioData.achievements.filter(a => a.id !== id);
                    savePortfolioData();
                    renderAll();
                    populateAdminAchievementsList();
                    showToast("Achievement deleted.");
                }
            });
        });
    }

    const achEditorModal = document.getElementById("achievement-editor-modal");
    const achEditorForm = document.getElementById("achievement-editor-form");
    const btnOpenAddAch = document.getElementById("btn-open-add-achievement");
    const btnCloseAchEditor = document.getElementById("btn-close-ach-editor");
    const btnCancelAchEditor = document.getElementById("btn-cancel-ach-editor");

    function openAchievementEditor(id = null) {
        if (!achEditorModal) return;
        const modalTitle = document.getElementById("ach-modal-title");

        if (id) {
            const a = PortfolioData.achievements.find(ach => ach.id === id);
            if (!a) return;
            modalTitle.innerText = "Edit Achievement";
            document.getElementById("ach-edit-id").value = a.id;
            document.getElementById("ach-edit-tag").value = a.tag || "";
            document.getElementById("ach-edit-title").value = a.title || "";
            document.getElementById("ach-edit-desc").value = a.desc || "";
            document.getElementById("ach-edit-icon").value = a.icon || "fa-solid fa-medal";
            document.getElementById("ach-edit-color").value = a.color || "gold-icon";
        } else {
            modalTitle.innerText = "Add Achievement";
            achEditorForm.reset();
            document.getElementById("ach-edit-id").value = "";
            document.getElementById("ach-edit-icon").value = "fa-solid fa-medal";
            document.getElementById("ach-edit-color").value = "gold-icon";
        }

        achEditorModal.classList.add("active");
    }

    function closeAchievementEditor() {
        if (achEditorModal) achEditorModal.classList.remove("active");
    }

    if (btnOpenAddAch) btnOpenAddAch.addEventListener("click", () => openAchievementEditor());
    if (btnCloseAchEditor) btnCloseAchEditor.addEventListener("click", closeAchievementEditor);
    if (btnCancelAchEditor) btnCancelAchEditor.addEventListener("click", closeAchievementEditor);

    if (achEditorForm) {
        achEditorForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const id = document.getElementById("ach-edit-id").value;
            const tag = document.getElementById("ach-edit-tag").value.trim();
            const title = document.getElementById("ach-edit-title").value.trim();
            const desc = document.getElementById("ach-edit-desc").value.trim();
            const icon = document.getElementById("ach-edit-icon").value.trim() || "fa-solid fa-medal";
            const color = document.getElementById("ach-edit-color").value;

            if (id) {
                const index = PortfolioData.achievements.findIndex(a => a.id === id);
                if (index !== -1) {
                    PortfolioData.achievements[index] = { id, tag, title, desc, icon, color };
                    showToast("Updated achievement \"" + title + "\"!");
                }
            } else {
                const newId = "ach-" + Date.now();
                PortfolioData.achievements.push({ id: newId, tag, title, desc, icon, color });
                showToast("Added achievement \"" + title + "\"!");
            }

            savePortfolioData();
            renderAll();
            populateAdminAchievementsList();
            closeAchievementEditor();
        });
    }

    function populateAdminForms() {
        const p = PortfolioData.profile;
        if (p) {
            document.getElementById("admin-prof-name").value = p.name || "";
            document.getElementById("admin-prof-badge").value = p.statusBadge || "";
            document.getElementById("admin-prof-headline").value = p.headline || "";
            document.getElementById("admin-prof-bio").value = p.bio || "";
            document.getElementById("admin-stat-proj").value = p.statProjects || 12;
            document.getElementById("admin-stat-cad").value = p.statCad || 50;
            document.getElementById("admin-stat-grad").value = p.statGrad || 2028;
            document.getElementById("admin-stat-vision").value = p.statVision || 2047;
        }

        const s = PortfolioData.socials;
        if (s) {
            document.getElementById("admin-soc-email").value = s.email || "";
            document.getElementById("admin-soc-wa").value = s.whatsappNumber || "";
            document.getElementById("admin-soc-github").value = s.githubUrl || "";
            document.getElementById("admin-soc-linkedin").value = s.linkedinUrl || "";
            document.getElementById("admin-soc-insta-handle").value = s.instagramHandle || "";
            document.getElementById("admin-soc-insta-url").value = s.instagramUrl || "";
        }
    }

    const profileForm = document.getElementById("admin-profile-form");
    if (profileForm) {
        profileForm.addEventListener("submit", (e) => {
            e.preventDefault();
            PortfolioData.profile.name = document.getElementById("admin-prof-name").value.trim();
            PortfolioData.profile.statusBadge = document.getElementById("admin-prof-badge").value.trim();
            PortfolioData.profile.headline = document.getElementById("admin-prof-headline").value.trim();
            PortfolioData.profile.bio = document.getElementById("admin-prof-bio").value.trim();
            PortfolioData.profile.statProjects = parseInt(document.getElementById("admin-stat-proj").value, 10) || 12;
            PortfolioData.profile.statCad = parseInt(document.getElementById("admin-stat-cad").value, 10) || 50;
            PortfolioData.profile.statGrad = parseInt(document.getElementById("admin-stat-grad").value, 10) || 2028;
            PortfolioData.profile.statVision = parseInt(document.getElementById("admin-stat-vision").value, 10) || 2047;

            savePortfolioData();
            renderAll();
            showToast("Profile details saved successfully!");
        });
    }

    const socialsForm = document.getElementById("admin-socials-form");
    if (socialsForm) {
        socialsForm.addEventListener("submit", (e) => {
            e.preventDefault();
            PortfolioData.socials.email = document.getElementById("admin-soc-email").value.trim();
            PortfolioData.socials.whatsappNumber = document.getElementById("admin-soc-wa").value.trim();
            PortfolioData.socials.githubUrl = document.getElementById("admin-soc-github").value.trim();
            PortfolioData.socials.linkedinUrl = document.getElementById("admin-soc-linkedin").value.trim();
            PortfolioData.socials.instagramHandle = document.getElementById("admin-soc-insta-handle").value.trim();
            PortfolioData.socials.instagramUrl = document.getElementById("admin-soc-insta-url").value.trim();

            savePortfolioData();
            renderAll();
            showToast("Social links updated!");
        });
    }

    const exportBtn = document.getElementById("btn-export-json");
    if (exportBtn) {
        exportBtn.addEventListener("click", () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(PortfolioData, null, 2));
            const downloadAnchor = document.createElement("a");
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "raghav_portfolio_backup_" + Date.now() + ".json");
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            showToast("Portfolio backup downloaded!");
        });
    }

    const triggerImportBtn = document.getElementById("btn-trigger-import");
    const importFileInput = document.getElementById("admin-import-file");

    if (triggerImportBtn && importFileInput) {
        triggerImportBtn.addEventListener("click", () => importFileInput.click());

        importFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const parsed = JSON.parse(event.target.result);
                    if (parsed && typeof parsed === "object") {
                        PortfolioData = Object.assign({}, DEFAULT_PORTFOLIO_DATA, parsed, {
                            profile: Object.assign({}, DEFAULT_PORTFOLIO_DATA.profile, parsed.profile || {}),
                            socials: Object.assign({}, DEFAULT_PORTFOLIO_DATA.socials, parsed.socials || {}),
                            achievements: parsed.achievements || DEFAULT_PORTFOLIO_DATA.achievements,
                            projects: parsed.projects || DEFAULT_PORTFOLIO_DATA.projects
                        });
                        savePortfolioData();
                        renderAll();
                        populateAdminLists();
                        populateAdminForms();
                        showToast("Portfolio backup successfully imported!");
                    } else {
                        showToast("Invalid JSON file format.", "error");
                    }
                } catch (err) {
                    showToast("Error parsing JSON file.", "error");
                }
            };
            reader.readAsText(file);
        });
    }

    const changePinForm = document.getElementById("admin-change-pin-form");
    if (changePinForm) {
        changePinForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const newPin = document.getElementById("admin-new-pin-input").value.trim();
            if (newPin.length >= 4) {
                PortfolioData.adminPin = newPin;
                savePortfolioData();
                showToast("Admin master PIN updated successfully!");
                changePinForm.reset();
            } else {
                showToast("PIN must be at least 4 characters.", "error");
            }
        });
    }

    const resetDefaultsBtn = document.getElementById("btn-reset-defaults");
    if (resetDefaultsBtn) {
        resetDefaultsBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to reset all portfolio data, projects, and stats back to default?")) {
                PortfolioData = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
                savePortfolioData();
                renderAll();
                populateAdminLists();
                populateAdminForms();
                showToast("Portfolio reset to default successfully.");
            }
        });
    }
});
