function Courses() {
    return (
        <>
            <div className="courses-section">
                <div className="courses-title">
                    Our{" "}
                    <span style={{ color: "rgb(3, 44, 105)" }}> Courses</span>
                </div>
                <div className="courses-subtitle">
                    We conduct remote self-paced training and online instructor
                    led training and classroom training for various emerging,
                    open-source technologies. We also provide hosted e-learning
                    solutions for your enterprise with content related to the
                    these techhnologies.
                </div>
                <img
                    className="courses"
                    src="Images/vcourcourses.png"
                    alt=""
                    id="courses"
                />
            </div>

            <section className="milestone">
                <div className="section-title">
                    {" "}
                    Our{" "}
                    <span style={{ color: "rgb(3, 44, 105)" }}>
                        Milestones{" "}
                    </span>
                </div>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xs-12 col-sm-6 col-md-6 col-lg-4 text-center"
                            id="image1"
                        >
                            <img
                                src="Images/vcaboutus1.png"
                                style={{ width: "50%", height: "auto" }}
                            />
                        </div>
                        <div
                            className="col-xs-12 col-sm-6 col-md-6 col-lg-4 text-center"
                            id="image2"
                        >
                            <img
                                src="Images/vcaboutus2.png"
                                style={{ width: "50%", height: "auto" }}
                            />
                        </div>
                        <div
                            className="col-xs-12 col-sm-6 col-md-6 col-lg-4 text-center"
                            id="image3"
                        >
                            <img
                                src="Images/vcaboutus3.png"
                                style={{ width: "50%", height: "auto" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Courses;
