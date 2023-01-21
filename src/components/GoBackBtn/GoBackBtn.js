import { Link } from "react-router-dom";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import s from './GoBackBtn.module.scss';


const GoBackBtn = ({ backLinkHref}) => {
    return (
        <div className={s.container}>
            <Link to={backLinkHref} className={s.link}>
                <BsFillArrowLeftCircleFill size={20} />
                Go back
            </Link>
         </div>
    );
};

export default GoBackBtn;

