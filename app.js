const content = {
    pt: {
        navHome: "Início", navJourney: "Trajetória", navSkills: "Competências", navContact: "Contato",
        availability: "Aberto a novos desafios", eyebrow: "Dados · Gestão · Tecnologia",
        hello: "Olá, eu sou", summary: "Coordenador de vendas e estudante de Engenharia de Computação, transformando indicadores em decisões práticas e equipes em resultados consistentes.",
        explore: "Explorar currículo", download: "Baixar CV", retailYears: "anos em varejo",
        engineering: "Eng. de Computação", currentRoleLabel: "Atualmente",
        currentRole: "Coordenador de Promotores", dataDriven: "Data-driven", decisionText: "Decisão orientada",
        journeyEyebrow: "Minha jornada", journeyTitle: "Experiência que conecta pessoas e dados",
        skillsEyebrow: "Como posso contribuir", skillsTitle: "Competências essenciais",
        tabAll: "Todas", tabData: "Dados", tabManagement: "Gestão",
        aboutEyebrow: "Além do currículo", aboutTitle: "Curiosidade, disciplina e foco em solução",
        aboutText: "Sou casado e pai da Sophia, Lizzie e Davi. Movido pelo conhecimento, busco compreender a causa e o efeito dos processos. Minha abordagem é pragmática: resolver, otimizar e construir melhorias contínuas com as pessoas envolvidas.",
        value1Title: "Raciocínio lógico", value1Text: "Abstração acadêmica aplicada a problemas reais.",
        value2Title: "Escuta ativa", value2Text: "Comunicação clara mesmo em cenários de pressão.",
        value3Title: "Melhoria contínua", value3Text: "Busca constante por eficiência e melhores resultados.",
        contactEyebrow: "Vamos conversar", contactTitle: "Pronto para criar valor juntos.", phoneLabel: "Telefone",
        timeline: [
            ["Atual", "Coordenador de Promotores", "Gestão de pessoas, indicadores comerciais, vendas e logística na Agrícola Qdelícia Frutas."],
            ["2018–2019", "Análise e Estoque", "Controle de estoque no Excel, análise de dados e previsão de demanda para compras e cantinas escolares."],
            ["8 anos", "Experiência em Varejo", "Atuação em redes premium e atacado, fortalecendo relacionamento, adaptação e execução comercial."],
            ["Em curso", "Ciências e Tecnologia", "Formação na UFRN com ênfase em Engenharia de Computação e base em abstração e lógica."]
        ],
        skillsList: [
            ["data", "01", "Análise de Dados", "Transformação de bases brutas em indicadores, comparativos e insights para decisão."],
            ["data", "02", "Python & Pandas", "Intermediário em Python, manipulação de dados e análise exploratória."],
            ["data", "03", "Excel Avançado", "Automação, fórmulas, organização de dados e apresentação de indicadores."],
            ["data", "04", "Apps Script", "Desenvolvimento de soluções e integrações para Google Sheets e processos corporativos."],
            ["management", "05", "Gestão de Pessoas", "Coordenação de equipes, acompanhamento de metas e incentivo à melhoria contínua."],
            ["management", "06", "Liderança Comercial", "Orientação de execução no ponto de venda, logística e análise de desempenho."]
        ]
    },
    en: {
        navHome: "Home", navJourney: "Journey", navSkills: "Skills", navContact: "Contact",
        availability: "Open to new challenges", eyebrow: "Data · Management · Technology",
        hello: "Hi, I am", summary: "Sales coordinator and Computer Engineering student, turning indicators into practical decisions and teams into consistent results.",
        explore: "Explore resume", download: "Download CV", retailYears: "years in retail",
        engineering: "Computer Engineering", currentRoleLabel: "Currently",
        currentRole: "Sales Promoter Coordinator", dataDriven: "Data-driven", decisionText: "Driven decisions",
        journeyEyebrow: "My journey", journeyTitle: "Experience connecting people and data",
        skillsEyebrow: "How I can contribute", skillsTitle: "Core competencies",
        tabAll: "All", tabData: "Data", tabManagement: "Management",
        aboutEyebrow: "Beyond the resume", aboutTitle: "Curiosity, discipline and solution focus",
        aboutText: "I am married and a father to Sophia, Lizzie and Davi. Driven by knowledge, I seek to understand the cause and effect behind processes. My approach is pragmatic: solve, optimize and build continuous improvements with everyone involved.",
        value1Title: "Logical reasoning", value1Text: "Academic abstraction applied to real problems.",
        value2Title: "Active listening", value2Text: "Clear communication even in high-pressure scenarios.",
        value3Title: "Continuous improvement", value3Text: "Constant pursuit of efficiency and stronger results.",
        contactEyebrow: "Let’s talk", contactTitle: "Ready to create value together.", phoneLabel: "Phone",
        timeline: [
            ["Current", "Sales Coordinator", "People management, commercial indicators, sales and logistics at Agrícola Qdelícia Frutas."],
            ["2018–2019", "Inventory & Analysis", "Inventory control in Excel, data analysis and demand forecasting for purchasing and school cafeterias."],
            ["8 years", "Retail Experience", "Worked across premium and wholesale retail, strengthening relationships, adaptability and commercial execution."],
            ["In progress", "Science & Technology", "UFRN degree with emphasis on Computer Engineering and a strong foundation in logic and abstraction."]
        ],
        skillsList: [
            ["data", "01", "Data Analysis", "Turning raw datasets into indicators, comparisons and actionable insights."],
            ["data", "02", "Python & Pandas", "Intermediate Python skills for data manipulation and exploratory analysis."],
            ["data", "03", "Advanced Excel", "Automation, formulas, data organization and business indicator reporting."],
            ["data", "04", "Apps Script", "Building solutions and integrations for Google Sheets and corporate workflows."],
            ["management", "05", "People Management", "Team coordination, target tracking and continuous improvement coaching."],
            ["management", "06", "Sales Leadership", "Front-line execution guidance, logistics and performance analysis."]
        ]
    }
};

