import classNames from 'classnames';
import {
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillSkype
} from 'react-icons/ai';

import Container from '../shared/Container/Container'; 
import styles from './Contacts.module.scss';

const Contacts = ({ className = '' }) => {
  
  return (
    <Container className={classNames(styles.Contacts, className)}>
      <section className={styles.Links}>
        <a href={"https://www.linkedin.com/in/yauheni-korsakas-94bb91197/"}>
          <AiFillLinkedin />
        </a>
        <a href={"mailto:yauheni.korsakas@gmail.com"}>
          <AiFillGoogleCircle />
        </a>
        <a href={"skype:live:yauheni.korsakas?chat"}>
          <AiFillSkype />
        </a>
      </section>
    </Container>
  );
}

export default Contacts;
