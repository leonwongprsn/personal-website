import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img
                    src="img/letter-l.png"
                    alt="Full logo"
                    className="footer__logo"
                />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a
                                    href="https://github.com/leonwongprsn"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="footer__link"
                                >
                                    Github
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="https://www.linkedin.com/in/lwwongleon/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="footer__link"
                                >
                                    Linkedin
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="#section-about"
                                    className="footer__link"
                                >
                                    Youtube
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="#section-about"
                                    className="footer__link"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="#section-about"
                                    className="footer__link"
                                >
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built on top of Jonas Schmedtmann 's online course
                        Advanced CSS and Sass.
                        <br />
                        Migrated to React.js by Leon Wong . Copyright &copy;
                        Leon Wong {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
