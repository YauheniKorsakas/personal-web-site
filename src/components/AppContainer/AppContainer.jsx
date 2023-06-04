import Details from '../Details/Details';
import styles from './AppContainer.module.scss';
import Container from '../shared/Container/Container';
import Contacts from '../Contacts/Contacts';

const AppContainer = () => {
  return (<div className={styles.AppContainer}>
    <Container className={styles.CenterContainer}>
      <div className={styles.TopContainer}>
        <Details className={styles.Details}/>
        {/* <div className={styles.Details}>Details</div> */}
        <div className={styles.About}>About</div>
        <Contacts className={styles.Contacts} />
      </div>
      <div className={styles.BottomContainer}>
        <div className={styles.Skills}>Skills</div>
        <div className={styles.Experience}>Experience</div>
      </div>
    </Container>
  </div>);
};

export default AppContainer;
