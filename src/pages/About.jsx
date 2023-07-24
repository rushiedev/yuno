import style from '../styles/pages/about.module.css';
import settings from '../settings.json';
import React from 'react';

const skills = settings.skills;

function About() {
    return (
        <div className={style['about-page']}>
            <h1 className={style.title}>About me</h1>
            <p className={style.description}>
                {settings.about}
            </p>

            <h1 className={style.title}>Skills</h1>

            <p className={style.description}>
                {Object.entries(skills).map(([key, val], i) => (
                    <React.Fragment key={i}>
                        <span>{key}: {val}</span> <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    )
}

export default About;