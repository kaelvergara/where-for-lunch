import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Place.css';

const Place = ({ place, theme }) => {
  return (
    <div className={styles.root}>
      <div className={styles.name}>{ place.name || 'Where for lunch?' }</div>
      <div className={styles.box}>
        <div>{ place.address }</div>
        <div>{ place.phone }</div>
        <div>{ place.categories && place.categories.join(', ') }</div>
        <div>{ place.price }</div>
        { place.rating &&
        <div className={styles.rating}>
          <div className={styles.ratingScore}>{ place.reviewCount } reviews</div>
          <div className={styles.stars}>
            <div className={styles.emptyStars}></div>
            <div className={styles.fullStars} style={{ width: `${place.rating / 5 * 100}%` }}></div>
          </div>
        </div>
        }
        { theme === 'summarized' && place.id && <div className={styles.seeMore}><Link to={`/details/${place.id}`}>See More</Link></div> }
        { theme === 'detailed' && <div className={styles.photoLabel}>Photos</div> }
        { theme === 'detailed' && place.photos &&
          place.photos.map((photo, i) => {
            // set photos to same height and width
            return (
              <div
                key={i}
                className={classNames({
                  [styles.photo]: true,
                  pr2: true,
                })}
                style={{ backgroundImage: `url(${photo})` }}
              />
            );
          })
        }
      </div>
    </div>
  );
};

Place.propTypes = {
  place: PropTypes.object,
  theme: PropTypes.string,
};

export default Place;
