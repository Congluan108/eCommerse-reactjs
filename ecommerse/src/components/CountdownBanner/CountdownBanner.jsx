import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
function CountdownBanner() {

    const{container, containerTimer, title, boxBtn} = styles;
    const targetDate = '2024-12-31T00:00:00';
    return ( 
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate}/>
            </div>
            <p className={title}>The Classics Make A Comeback</p>
            <div className={boxBtn}>
                <Button content={'Buy Now'}/>
            </div>
        </div>
     );
}

export default CountdownBanner;