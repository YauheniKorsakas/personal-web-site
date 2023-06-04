import Details from '../Details/Details';
import styles from './Main.module.scss';
import Container from 'src/components/shared/Container/Container';

const Main = () => {
  return (
    <div className={styles.Main}>
      <Container className={styles.Container}>
        <Details />
        <section className={styles.MiscContainer}></section>
      </Container>
    </div>
  );
};

export default Main;
