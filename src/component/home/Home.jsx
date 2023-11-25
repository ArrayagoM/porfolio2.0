import React from 'react';
import Cards from '../Crads/Crads';
import style from './Home.module.css';
import { Link } from 'react-router-dom';

import css from '../../img/CSS3.png';
import html from '../../img/HTML5.png';
import js from '../../img/javascript.png';
import reactimg from '../../img/react.png';
import redux from '../../img/redux.png';
import node from '../../img/NodeJS.png';
import sequelize from '../../img/sequelize.svg';
import postgres from '../../img/postgres.png';
import Certificates from '../Certificates/Certificates';

const Home = () => {
  return (
    <div className={style.container_i}>
      <div>
        <h1 className={style.title} color="teal.500">
          Full Satck Web Developer
        </h1>
        <div>
          <h4 className={style.subtitle}>working technologies</h4>
        </div>
      </div>
      <div className={style.proyects}>
        <h3 className={style.proyec}>Proyects</h3>
        <div className={style.container_proyec}>
          <Cards />
        </div>
      </div>
      <div className={style.lenguage}>
        <h3 className={style.leng}>Technologies</h3>
        <div className={style.container_img}>
          <Link to="https://developer.mozilla.org/es/docs/Web/CSS">
            <img src={css} alt="" srcSet="" style={{ width: '100px' }} />
          </Link>

          <Link to={'https://developer.mozilla.org/es/docs/Web/html'}>
            <img src={html} alt="" srcSet="" style={{ width: '100px' }} />
          </Link>
          <Link to={'https://developer.mozilla.org/es/docs/Web/javascript'}>
            <img src={js} alt="" style={{ width: '100px' }} />
          </Link>
          <Link to={'https://es.react.dev/'}>
            <img src={reactimg} alt="" srcSet="" style={{ width: '100px' }} />
          </Link>
          <Link to={'https://es.redux.js.org/'}>
            <img src={redux} alt="redux" style={{ width: '100px' }} />
          </Link>
          <Link to={'https://nodejs.org/es'}>
            <img src={node} alt="" srcSet="" style={{ width: '100px' }} />
          </Link>
          <Link
            to={
              'https://sequelize.org/docs/v6/advanced-association-concepts/creating-with-associations/'
            }
          >
            <img src={sequelize} alt="" srcSet="" style={{ width: '100px' }} />
          </Link>
          <Link to={'https://www.postgresql.org/'}>
            <img src={postgres} alt="" srcSet="" style={{ width: '100px' }} />
          </Link>
        </div>
        <Certificates />
      </div>
    </div>
  );
};

export default Home;
