import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const MenuItems = () => {
const [counter, incrementCounter] = useState(0);

  return (
    <div className="menubar">
        <nav className="navbar">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">About</a>
                <div className="submenu1">
                    <nav>
                        <li><a href="#">Mission</a></li>
                        <li className="hoverme"><a href="#">Vision</a>
                            <div className="submenu2">
                                <nav>
                                    <li><a href="#">category-1</a></li>
                                    <li><a href="#">category-2</a></li>
                                    <li><a href="#">category-3</a></li>
                                </nav>
                            </div>
                        </li>
                        <li><a href="#">Team</a></li>
                    </nav>
                </div>
            </li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </nav>
    </div>
  );
};

export default MenuItems;
