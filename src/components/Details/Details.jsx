import classNames from 'classnames';

import Container from '../shared/Container/Container';
import mainImageSrc from '../../materials/main.jpg';
import styles from './Details.module.scss';

const Details = ({className = ''}) => {

  return (<Container className={classNames(styles.Details, className)}>
    <img src={mainImageSrc} alt={"Main image"}></img>
    <section className={styles.Titles}>
      <span className={styles.FullName}>Yauheni Korsakas</span>
      <span className={styles.Title}>Full Stack <span className={styles.WebDeveloperContainer}>Web Developer</span></span>
    </section>
  </Container>);
}

export default Details;
