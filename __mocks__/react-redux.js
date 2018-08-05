import React from 'react';
const Redux = jest.genMockFromModule('react-redux');


Redux.connect = () => (Node) => {
  const renderWrapped = (props) => <Node {...props} store={{}} />;
  renderWrapped.displayName = Node.displayName
    || Node.name
    || 'Component';
  return renderWrapped;
};

module.exports = Redux;
