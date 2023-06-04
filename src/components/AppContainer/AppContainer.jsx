import Details from "../Details/Details";
import styles from "./AppContainer.module.scss";
import Container from "../shared/Container/Container";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";

const AppContainer = () => {
  return (
    <div className={styles.AppContainer}>
      <Container className={styles.CenterContainer}>
        <div className={styles.TopContainer}>
          <Details className={styles.Details} />
          <About className={styles.About}>About</About>
          <Contacts className={styles.Contacts} />
        </div>
        <div className={styles.BottomContainer}>
          <div className={styles.Skills}>Skills</div>
          <div className={styles.Experience}>Experience</div>
        </div>
      </Container>
    </div>
  );
};

export default AppContainer;