let language = "pt";

function renderTimeline() {
    const timeline = document.getElementById("timeline");
    timeline.innerHTML = content[language].timeline.map(item => `
        <article class="timeline-item">
            <span class="timeline-date">${item[0]}</span>
            <h3>${item[1]}</h3>
            <p>${item[2]}</p>
        </article>
    `).join("");
}

function renderSkills(filter = "all") {
    const grid = document.getElementById("skillGrid");
    grid.innerHTML = content[language].skillsList
        .filter(skill => filter === "all" || skill[0] === filter)
        .map(skill => `
            <article class="skill-card" data-category="${skill[0]}">
                <span class="skill-number">${skill[1]}</span>
                <h3>${skill[2]}</h3>
                <p>${skill[3]}</p>
            </article>
        `).join("");
}

function applyLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (content[language][key]) element.textContent = content[language][key];
    });

    document.querySelectorAll(".language-button span").forEach((span, index) => {
        if (index !== 1) span.classList.toggle("language-active", (index === 0 && language === "pt") || (index === 2 && language === "en"));
    });
    document.getElementById("languageToggle").setAttribute("aria-label", language === "pt" ? "Switch to English" : "Mudar para português");
    renderTimeline();
    const activeTab = document.querySelector(".tab.active")?.dataset.tab || "all";
    renderSkills(activeTab);
}

document.getElementById("languageToggle").addEventListener("click", () => {
    applyLanguage(language === "pt" ? "en" : "pt");
});

document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("resume-theme", isDark ? "dark" : "light");
});

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(item => {
            item.classList.remove("active");
            item.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        renderSkills(tab.dataset.tab);
    });
});

document.getElementById("downloadCV").addEventListener("click", () => window.print());

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 600);
    const sections = [...document.querySelectorAll("main section[id], footer[id]")];
    let current = "inicio";
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 180) current = section.id;
    });
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
}, { threshold: 0.12 });
document.querySelectorAll(".section-reveal").forEach(section => revealObserver.observe(section));

if (localStorage.getItem("resume-theme") === "dark") document.body.classList.add("dark");
applyLanguage("pt");
