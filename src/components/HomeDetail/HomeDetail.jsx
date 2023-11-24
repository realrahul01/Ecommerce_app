import styles from './HomeDetail.module.css'

const HomeDetail =()=>{
    return(
        <div className={styles.BannerImg}>
            <div className={styles.container}>
                <label className={styles.pContainer}>Trande-in-office</label>
                <h2>Super value deals</h2>
                <h2 className={styles.hContainer}>On all products</h2>
                <p className={styles.tpContainer}>Save more with coupons & up to 70% off!</p>
                <button>Shop Now</button>
            </div>
        </div>
    )
}
export default HomeDetail;