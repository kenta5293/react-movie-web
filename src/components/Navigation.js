import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      {/* 
        React에서의 화면 이동은 React-Router-Dom 에서의 a태그 대신 Link를 이용하며,
        속성은 href 대신 to를 사용함.

        CSS에서는 Link가 a태그로 적용되는 듯.

        to는 많은 정보를 보낼 수 있도록 오브젝트 형태로 쓸 수 있음.
      */}
    </nav>
  );
}

export default Navigation;
