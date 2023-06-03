import styles from './Details.module.scss';
import Container from 'src/components/shared/Container/Container';
import mainImageSrc from '../../materials/main.jpg';
import classNames from 'classnames';

const Details = ({className = ''}) => {

  return (<Container className={classNames(styles.Details, className)}>
    <span className={styles.FullName}>Yauheni Korsakas</span>
    <span className={styles.Title}>Full Stack <span className={styles.WebDeveloperContainer}>Web Developer</span></span>
    <img src={mainImageSrc} alt={"Main image"}></img>
    <section className={styles.ContactInfo}>
      <h4 className={styles.Title}>Contact Info</h4>
      <a href={"https://www.linkedin.com/in/yauheni-korsakas-94bb91197/"}>Linked In</a>
      <a href={"mailto:yauheni.korsakas@gmail.com"}>Gmail</a>
      <a href={"https://yauhenikorsakas.github.io/landing/skype:live:yauheni.korsakas?chat"}>Skype</a>
    </section>
  </Container>);
}

export default Details;
