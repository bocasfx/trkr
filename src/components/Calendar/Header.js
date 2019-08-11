import React from 'react';
import { days } from '../../constants';
import './Header.css';

const renderCells = () => days.map(day => <div key={day}>{day}</div>);
const Header = () => <div className="header-container">{renderCells()}</div>;

export default Header;
