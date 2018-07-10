import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// changed from absolute to relative import in order for test to work
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import styles from './Condition.css';

export default class Condition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    onSetRadius: PropTypes.func,
    onSetCategories: PropTypes.func,
    categories: PropTypes.arrayOf(PropTypes.object),
  };

  handleOnBlurAction = (e) => {
    this.props.onSetRadius(e.target.value);
  }

  handleOnChangeAction = (e) => {
    this.props.onSetCategories(e.target.value);
  }

  isCategoryAdded(category) {
    const { categories } = this.props.condition;
    // use indexOf() over includes() for backwards compatibility
    return categories.indexOf(category) > -1;
  }

  render() {
    const { condition: { radius }, categories } = this.props;
    return (
      <fieldset className={styles.root}>
        <legend>Filters</legend>
        <label>Radius (meters):</label>
        <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction}></Input>
        <hr/>
        <label>Cuisines</label>
        { categories.map((category, i) => {
          return (
            <Checkbox
              key={i}
              value={category.value}
              label={category.title}
              isChecked={this.isCategoryAdded(category.value)}
              onChange={this.handleOnChangeAction}/>
          );
        })}
      </fieldset>
    );
  }
}
