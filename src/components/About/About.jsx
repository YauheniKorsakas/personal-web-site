import classNames from "classnames";

import Container from "../shared/Container/Container";
import styles from "./About.module.scss";

const About = ({ className = '' }) => {
  return (
    <Container className={classNames(styles.About, className)}>
      <p>
        Greetings, I am <span>Yauheni Korsakas</span> and welcome to my page!
        Being Full Stack Web Developer on .NET stack since 2017, I am passionate about opening
        new horizons and working on every stuff that makes me better.
        And here I am sharing with you a bit of my tech background.
      </p>
    </Container>
  );
};

export default About;
