import style from '../styles/pages/shiggy.module.css';
import shiggy from '../img/shiggy.gif';

function Shiggy() {
    return (
        <div className={style['shiggy-page']}>
            <img src={shiggy} width={'100px'} alt='shiggy' />
        </div>
    )
}

export default Shiggy;