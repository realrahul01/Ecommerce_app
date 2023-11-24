import styles from './AboutUs.module.css'

const AboutUs = () => {
    return (
      <div className={styles.responsiveContainerBlock}>
        <div className="responsive-container-block Container">
          <p className={styles.heading}>About Us</p>
          <p className={styles.SubHeading}>
            The website www.uniqueStore.in ("uniqueStore.in") is operated by
            unique Store Seller Services Private Limited ("uniqueStore" or "us" or
            "we" or "our"), having its registered office located 8th Floor,
            Brigade Gateway 26/1 Dr. Rajkumar sea near Bangalore hills – 560055,
            delhi, India. Please read the Conditions of Use document carefully
            before using the uniqueStore.in website. By using the uniqueStore.in
            website, you signify your agreement to be bound as protservice
            providers to fulfill orders for products or services, and to deliver
            packages. For any further details on our security practices please
            read our Privacy Notice. For any queries or issues relating to
            uniqueStore.in
          </p>
          <div className={styles.iconContainer}>
            <a className="social-icon">
              <img className="socialIcon image-block" src='../images/fb.png' />
            </a>
            <a className="social-icon">
              <img className="socialIcon image-block" src='../images/twitter.png' />
            </a>
            <a className="social-icon">
              <img className="socialIcon image-block" src='../images/insta.png' />
            </a>
            <a className="social-icon">
              <img className="socialIcon image-block" src='../images/linkedin.png' />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;