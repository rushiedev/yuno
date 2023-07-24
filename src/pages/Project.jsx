import style from '../styles/pages/project.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function Project() {
    return (
        <div className={style['project-page']}>
            <h1 className={style.title}>Projects</h1>

            <div className={style.list}>
                <a href='https://music.asako.dev/' target='_blank' rel="noreferrer" className={style.project}>
                    <strong className={style.title}>Music Player</strong>
                    <p className={style.description}>A normal music player.</p>
                    <span className={style['redirect-icon']}><FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                </a>

                <a href='https://bocchi-store.vercel.app/' target='_blank' rel="noreferrer" className={style.project}>
                    <strong className={style.title}>Bocchi Store</strong>
                    <p className={style.description}>Discord store web version.</p>
                    <span className={style['redirect-icon']}><FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                </a>
            </div>

            <div className={style.list}>
                <a href='https://yunocn.github.io/info_v1/' target='_blank' rel="noreferrer" className={style.project}>
                    <strong className={style.title}>Information</strong>
                    <p className={style.description}>Personal information website.</p>
                    <span className={style['redirect-icon']}><FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                </a>

                <a href='https://bot.yuphie.xyz/' target='_blank' rel="noreferrer" className={style.project}>
                    <strong className={style.title}>Yuphie Bot</strong>
                    <p className={style.description}>My Discord bot website.</p>
                    <span className={style['redirect-icon']}><FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                </a>
            </div>
        </div>
    )
}

export default Project;