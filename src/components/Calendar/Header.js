import React from 'react';
import shortId from 'shortid';
import { days } from './constants';
import './Header.css';

const renderCells = () => days.map(day => <div key={shortId.generate()}>{day}</div>);
const Header = () => <div className="header-container">{renderCells()}</div>;

export default Header;
