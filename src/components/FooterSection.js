function FooterSection() {
    return (
        <footer id="footer1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src="Images/vcfooter.png" className="footer" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5 className="heading1 text-light">Connect with us</h5>
                        <br />
                        <br />
                        <a
                            target="_blank"
                            href="https://twitter.com/jnaapti"
                            rel="noreferrer"
                        >
                            <i
                                className="social-icons fa fa-twitter fa-2x"
                                aria-hidden="true"
                            ></i>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/jnaapti"
                            rel="noreferrer"
                        >
                            <i
                                className="social-icons fa fa-facebook-official fa-2x "
                                style={{
                                    textShadow: "1px 1px 1px",
                                    fontSize: "2em",
                                }}
                                aria-hidden="true"
                            ></i>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/company/jnaapti"
                            rel="noreferrer"
                        >
                            <i
                                className="social-icons fa fa-linkedin fa-2x "
                                style={{
                                    textShadow: "1px 1px 1px",
                                    fontSize: "2em",
                                }}
                                aria-hidden="true"
                            ></i>
                        </a>
                        <br />
                        <h6 className="heading1" id="queries">
                            Any Queries
                        </h6>
                        <p
                            className="vc-footer-heading"
                            style={{ color: "#2c5aa0ff", fontSize: "30px" }}
                        >
                            Gautham
                        </p>
                        <p>
                            <a href="tel:+91-8660306661">
                                <i
                                    className="footer-element fa fa-mobile fa-lg"
                                    style={{
                                        color: "black",
                                        textShadow: "1px 1px 1px",
                                        fontSize: "eem",
                                    }}
                                    aria-hidden="true"
                                ></i>
                            </a>
                            <a href="tel:+91-8660306661">+91-866-030-6661</a>
                        </p>
                        <p className="vc-footer-heading">
                            <i
                                className="footer-element fa fa-envelope fa-lg"
                                style={{
                                    color: "black",
                                    textShadow: "1px 1px 1px",
                                    fontSize: "1em",
                                }}
                                aria-hidden="true"
                            ></i>
                            gautham@jnaapti.com
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h6 className="heading1">
                            Popular <br />
                            Meetups & Workshops
                        </h6>
                        <br />
                        <br />
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    target="_blank"
                                    href="https://jnaapti.com/meetups/the-quirks-of-javascript/"
                                    rel="noreferrer"
                                >
                                    Quirks of JavaScript
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://jnaapti.com/meetups/thinking-scale-with-nosql-stores/"
                                    rel="noreferrer"
                                >
                                    Thinking Scale with NoSQL stores
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://jnaapti.com/meetups/map-reduce-in-practice/"
                                    rel="noreferrer"
                                >
                                    Map/Reduce in Practice
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://jnaapti.com/meetups/future-of-client-side-technologies/"
                                    rel="noreferrer"
                                >
                                    Future of Client side Technologies
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://jnaapti.com/meetups/responsive-web-design/"
                                    rel="noreferrer"
                                >
                                    Responsive Web Design
                                </a>
                            </li>
                        </ul>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://jnaapti.com/services/workshops/">
                                    Fast Trackers Workshop
                                </a>
                            </li>
                            <li>
                                <a href="https://jnaapti.com/services/workshops/">
                                    Counter Challenge Workshop
                                </a>
                            </li>
                            <li>
                                <a href="https://jnaapti.com/services/workshops/iotdeepdive/">
                                    IOT Deep Dive
                                </a>
                            </li>
                            <li>
                                <a href="https://jnaapti.com/services/workshops/skilltrek/">
                                    Skill Trek
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 ">
                        <h6 className="heading1">Popular Courses</h6>
                        <br />
                        <br />
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-dark">
                                    Angular
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">
                                    Node.js
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">
                                    Django
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">
                                    Amazon Wen Services
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">
                                    MangoDB
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">
                                    React
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom text-center p-3">
                {" "}
                © 2021 Copyright:
                <a href="/"> &nbsp; &nbsp;Â© jnaapti.com</a>
            </div>
            <a
                id="back-to-top"
                href="#"
                className="btn btn-light btn-lg back-to-top"
                role="button"
            >
                <i className="fas fa-chevron-up"></i>
            </a>
        </footer>
    );
}

export default FooterSection;
