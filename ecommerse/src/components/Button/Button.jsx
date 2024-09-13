import styles from './styles.module.scss';

function Button({content}) {
    const {btn, btn_title}=styles;
    return ( 
        <button className={btn}>
            <span className={btn_title}>{content}</span>
        </button>
     );
}

export default Button;