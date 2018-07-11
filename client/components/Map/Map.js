import React from 'react';
import PropTypes from 'prop-types';
import styles from './Map.css';

const Map = ({ lat, long, API_KEY, zoom }) => {
  return (
    <div className={styles.root}>
      { typeof lat !== 'undefined' &&
        typeof long !== 'undefined' &&
        typeof API_KEY !== 'undefined' &&
        typeof zoom !== 'undefined' &&
        <iframe
          className={styles.map}
          src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${lat},${long}&zoom=${zoom}`}
          width="100%"
          height="250"
        />
      }
    </div>
  );
};

Map.propTypes = {
  lat: PropTypes.number,
  long: PropTypes.number,
  API_KEY: PropTypes.string,
  zoom: PropTypes.number,
};

export default Map;
