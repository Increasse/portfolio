export default function Hero() {
    return (
        <section className="hero container">
            <div>
                <h1>Петриков Никита<br />Web Developer</h1>
                <p className="hero-subtitle">
                    Привет! Я начинающий веб-разработчик с опытом создания современных и адаптивных сайтов. Готов к стажировке и первым реальным задачам!
                </p>

                <div className="tech-tags">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Tailwind / CSS</span>
                    <span className="tech-tag">Node.js</span>
                </div>

                <div className="hero-buttons">
                    <a href="#projects" className="btn-primary">Посмотреть работы</a>
                    <a href="#about" className="btn-outline">Обо мне</a>
                    <a href="#contact" className="btn-outline">Написать</a>
                </div>
            </div>
        </section>
    )
}