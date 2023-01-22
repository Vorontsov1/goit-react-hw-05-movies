import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import styles from './GoBackBtn.module.scss';

const GoBackBtn = ({ backLinkHref }) => {
  return (
    <div className={styles.container}>
      <Link to={backLinkHref} className={styles.link}>
        <BsArrowLeftShort size={20} />
        Go back
      </Link>
    </div>
  );
};

export default GoBackBtn;

