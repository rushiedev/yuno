import style from '../styles/pages/home.module.css';
import pfp from '../img/pfp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGithub, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import settings from '../settings.json';

library.add(faFacebook, faDiscord, faGithub, faTwitter);

const socials = settings.socials;

function Home() {
    return (
        <div className={style['home-page']}>
            <img className={style.avatar} alt='Profile Avatar' src={pfp} />

            <div className={style.contents}>
                <h1 className={style.title}>{settings.title}</h1>
                <p className={style.description}>
                    {settings.description}
                </p>

                <div className={style.socials}>
                    {Object.entries(socials).map(([key, val], i) => (
                        <a href={val} key={i} rel="noreferrer" target='_blank'><FontAwesomeIcon icon={['fab', key]} /></a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;