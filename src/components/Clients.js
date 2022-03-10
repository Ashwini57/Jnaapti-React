function Clients() {
    return (
        <>
            <div className="container" id="clients-section">
                <h4 className="features text-center">
                    OUR{" "}
                    <span style={{ color: "rgb(3, 44, 105)" }}>CLIENTS</span>
                </h4>
                <br />
                <br />

                <div className="row borderimg ">
                    <div className="col-xs-8">
                        <div className="col-xs-6 col-md-4">
                            <img
                                src="Images/Clients/Akamai.png"
                                style={{
                                    width: "35%",
                                    marginTop: "10%",
                                    padding: "5% 0",
                                }}
                            />
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <img
                                src="Images/Clients/BOA.png"
                                style={{
                                    width: "35%",
                                    marginTop: "10%",
                                    padding: "5% 0",
                                }}
                            />
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <img
                                src="Images/Clients/Cisco.png"
                                style={{
                                    width: "35%",
                                    marginTop: "10%",
                                    padding: "5% 0",
                                }}
                            />
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <img
                                src="Images/Clients/visa.png"
                                style={{
                                    width: "35%",
                                    marginTop: "10%",
                                    padding: "5% 0",
                                }}
                            />
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <img
                                src="Images/Clients/Practo.png"
                                style={{
                                    width: "35%",
                                    marginTop: "10%",
                                    padding: "5% 0",
                                }}
                            />
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <img
                                src="Images/Clients/Xchanging.jpg"
                                style={{
                                    width: "35%",
                                    marginTop: "10%",
                                    padding: "5% 0",
                                }}
                            />
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <img
                                src="Images/Clients/Genpact.png"
                                style={{
                                    width: "35%",
                                    marginTop: "10%",
                                    padding: "5% 0",
                                }}
                            />
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <img
                                src="Images/Clients/EMC.png"
                                style={{
                                    width: "35%",
                                    marginTop: "10%",
                                    padding: "5% 0",
                                }}
                            />
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <img
                                src="Images/Clients/nokia.png"
                                style={{
                                    width: "35%",
                                    marginTop: "10%",
                                    padding: "5% 0",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="contactus">
                <div className="box-section">
                    <div className="row ">
                        <img
                            src="Images/vccontactus.png"
                            style={{ maxWidth: "100%" }}
                            className="col-md-6"
                            id="contactus1"
                        />
                        <div className="col-md-6 " id="contactus2">
                            <h4 className="contactus-title">
                                Question{" "}
                                <span style={{ color: "rgb(3, 44, 105)" }}>
                                    {" "}
                                    <br /> not answered yet?
                                </span>
                            </h4>
                            <p className="contactus-subtitle">
                                Send us an email and we will get back to you
                                shortly. <br />
                                We are here to help you!
                            </p>
                            <div className="contactus-btn-section">
                                <a
                                    className="contact-link send-email-btn btn-primary btn-lg"
                                    href="https://jnaapti.com/contact/"
                                >
                                    Send an email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Clients;
