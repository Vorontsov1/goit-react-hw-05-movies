import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from '../../services/fetchMovieApi';
import s from './Cast.module.scss';

const Cast = () => {
    const [cast, setCast] = useState(null);
    const {movieId} = useParams();

    useEffect(() => {
        API.getMovieCast(movieId)
        .then(data => setCast(data))
        .catch(console.log);
    }, [movieId]);
    if (!cast) {
        return;
    }

    return (
        <>
        {cast.length > 0 ? (
        <ul>
          {cast
            .slice(0, 19)
            .map(({ id, name, character, profile_path }) => (
              <li key={id} className={s.item}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                    className={s.img}
                    width="100"
                  />
                ) : (
                  <div className={s.imgNotFound}>Image not found</div>
                )}
                <div>
                  <p>
                    <b>{name}</b>
                  </p>
                  <p>
                    Character: <b>{character}</b>
                  </p>
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <div>No casts</div>
      )}
        </>
    )
}

export default Cast;