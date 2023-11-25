import React from 'react';
import Henry from '../../img/Henry.png';
import freecode from '../../img/freecode.png';
import robotica from '../../img/robotica.png';
import iot from '../../img/iot.png';
import './Certificates.css';

const Certificates = () => {
  return (
    <div className="container">
      <h2 className="title">Certificates</h2>
      <div className="element">
        <img src={Henry} alt="Henry" className="img" />
        <img src={freecode} alt="" className="img" />
        <img src={robotica} alt="" className="img" />
        <img src={iot} alt="" className="img" />
      </div>
    </div>
  );
};

export default Certificates;
