import classNames from 'classnames';

import styles from './Container.module.scss';

const Container = ({children, className = ''}) => {
  const resultClasses = classNames(styles.Container, className);

  return (
    <div className={resultClasses}>
      {children}
    </div>)
};

export default Container;
