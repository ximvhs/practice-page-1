import React from 'react';

const YoutubeItem = (props) => {
    return (
    <div className="future">
      <div className="test">
        <img src= {props.img} alt="#"/>
        <div className="avatar">
          <img src={props.avt} alt="#" />
          <div className="autor">
            <h3>{props.titile}</h3>
            <p>{props.des}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default YoutubeItem;