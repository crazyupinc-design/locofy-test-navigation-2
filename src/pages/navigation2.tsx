import { FunctionComponent } from "react";
import styles from "./navigation2.module.css";
const Navigation2: FunctionComponent = () => {
  return (
    <div className={styles.navigation2}>
      <div className={styles.footer}>Footer</div>
      <div className={styles.navbarLogoLeft}>
        <div className={styles.navbarcontainer}>
          <div className={styles.navbarContent}>
            <div className={styles.navbarBrand}>
              <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            </div>
            <div className={styles.navbarMenu}>
              <div className={styles.navbarLink}>
                <div className={styles.about}>About</div>
              </div>
              <div className={styles.navbarLink}>
                <div className={styles.about}>Features</div>
              </div>
              <div className={styles.navbarLink}>
                <div className={styles.about}>Pricing</div>
              </div>
              <div className={styles.navbarButton}>
                <div className={styles.getStarted}>GET STARTED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation2;
