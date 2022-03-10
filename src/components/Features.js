function Features() {
    return (
        <section id="page-section">
            <div className="container-fluid" id="fluid">
                <h4 className="features text-center">
                    FEATURES <br />{" "}
                    <span style={{ color: "rgb(3, 44, 105)" }}>
                        HANDCRAFTED FOR YOU.
                    </span>
                </h4>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 text-center">
                        <div className="feature-row">
                            <img
                                src="Images/vcfeatureone.png"
                                alt="Goals"
                                style={{ width: "30%", height: "30%" }}
                            />
                            <h5 className="feature-heading">
                                <strong>Set your Training Goals</strong>
                            </h5>
                            <p className="feature-content">
                                Decide what you want to learn.
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 text-center">
                        <div className="feature-row">
                            <img
                                src="Images/vcfeaturetwo.png"
                                alt="learning"
                                style={{ width: "30%", height: "30%" }}
                            />
                            <h5 className="feature-heading">
                                <strong>Personalized Learning</strong>
                            </h5>
                            <p className="feature-content">
                                We pick you up from where you are and take you
                                to your destination. One on one mentoring is
                                provided with customized courses.
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 text-center">
                        <div className="feature-row">
                            <img
                                src="Images/vcfeaturethree.png"
                                alt="learn"
                                style={{ width: "30%", height: "30%" }}
                            />
                            <h5 className="feature-heading">
                                <strong>Self-Learning - Learn to Learn</strong>
                            </h5>
                            <p className="feature-content">
                                We provide platform where individual takes the
                                initiative with or without the assisstence of
                                the mentor.
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 text-center">
                        <div className="feature-row">
                            <img
                                src="Images/vcfeaturefour.png"
                                alt="Assistance"
                                style={{ width: "30%", height: "30%" }}
                            />
                            <h5 className="feature-heading">
                                <strong>Expert Coach Assistance</strong>
                            </h5>
                            <p className="feature-content">
                                Take leverage of our expert coaching staff
                                whenever needed.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row" id="row2">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 text-center">
                        <div className="feature-row">
                            <img
                                src="Images/vcfeaturefive.png"
                                alt="Assistance"
                                style={{ width: "25%", height: "25%" }}
                            />
                            <h5 className="feature-heading">
                                <strong>24x7 Lab Access</strong>
                            </h5>
                            <p className="feature-content">
                                Get started right away. Access the course
                                materials from anywhere and at anytime.
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 text-center">
                        <div className="feature-row">
                            <img
                                src="Images/vcfeaturesix.png"
                                alt="Assessment"
                                style={{ width: "25%", height: "25%" }}
                            />
                            <h5 className="feature-heading">
                                <strong>Ongoing Assessment</strong>
                            </h5>
                            <p className="feature-content">
                                Assessment is conducted regurlarly for the
                                individual's upskilling progress.
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 text-center">
                        <div className="feature-row">
                            <img
                                src="Images/vcfeatureseven.png"
                                alt="Access"
                                style={{ width: "25%", height: "25%" }}
                            />
                            <h5 className="feature-heading">
                                <strong>
                                    {" "}
                                    Reports - Deployability and Learnability
                                </strong>
                            </h5>
                            <p className="feature-content">
                                Graphical representation helps you identify your
                                strengths and areas of improvement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
