import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import ImageViewer from "react-simple-image-viewer";

export default function RotatableCard(props) {
    const detailUrl = props.detailUrl ?? "#";
    const cardStyle = props.cardStyle;

    const [showPopup, setShowPopup] = useState(false);
    const [showImageViewer, setShowImageViewer] = useState(false);

    const renderCardDetails = (detailItemList) => {
        return (
            <>
                <ul>
                    {detailItemList.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </>
        );
    };

    const renderPopup = () => {
        return (
            <Modal
                popupContent={props.popupContent}
                onDismiss={() => {
                    setShowPopup(false);
                }}
            />
        );
    };

    const renderImageViewer = () => {
        return ReactDOM.createPortal(
            <ImageViewer
                src={props.images}
                currentIndex={0}
                disableScroll={false}
                closeOnClickOutside={false}
                onClose={() => {
                    setShowImageViewer(false);
                }}
            />,
            document.querySelector("#modal")
        );
    };

    return (
        <div className="card">
            {showImageViewer && renderImageViewer()}
            {showPopup && renderPopup()}
            <div className="card__side card__side--front">
                <div className={`card__picture card__picture-${cardStyle}`}>
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span
                        className={`card__heading--span card__heading--span-${cardStyle}`}
                    >
                        {props.title}
                    </span>
                </h4>
                <div className="card__details">
                    {renderCardDetails(props.detailItemList)}
                </div>
            </div>
            <div
                className={`card__side card__side--back card__side--back-${cardStyle}`}
            >
                <div className="card__cta">
                    <a
                        href={detailUrl}
                        target={detailUrl === "#modal" ? "" : "_blank"}
                        rel="noreferrer"
                        className="btn btn--white"
                        onClick={() => {
                            props.popupContent && setShowPopup(true);
                            props.images &&
                                props.images.length > 0 &&
                                setShowImageViewer(true);
                        }}
                    >
                        Demo
                    </a>
                </div>
            </div>
        </div>
    );
}
