import {useState} from 'react';

export default function About() {
    const [activeTab, setActiveTab] = useState('education');
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const tabs = [
        { id: 'education', label: 'Образование' },
        { id: 'courses',   label: 'Курсы' },
        { id: 'skills',    label: 'Навыки' },
    ];

    const photos = [
        require('../img/myphoto.jpg'),
        require('../img/bauman.jpg'),
        require('../img/baumantech.jpg'),
    ];

    // Функции для переключения фото
    const nextPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    };

    const prevPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const content = {
        education: (
            <div className="content-item">
                <div>
                    <h4>МГТУ им. Н.Э. Баумана</h4>
                    <p>Бакалавриат, Разработка Систем автоматизированного проектирования<br/>2021–2025</p>
                </div>
                <div>
                    <h4>МГТУ им. Н.Э. Баумана</h4>
                    <p>Магистратура, Разработка Систем автоматизированного проектирования<br/>2025–2027</p>
                </div>
            </div>
        ),

        courses: (
            <div className="content-item">
                <div>
                    <h4>Программа профессиональной переподготовки «Frontend-разработчик»</h4>
                    <p>Период обучения: 293 академ. ч. <br/> Учебное заведение: «Цифровая кафедра» МГТУ</p>
                </div>
            </div>
        ),

        skills: (
            <div className="skills-grid">
                {[
                    'React', 'TypeScript', 'JavaScript ES6+',
                    'Node.js', 'PostgreSQL', 'Git / GitHub',
                    'Tailwind / CSS', 'Figma',
                ].map(skill => (
                    <div key={skill} className="skill-tag">{skill}</div>
                ))}
            </div>
        ),
    };

    return (
        <section id="about">
            <div className="about-container">
                <div className="left-column">
                    <h2 className="about-title">Обо мне</h2>

                    <div className="slider-container">
                        <div className="tabs">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="content-area">
                            {content[activeTab]}
                        </div>
                    </div>
                </div>

                <div className="right-column photo-carousel-wrapper">
                    <div className="photo-carousel">
                        {photos.map((src, index) => {
                            let position = index - currentPhotoIndex;
                            if (position > Math.floor(photos.length / 2)) position -= photos.length;
                            if (position < -Math.floor(photos.length / 2)) position += photos.length;

                            let itemClass = 'carousel-item';
                            if (position === 0) itemClass += ' active center';
                            else if (position === 1) itemClass += ' next';
                            else if (position === -1) itemClass += ' prev';
                            else itemClass += ' hidden';

                            return (
                                <div
                                    key={index}
                                    className={itemClass}
                                >
                                    <img src={src} alt={`Фото ${index + 1}`} />
                                </div>
                            );
                        })}
                    </div>

                    <button className="carousel-btn prev" onClick={prevPhoto}>
                        ←
                    </button>
                    <button className="carousel-btn next" onClick={nextPhoto}>
                        →
                    </button>

                    <div className="photo-glow" />
                </div>
            </div>
        </section>
    );
}