import React from "react";
import NavigationButton from "./NavigationButton";
import RotatableCard from "./RotatableCard";
import "../sass/main.scss";
import Footer from "./Footer";

const App = () => {
    return (
        <div className="">
            <NavigationButton />
            <header className="header">
                <div className="header__logo-box">
                    <img
                        src="./img/letter-l.png"
                        alt="logo"
                        className="header__logo"
                    />
                </div>

                <div className="header__text-box">
                    <h1 className="heading-primary">
                        {/* <!-- heading-primary can be a block --> */}
                        <span className="heading-primary__text heading-primary__text--main">
                            Welcome
                        </span>
                        <span className="heading-primary__text heading-primary__text--sub">
                            My name is Leon and let's be friends.
                        </span>
                    </h1>
                    <div className="btn-discover-wrapper">
                        <a
                            href="#section-about"
                            className="btn btn--white btn--animated"
                        >
                            Know more about me
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <section className="section-about" id="section-about">
                    <div className="u-center-text u-margin-bottom-big temp">
                        <h2 className="heading-secondary">About Me</h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                School is tough but computer science is fun
                            </h3>
                            <p className="paragraph">
                                Hi, I'm Leon Wong, a computer science major
                                studying in the Hong Kong University of Science
                                and Technology. Programming brings me lots of
                                fun so during my undergraduate study I have
                                dabbled with different languages such as C++,
                                Java, Swift and JavaScript. I'm currently in
                                love with web development and focusing on
                                learning React for frontend and Spring for
                                backend. I am also a dog lover, causal gamer,
                                and nba fan!
                            </p>

                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Work experience
                            </h3>
                            <p className="paragraph">
                                I have interned at{" "}
                                <a
                                    href="https://www.gentlekids.com.hk/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Gentle Kids
                                </a>{" "}
                                as Software Engineer and responsible for
                                building their iOS application.
                            </p>
                            <p className="paragraph">
                                I am currently a iOS developer of &nbsp;
                                <a
                                    href="https://usthing.xyz/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    USThing
                                </a>
                                , a student-developed, all-in-one mobile app
                                that aims at providing a more convenient access
                                to IT services offered by HKUST.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/lwwongleon/"
                                rel="noreferrer"
                                target="_blank"
                                className="btn--text"
                            >
                                My Linkedin &nbsp;
                                <i
                                    className="fa fa-linkedin-square"
                                    style={{ fontSize: "1.6rem" }}
                                ></i>
                            </a>
                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <img
                                    src="img/apex-legend.jpg"
                                    alt=""
                                    className="composition__photo composition__photo--p1"
                                />
                                <img
                                    src="img/nba.jpeg"
                                    alt=""
                                    className="composition__photo composition__photo--p2"
                                />
                                <img
                                    src="img/samoyed.jpeg"
                                    alt=""
                                    className="composition__photo composition__photo--p3"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-cards" id="section-project">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary heading-secondary--white">
                            Project Experience
                            <span className="heading-primary__text heading-primary__text--sub heading-primary__text--optional">
                                Hover to see Demo
                            </span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-3">
                            <RotatableCard
                                cardStyle={1}
                                title="Sports Facilities Finder"
                                detailItemList={[
                                    "Android app written in Java",
                                    "In-app navigation to uncommon sports facilities",
                                    "Data from data.gov.hk",
                                    "Google Map SDK & Direction API",
                                    "University coursework",
                                ]}
                                detailUrl="#modal"
                                popupContent={
                                    <div className="video-container">
                                        <iframe
                                            className="video"
                                            title="demo video"
                                            width="100%"
                                            height="400px"
                                            src="https://www.youtube.com/embed/wV_9rjrg6s4"
                                        ></iframe>
                                    </div>
                                }
                            />
                        </div>
                        <div className="col-1-of-3">
                            <RotatableCard
                                cardStyle={2}
                                title="NoteTube"
                                detailItemList={[
                                    "Full stack Web app for taking notes while watching Youtube tutorials",
                                    "React.js, Redux, React Router",
                                    "Spring boot",
                                    "Firebase authentication",
                                    "Personal project",
                                ]}
                                detailUrl="https://notetube.netlify.app/"
                            />
                        </div>
                        <div className="col-1-of-3">
                            <RotatableCard
                                cardStyle={3}
                                title="USTree"
                                detailItemList={[
                                    "USThing in-app feature",
                                    "Promote eco-friendly activities to HKUST students",
                                    "View university print balance, carbon count, join lucky draw",
                                    "Work project involved",
                                ]}
                                detailUrl="#modal"
                                images={[
                                    "./img/ustree-demo1.PNG",
                                    "./img/ustree-demo6.PNG",
                                    "./img/ustree-demo5.PNG",
                                    "./img/ustree-demo4.PNG",
                                    "./img/ustree-demo3.PNG",
                                    "./img/ustree-demo2.PNG",
                                ]}
                            />
                        </div>
                    </div>

                    <div className="u-center-text u-margin-top">
                        <a
                            href="https://github.com/leonwongprsn"
                            target="_blank"
                            className="btn btn--green"
                            rel="noreferrer"
                        >
                            Discover all my projects &nbsp;
                            <i
                                className="fa fa-github"
                                style={{ fontSize: "2rem" }}
                            ></i>
                        </a>
                    </div>
                </section>

                <section className="section-stories" id="section-stories">
                    <div className="bg-video">
                        <video
                            className="bg-video__content"
                            autoPlay
                            muted
                            loop
                        >
                            <source
                                src="img/Golden-Retriever-and-Border-Collie.mp4"
                                type="video/mp4"
                            />
                            <source src="img/video.webm" type="video/webm" />
                            Your browser is not supported for video background!
                        </video>
                    </div>

                    <div className="u-center-text u-margin-top u-margin-bottom-medium">
                        <h2 className="heading-secondary">My favorite dogs</h2>
                    </div>
                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img
                                    src="img/samoyed-story.jpeg"
                                    alt="Samoyed"
                                    className="story__img"
                                />
                                <figcaption className="story__caption">
                                    Samoyed
                                </figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading__tertiary u-margin-bottom-small">
                                    Samoyed
                                </h3>
                                <p className="">
                                    Dubbed the “Sammy smile,” the happy dogs
                                    have lips that naturally curve upwards.
                                    People love the Sammy smile so much, you're
                                    just a quick web search away from a number
                                    of photo roundups dedicated to their gleeful
                                    mugs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img
                                    src="img/golden-retriever-story.jpeg"
                                    alt="Person on a tour"
                                    className="story__img"
                                />
                                <figcaption className="story__caption">
                                    Golden Retriever
                                </figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading__tertiary u-margin-bottom-small">
                                    Golden Retriever
                                </h3>
                                <p className="">
                                    They are considered to be the 4th smartest
                                    dog breed (in line behind Border Collies,
                                    Poodles, and German Shepherds). They also
                                    excel at being therapy dogs, rescue dogs,
                                    guide dogs, or your best friends.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="u-center-text u-margin-top">
                        <a
                            href="https://www.reddit.com/r/WhatsWrongWithYourDog/"
                            target="_blank"
                            className="btn--text"
                            rel="noreferrer"
                        >
                            My faourite dogs reddit r/whatswrongwithyourdog
                        </a>
                    </div>
                </section>

                <section className="section-book" id="section-form">
                    <div className="row">
                        <div className="book">
                            <div className="book__form">
                                <form
                                    action=""
                                    className="form"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <div className="u-margin-bottom-medium">
                                        <h2 className="heading-secondary">
                                            Leave me a message
                                        </h2>
                                    </div>
                                    <div className="form__group">
                                        <input
                                            type="text"
                                            className="form__input"
                                            placeholder="Your Name"
                                            id="name"
                                            required
                                        />
                                        <label
                                            htmlFor="name"
                                            className="form__label"
                                        >
                                            Your name
                                        </label>
                                    </div>
                                    <div className="form__group">
                                        <textarea
                                            className="form__input form__input--textarea"
                                            placeholder="Message"
                                            id="message"
                                            rows="4"
                                            cols="50"
                                            required
                                        ></textarea>
                                        <label
                                            htmlFor="message"
                                            className="form__label"
                                        >
                                            Message
                                        </label>
                                    </div>

                                    <div className="form__group">
                                        <button
                                            className="btn btn--green"
                                            style={{ backgroundColor: "gray" }}
                                        >
                                            Not available &nbsp;
                                            <i className="fa fa-envelope-o"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
