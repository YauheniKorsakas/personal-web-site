import classNames from "classnames";

import Container from '../shared/Container/Container';
import ProgressBar from '../shared/ProgressBar/ProgressBar';
import SkillsSource from '../../data/SkillsSource';
import styles from './Skills.module.scss';

const Skill = ({ completed = 0, label = ''}) => {
  return (
    <section className={styles.Skill}>
      <span>{label}</span>
      <ProgressBar completed={completed} className={styles.ProgressBar}/>
    </section>
  );
};

const Skills = ({className = ''}) => {
  return (
    <Container className={classNames(styles.Skills, className)}>
      <section className={styles.SkillsContainer}>
        {SkillsSource.map(item =>
          <Skill
            key={item.id}
            completed={item.percentage}
            label={item.label} />)}
      </section>
    </Container>
  );
}

export default Skills;
