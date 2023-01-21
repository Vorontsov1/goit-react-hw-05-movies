import {Link, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.scss';


const MoviesList = ({movies, titlePage = null }) => {
    const location = useLocation();

    return (
        <>
        {titlePage && <h1 className={s.title}>{titlePage}</h1>}

        <ul className={s.list}>
            {movies.map(({id, title, name}) => (
                <li key={id} className={s.item}>
                    <Link
                    to={`/movies/${id}`}
                    state={{from: location}}
                    className={s.link}
                    >
                        {title || name}
                    </Link>
                </li>
              ))}
           </ul>
        </>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            name: PropTypes.string,
        }).isRequired
    ),
    titlePage: PropTypes.string,
};

export default MoviesList;