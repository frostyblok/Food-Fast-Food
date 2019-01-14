import React from 'react';

const Main = (props) => {
  return ( 
    <div className="col-7 main-interface">
      <div className="main-interface-content">
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default Main;
