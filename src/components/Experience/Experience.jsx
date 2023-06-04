import classNames from 'classnames';

import Container from '../shared/Container/Container';
import styles from './Experience.module.scss';

const Experience = ({ className = '' }) => {
  return (
    <Container className={classNames(styles.Experience, className)}>
      <div className={styles.TimeTravel}>
        <div className={styles.Sidebar}></div>
        <div className={classNames(styles.Circle, styles.CurrentCircle)}></div>
        <div className={classNames(styles.Circle, styles.GodelCircle)}></div>
        <div className={classNames(styles.Circle, styles.SQILSoftCircle)}></div>
        <div className={classNames(styles.Circle, styles.BeginningCircle)}></div>
      </div>
      <section className={styles.Description}>
        <section className={styles.BeginningDescription}>
          The start of my career. Graduated from Grodno State University named after Yanka Kupala.
        </section>
        <section className={styles.SQILSoftDescription}>
          My first job. Here over 3 years I learned a lot of stuff regarding IT. How to work with team,
          get familiar with new techstack fast. Did full stack development of web apps using .net and angular.
          Namely, I was involved in investigating requirements, establishing actual code base, figuring out best approaches to solve
          a great banch of different tasks.
        </section>
        <section className={styles.GodelDescription}>
          My second job. Having that great experience that I had got in SQILSoft, I moved towards Godel Technologies.
          This company is much bigger than SQILSoft and here I learned how to participate in developing/supporting
          codebase in context of advanced approaches. Also, I moved from Grodno to Vilnius by the summer of 2022.
        </section>
        <section className={styles.CurrentDescription}>
          I am still working for Godel, but in Vilnius, gathering new experiences and constantly learning new stuff to get better
          as software developer.
        </section>
      </section>
    </Container>
  );
};

export default Experience;
