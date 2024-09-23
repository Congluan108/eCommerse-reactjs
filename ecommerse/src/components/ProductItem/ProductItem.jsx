import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
function ProductItem({ src, prevSrc, name, price }) {
    const { boxImg, showImg, showFnc, boxIcon, title, priceItem } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img
                    src={src}
                    alt=''
                />
                <img
                    src={prevSrc}
                    alt=''
                    className={showImg}
                />

                <div className={showFnc}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceItem}>{price}</div>
        </div>
    );
}

export default ProductItem;
