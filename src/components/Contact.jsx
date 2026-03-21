import {useState} from "react";

export default function Contact() {
    const email = "sir.petrikov2017@yandex.ru"; // ← замени на свой реальный адрес
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
        }).catch(err => {
            console.error('Не удалось скопировать:', err);
        });
    };

    return (
        <section id="contact">
            <h3>Оставайся на связи</h3>
            <div className="contact-links">
                <div className="contact-link">
                    <a href="https://t.me/wannaluv" target="_blank" rel="noopener noreferrer">
                        <img src={require('../img/telegram.png')} alt="Telegram" />
                    </a>
                    <p>@WannaLuv</p>
                </div>

                <div className="contact-link" onClick={copyEmail} style={{ cursor: 'pointer' }}>
                    <div style={{ position: 'relative' }}>
                        <img src={require('../img/mail.png')} alt="Mail" />

                        {copied && (
                            <div className="copy-tooltip">
                                Скопировано!
                            </div>
                        )}
                    </div>
                    <p>Скопировать</p>
                </div>
            </div>
        </section>
    );
}