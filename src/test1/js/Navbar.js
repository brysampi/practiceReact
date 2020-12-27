import React,{ useState} from 'react';

function Navbar() {
    const [click, burgerClick] = useState(false);
    const burgerHandleClick = () => burgerClick (!click);
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <div className="navbar__logo--align">
                    <a href="">
                        Logo
                    </a>
                </div>
            </div>
            <ul className="navbar__list">
                <li>
                    <a href="https://drive.google.com/file/d/1Qpf5sfct6JxXUrCh1H9cFqbkr08DB-jI/view?usp=sharing">
                        Resume
                    </a>
                </li>
                <li><a href="#contact">Contact Me</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#home">Home</a></li>

            </ul>
            <div className='burger' onClick={burgerHandleClick}>
                <div className='burger__up'></div>
                <div className='burger__mid'></div>
                <div className='burger__down'></div>
            </div>   
        </div>
    );
}
export default Navbar;