import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/fetchMovieApi';

const Reviews = () => {
  const [reviewMovie, setReviewMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieReviews(movieId)
      .then(data => {
        setReviewMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  if (!reviewMovie) {
    return;
  }

  const containerStyle =  {
    width: '1200px',
    margin: '0 auto',
    paddingTop: '50px',
  }

  return (
    <div style={containerStyle}>
      {reviewMovie.length > 0 ? (
        <ul>
          {reviewMovie.map(({ id, author, content }) => (
            <li key={id}>
              Author: <b>{author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Reviews not found</div>
      )
    } 
    </div>
  );
};

export default Reviews;