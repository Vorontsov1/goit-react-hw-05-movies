import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Additional.module.scss';


const AdditionalItems = [
    {href: 'cast', text: 'Cast'},
    {href: 'reviews', text: 'Reviews'},
];

const Additional = ({ location})  => {
    return (
        <div>
            <h4 className={s.title}>Additional information</h4>
            <ul>
                {AdditionalItems.map(({href, text}) => (
                    <li className={s.item} key={href}>
                        <Link to={href} state={{from: location}} className={s.link}>
                            {text}
                            </Link>
                  </li>
                ))}
            </ul>
            <hr />
        </div>
    );
};

AdditionalItems.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        state: PropTypes.bool,
    }).isRequired,
};

export default Additional;