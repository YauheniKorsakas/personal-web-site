import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Container from "../shared/Container/Container";
import Details from "../Details/Details";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import styles from "./AppContainer.module.scss";

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
          <Skills className={styles.Skills}>Skills</Skills>
          <Experience className={styles.Experience}>Experience</Experience>
        </div>
      </Container>
    </div>
  );
};

export default AppContainer;
