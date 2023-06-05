import 'animate.css';
import classNames from 'classnames';

import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Container from "../shared/Container/Container";
import Details from "../Details/Details";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import styles from "./AppContainer.module.scss";

const AppContainer = () => {
  const animationClass = 'animate__animated animate__fadeInUp';

  return (
    <div className={styles.AppContainer}>
      <Container className={styles.CenterContainer}>
        <div className={styles.TopContainer}>
          <Details className={classNames(styles.Details, animationClass)} />
          <About className={classNames(styles.About, animationClass)}>About</About>
          <Contacts className={classNames(styles.Contacts, animationClass)} />
        </div>
        <div className={styles.BottomContainer}>
          <Skills className={classNames(styles.Skills, animationClass)}>Skills</Skills>
          <Experience className={classNames(styles.Experience, animationClass)}>Experience</Experience>
        </div>
      </Container>
    </div>
  );
};

export default AppContainer;
