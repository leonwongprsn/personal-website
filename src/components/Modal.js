import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    console.log(props.popupContent);
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="popup" id="popup">
            <div
                className="popup__content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="popup__left">
                    <img
                        src="img/nat-8.jpg"
                        alt="Tour"
                        className="popup__img"
                    />
                    <img
                        src="img/nat-9.jpg"
                        alt="Tour"
                        className="popup__img"
                    />
                </div>
                <div className="popup__right">
                    <a
                        href="#section-project"
                        className="popup__close"
                        onClick={props.onDismiss}
                    >
                        &times;
                    </a>
                    <h2 className="heading-secondary u-margin-bottom-small">
                        Demo
                    </h2>
                    {/* <h3 className="heading-tertiary u-margin-bottom-small">
                Important &ndash; Please read
                booking
            </h3> */}

                    {props.popupContent}
                    {/* <p className="popup__text">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Vel ad accusamus quam perferendis quidem atque
                et voluptates deleniti, eius inventore sequi odit,
                recusandae odio consectetur libero? Nemo voluptatem
                iure est? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Illo explicabo soluta nostrum, eum
                minima numquam aperiam ipsa sit aliquam ullam unde
                quam, eos, harum saepe quod iusto praesentium
                inventore perferendis!
            </p> */}
                    <a
                        href="https://github.com/leonwongprsn/SportsFacilitiesFinderHK-Android"
                        className="btn btn--green"
                    >
                        Source code
                    </a>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;
