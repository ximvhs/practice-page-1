import React from 'react';
import YoutubeItem from './YoutubeItem';
import { Data } from '../../Data';
import './Youtube.css'

const YoutubeList = () => {
    return (
    <div className="box">
      {Data.map((item, index) => (
        <YoutubeItem
          key={index}
          img={item.img}
          avt={item.avt}
          titile={item.titile}
          des={item.des}
        >
        </YoutubeItem>
      ))}
    </div>
    );
};

export default YoutubeList;