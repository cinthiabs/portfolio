let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll',function (){
    let scroll = this.document.querySelector('.scrolltop')
        scroll.classList.toggle('scroll', window.scrollY > 350)
})
function backTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll =() =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance:'60px',
    duration:2500,
    reset:true
})
sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.home-img',{delay:400, origin:'top'})
sr.reveal ('.about, .services, .cta, .resume, .contact, .copyright',{delay:200, origin:'top'})

// i18n functionality
const translations = {
    pt: {
        'nav-home': 'Home',
        'nav-skills': 'Habilidades',
        'nav-projects': 'Projetos',
        'nav-resume': 'Resumo',
        'nav-articles': 'Artigos',
        'who-am-i': 'Quem sou',
        'developer': 'Desenvolvedora de Sistemas',
        'intro-para': 'Sou formada em Gestão de Tecnologia pós-graduada em Engenharia de Software. Desde que comecei na área de desenvolvimento, descobri minha paixão pela tecnologia, especialmente no desenvolvimento backend. Estou em constante busca por desafios que me permitam crescer e evoluir profissionalmente!',
        'linkedin': 'Linkedin',
        'email': 'E-mail',
        'skills-title': 'Habilidades',
        'front-end': 'Front End',
        'front-desc1': 'Desenvolvo sistemas, Sites e Testes automatizados',
        'front-tech': 'Tecnologias & Ferramentas: HTML, CSS, Javascript, Angular, Cypress end-to-end.',
        'back-end': 'Back End',
        'back-desc1': 'Desenvolvo APIs, BFFs, Workers e Testes automatizados',
        'back-tech': 'Tecnologias & Ferramentas: PHP, Csharp, .NET Framework, .NET Core, SQL Server, MySql, Kafka, RabbitMQ, XUnit, GIT.',
        'projects-h4': 'Todos os projetos no GitHub.',
        'projects-h2': 'Comece por aqui!',
        'github-repos': 'Repositórios no GitHub',
        'resume-title': 'Experiência & Formação',
        'experience': ' Experiência ',
        'date1': 'Agosto 2024 - Presente ',
        'job1': 'Desenvolvedora de Software Pleno',
        'desc1': 'Desenvolvimento e melhorias em sistemas internos usando RESTful APIs .NET Core (CQRS, DDD, BFF, Microservices).<br>Integração com API Gateways (AWS, Apigee, Sensedia), Monitoramento e observabilidade com DataDog.<br>Garantia de qualidade de código com Sonar Cloud e Testes automatizados com XUnit.',
        'date2': 'Dezembro 2020 - Julho 2024 ',
        'job2': 'Desenvolvedora de Sistemas Pleno',
        'desc2': 'Desenvolvimento e melhorias em sistemas internos usando .NET Framework, .NET core, Angular, SQL Server.<br>Desenvolvimento de cenários de teste (regressão, unidade e funcionais).<br>Desenvolvimento e manutenção de sistemas de valor para a empresa com escalabilidade, integrando APIs e Gateways.',
        'date3': 'Dezembro 2020 - Junho 2023 ',
        'job3': 'Desenvolvedora de Sistemas Junior',
        'desc3': 'Desenvolvimento e melhorias em sistemas internos usando .NET Framework, .NET core, Angular, SQL Server.<br>Importação e exportação de dados, com xml, txt, csv, json, através de Stored Procedures e workers.<br>Desenvolvimento de APIs, WebService e conexão/comunicação com FTP e SFTP.',
        'date4': 'Maio 2019 - Dezembro 2020 ',
        'job4': 'Estagiária - Analista de Suporte Técnico',
        'desc4': 'Acompanhamento de suporte aos usuários na área de TI. Abertura do incidente BMC Remedy resolvendo problemas técnicos, Controle remoto através das ferramentas Citrix VDI e VPN.',
        'education': ' Formação ',
        'date5': 'Dezembro 2023 - 2024 ',
        'edu1': 'Engenharia de Software com Ênfase em Qualidade',
        'edu-desc1': 'Pós-graduação - Formada',
        'date6': 'Janeiro 2019 - 2021 ',
        'edu2': 'Gestão de Tecnologia da Informação',
        'edu-desc2': 'Tecnólogo - Formada',
        'articles-h4': 'Todos os artigos publicados',
        'articles-h2': 'Leituras rápidas!',
        'dev-community': 'DEV Community',
        'copyright': 'Feito por Cinthia Barbosa - 2022 - 2026'
    },
    en: {
        'nav-home': 'Home',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-resume': 'Resume',
        'nav-articles': 'Articles',
        'who-am-i': 'Who I am',
        'developer': 'Systems Developer',
        'intro-para': 'I am graduated in Technology Management with a postgraduate degree in Software Engineering. Since I started in the development area, I discovered my passion for technology, especially backend development. I am constantly looking for challenges that allow me to grow and evolve professionally!',
        'linkedin': 'LinkedIn',
        'email': 'E-mail',
        'skills-title': 'Skills',
        'front-end': 'Front End',
        'front-desc1': 'I develop systems, websites and automated tests',
        'front-tech': 'Technologies & Tools: HTML, CSS, Javascript, Angular, Cypress end-to-end.',
        'back-end': 'Back End',
        'back-desc1': 'I develop APIs, BFFs, Workers and automated tests',
        'back-tech': 'Technologies & Tools: PHP, Csharp, .NET Framework, .NET Core, SQL Server, MySql, Kafka, RabbitMQ, XUnit, GIT.',
        'projects-h4': 'All projects on GitHub.',
        'projects-h2': 'Start here!',
        'github-repos': 'GitHub Repositories',
        'resume-title': 'Experience & Education',
        'experience': ' Experience ',
        'date1': 'August 2024 - Present ',
        'job1': 'Senior Software Developer',
        'desc1': 'Development and improvements in internal systems using RESTful APIs .NET Core (CQRS, DDD, BFF, Microservices).<br>Integration with API Gateways (AWS, Apigee, Sensedia), Monitoring and observability with DataDog.<br>Code quality assurance with Sonar Cloud and automated tests with XUnit.',
        'date2': 'December 2020 - July 2024 ',
        'job2': 'Senior Systems Developer',
        'desc2': 'Development and improvements in internal systems using .NET Framework, .NET core, Angular, SQL Server.<br>Development of test scenarios (regression, unit and functional).<br>Development and maintenance of high-value systems for the company with scalability, integrating APIs and Gateways.',
        'date3': 'December 2020 - June 2023 ',
        'job3': 'Junior Systems Developer',
        'desc3': 'Development and improvements in internal systems using .NET Framework, .NET core, Angular, SQL Server.<br>Data import and export, with xml, txt, csv, json, through Stored Procedures and workers.<br>Development of APIs, WebService and connection/communication with FTP and SFTP.',
        'date4': 'May 2019 - December 2020 ',
        'job4': 'Intern - Technical Support Analyst',
        'desc4': 'User support follow-up in the IT area. Opening BMC Remedy incident resolving technical problems, Remote control through Citrix VDI and VPN tools.',
        'education': ' Education ',
        'date5': 'December 2023 - 2024 ',
        'edu1': 'Software Engineering with Emphasis on Quality',
        'edu-desc1': 'Postgraduate - Graduated',
        'date6': 'January 2019 - 2021 ',
        'edu2': 'Information Technology Management',
        'edu-desc2': 'Technologist - Graduated',
        'articles-h4': 'All published articles',
        'articles-h2': 'Quick reads!',
        'dev-community': 'DEV Community',
        'copyright': 'Made by Cinthia Barbosa - 2022 - 2026'
    }
};

let currentLang = localStorage.getItem('lang') || 'pt';
document.getElementById('language-select').value = currentLang;
document.documentElement.lang = currentLang;

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    document.documentElement.lang = currentLang;
}

document.getElementById('language-select').addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('lang', currentLang);
    updateLanguage();
});

updateLanguage();

