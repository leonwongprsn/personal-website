import React, { useState } from "react";

const NavigationButton = () => {
    const [checked, setChecked] = useState(false);

    const closeNav = () => {
        setChecked(false);
    };

    return (
        <div className="navigation">
            <input
                type="checkbox"
                className="navigation__checkbox"
                id="navi-toggle"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item" onClick={closeNav}>
                        <a href="#section-about" className="navigation__link">
                            01 About Me
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a
                            href="#section-project"
                            className="navigation__link"
                            onClick={closeNav}
                        >
                            02 Projects
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a
                            href="#section-stories"
                            className="navigation__link"
                            onClick={closeNav}
                        >
                            03 More dogs
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a
                            href="#section-form"
                            className="navigation__link"
                            onClick={closeNav}
                        >
                            04 Message Me
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationButton;
