import classNames from "classnames";

import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ completed = 0, className = ''}) => {
  return (
    <div className={classNames(styles.Container, className)}>
      <div
        className={styles.Filled}
        data-completed-percentage={completed}
      ></div>
    </div>
  );
};

export default ProgressBar;
