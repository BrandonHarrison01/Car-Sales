import React from 'react';
import { connect } from 'react-redux'

import { addItem, removeItem } from './actions'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeItem(item)
  };

  const buyItem = item => {
    // dispatch an action here to add an item
    console.log('item bought', item )
    // dispatch({ type: ADD_ITEM, payload: item })
    props.addItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => (
  {
  additionalPrice: state.additionalPrice,
  car: state.car,
  store: state.store
})

export default connect(
  mapStateToProps,
  { addItem, removeItem }
)(App);
