const projects = [
    {
        img: require("../img/tkani.png"),
        title: "E-commerce платформа",
        desc: "Полноценный интернет-магазин с корзиной, оплатой и адаптивным дизайном.",
        tech: ["Deno", "TypeScript"],
        link: "https://tkanievents.ru/"
    },
    {
        img: require("../img/digital.png"),
        title: "Сайт-презентация",
        desc: "Концепт сайта-презентации отчёта для конференции с визуализацией статистики, анимированными графиками и слайдовой структурой. Проект создан для портфолио с целью показать навыки работы с React, анимациями и визуализацией данных.",
        tech: ["React", "Tailwind", "Rechart"],
        link: "https://increasse.github.io/conference-pres/"
    },
    {
        img: require("../img/store.jpg"),
        title: "Витрина цифровых товаров",
        desc: "Учебный проект для удобного представления цифровых товаров, обеспечивающее быстрый поиск и навигацию среди большого количества предложений.",
        tech: ["Drogon C++", "Tailwind", "Astro", "Svelte", "Postgres"],
        link: "https://github.com/Increasse/course-practice"
    },
    {
        img: require("../img/taskflow.jpg"),
        title: "TaskFlow",
        desc: "Приложение для работы с задачами и Kanban-доска с Drag&Drop механикой. ",
        tech: ["TS", "React", "Tailwind", "Zustand"],
        link: "https://increasse.github.io/conference-pres/"
    },
    {
        img: require("../img/symphony.jpg"),
        title: "GitHub Symphony",
        desc: "Интерактивное веб-приложение, которое анализирует историю коммитов GitHub-репозитория и преобразует её в музыкально-визуальную симфонию.",
        tech: ["TS", "React", "Tailwind", "Zustand", "API"],
        link: "https://increasse.github.io/conference-pres/"
    },
]

export default function Projects() {

    return (
        <section id="projects">

            <div className="projects-content">
                <h2 className="section-title">Примеры работ</h2>

                <div className="projects-container">
                    {projects.map((project, i) => (
                        <div key={i} className="project-item">
                            <div className="project-img">
                                <img src={project.img} alt=""/>
                            </div>
                            <div className="project-main">
                                <div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.desc}</p>
                                </div>
                                <div>
                                    <div className="project-tech">
                                        {project.tech.map(t => <span key={t}>{t}</span>)}
                                    </div>
                                    <a href={project.link} className="project-link" target="_blank"
                                       rel="noopener noreferrer">
                                        Посмотреть проект →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}