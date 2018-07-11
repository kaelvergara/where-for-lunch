import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import placeActions from 'actions/placeActions';
import Place from 'components/Place/Place';
import { isObjectEmpty } from 'lib/utils';

class PlacePage extends Component {
  constructor(props) {
    super(props);

    if (this.props.match) {
      const id = this.props.match.params.id;

      this.props.fetchPlaceDetail(id);
    }
  }

  render() {
    const place = this.props.place;
    return (
      <div className="placeWrapper">
        { !isObjectEmpty(place) ? <Place place={place} theme="detailed"/> : 'Loading, please wait'}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaceDetail: placeActions.fetchPlaceDetail,
  }, dispatch);

PlacePage.propTypes = {
  match: PropTypes.object,
  place: PropTypes.object,
  fetchPlaceDetail: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlacePage);
