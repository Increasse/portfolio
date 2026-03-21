export default function Navbar() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className="navbar">
            <div className="container navbar-inner">
                <div className="navbar-brand">Никита Петриков</div>
                <div className="nav-links">
                    <button onClick={() => scrollTo('projects')}>Проекты</button>
                    <button onClick={() => scrollTo('contact')}>Контакты</button>
                    <div className="nav-icons">
                        <a href="https://github.com/Increasse" target="_blank">
                            <img className="nav-icon" id="git-icon" src={require('../img/github.png')} alt="git" />
                        </a>
                        <a href="https://t.me/wannaluv" target="_blank">
                            <img className="nav-icon" id="tg-icon" src={require('../img/telegram.png')} alt="tg" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}