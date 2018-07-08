import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import placeActions from 'actions/placeActions';
import PlaceDetail from 'components/PlaceDetail/PlaceDetail';

class PlaceDetails extends Component {
  constructor(props) {
    super(props);

    if (this.props.match) {
      const id = this.props.match.params.id;

      this.props.fetchPlaceDetails(id);
    }
  }

  render() {
    const { details } = this.props.place;
    return (
      <div className="placeDetailsWrapper">
        { details ? <PlaceDetail details={details}/> : 'Loading, please wait'}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaceDetails: placeActions.fetchPlaceDetails,
  }, dispatch);

PlaceDetails.propTypes = {
  match: PropTypes.object,
  place: PropTypes.object,
  fetchPlaceDetails: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaceDetails);
