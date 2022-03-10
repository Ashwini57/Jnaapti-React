function WhySection() {
    return (
        <div className="container-fluid">
            <div id="heading">
                Why{" "}
                <span style={{ color: "rgb(3, 44, 105)" }}>Virtual Coach</span>
            </div>
            <div className="row" id="row1">
                <div className="virtual virtual3">
                    <p className="content">
                        The{" "}
                        <a
                            className="link"
                            href="http://virtualcoach.jnaapti.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Jnaapti Virtual Coach
                        </a>
                        provides a hands-on, browser based platform to become a
                        solid engineer with a coach providing the required
                        guidance. The Virtual Coach helps you learn by actually
                        building something tangible.
                        <br />
                        <br />
                        <strong>"Don't ask for the fish, learn to fish"</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WhySection;
