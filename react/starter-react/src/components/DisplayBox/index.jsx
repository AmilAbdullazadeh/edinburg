import style from './style.module.css';

export function DisplayBox() {
    return (
        <div className={`${style.box} ${style.dFlex}`} >
            Medium
        </div>
    );
};