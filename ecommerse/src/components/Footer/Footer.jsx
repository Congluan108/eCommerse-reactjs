import { dataMenu } from '@components/Footer/constant';
import styles from './styles.module.scss';

function MyFooter() {
    const {container, boxNav} = styles;
    return <div className={container}>
        <div>
            <img src="https://www.vectorkhazana.com/assets/images/products/Balenciaga_logo_2.png" 
            alt=""
            width={300}
            height={200} 
            />
        </div>

        <div className={boxNav}>
            {dataMenu.map((item)=>(
                <div>{item.content}</div>
            ))}
        </div>

        <div>
            <p style={{
                textAlign: 'center',
                fontSize: '20px'
            }}>Guaranteed safe ckeckout</p>
            <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png" 
            alt=""
            width={300}
            height={50} />
        </div>

        <div style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize:'20px'

        }}>
        Copyright © 2024 Balenciaga. Created by ConggLuan 
        </div>
    </div>;
}

export default MyFooter;
