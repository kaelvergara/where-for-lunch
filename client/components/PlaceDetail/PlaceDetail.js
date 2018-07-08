import React from 'react';
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PlaceDetail.css';


const PlaceDetail = ({ details }) => {
  return (
    <div className={styles.root}>
      <Flexbox flexDirection="column">
        <Flexbox element="header">
          <h2>{ details.name }</h2>
        </Flexbox>
        <Flexbox flexDirection="column" flexGrow={1}>
          <div className="mb2">
            <FontAwesomeIcon className={styles.icon} icon="map-marker-alt" />
            <span className="location">
              { `${details.location.address1} ${details.location.city} ${details.location.country}` }
            </span>
            <span> | </span>
            <FontAwesomeIcon className={styles.icon} icon="phone" />
            <span className="phoneNumber">{ details.display_phone }</span>
            <FontAwesomeIcon className={styles.icon} icon="laptop" />
            <a className="website" href={details.url}>Website</a>
          </div>
          <div className="mb2">
            <span className="rating">Rating: { details.rating }</span>
            <span> | </span>
            <span className="reviews">Reviews: { details.review_count }</span>
          </div>
          <div className="mb2">
            <span>Photos</span>
            <Flexbox flexDirection="row" alignItems="flex-start" flexWrap="wrap">
              {
                details.photos.map((photo, i) => {
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
            </Flexbox>
          </div>
        </Flexbox>
      </Flexbox>
    </div>
  );
};

PlaceDetail.propTypes = {
  details: PropTypes.object,
};

export default PlaceDetail;
