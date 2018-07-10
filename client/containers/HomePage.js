import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import Condition from 'components/Condition/Condition';

class HomePage extends Component {
  handleOnClick = () => {
    this.props.fetchPlaces(this.props.condition);
  }

  handleOnSetRadius = (value) => {
    this.props.setRadius(value);
  }

  handleOnSetCategories = (category) => {
    this.props.toggleCategory(category);
  }

  render() {
    const { condition, place: { featuredPlace }, cuisine } = this.props;
    const hasLocation = (condition.latitude != null && condition.longitude != null);
    return (
      <div className="homePageWrapper">
        <Place place={featuredPlace} />
        <div className="searchWrapper">
          <Condition
            condition={condition}
            categories={cuisine.categories}
            onSetRadius={this.handleOnSetRadius}
            onSetCategories={this.handleOnSetCategories}
          />
          <Button onClick={this.handleOnClick} theme="homepageClick" isDisabled={!hasLocation} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  place: state.place,
  cuisine: state.cuisine,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaces: placeActions.fetchPlaces,
    setRadius: conditionActions.setRadius,
    toggleCategory: conditionActions.toggleCategory,
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  cuisine: PropTypes.object,
  fetchPlaces: PropTypes.func,
  setRadius: PropTypes.func,
  toggleCategory: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
