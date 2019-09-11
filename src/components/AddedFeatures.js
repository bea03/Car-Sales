import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;

// STEP 3 - connecting components
// Call the connect function twice (curry) and pass in the component
// to the second call

// The first call takes in two arguments:
// 1- function (usually called mapStateToProps (mSTP))
// 2- an object that takes in action creators, and wraps them in the dispatch function and passes them on to props

