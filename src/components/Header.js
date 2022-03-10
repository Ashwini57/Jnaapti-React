import React from "react";

function Header() {
    const [website_name] = React.useState("jnaapti");
    return (
        <header>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="vclogo">
                            <a id="vclogo" href="http:/jnaapti.com">
                                { website_name }
                            </a>
                        </div>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a
                                className="dropdown-toggle"
                                id="menu"
                                data-toggle="dropdown"
                                href="#"
                            >
                                Menu
                                <span
                                    className="caret"
                                    style={{ color: "#2c5aa0ff" }}
                                ></span>
                            </a>
                            <ul className="dropdown-menu ">
                                <li>
                                    <a
                                        href="https://jnaapti.com/blog/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://jnaapti.com/products/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://jnaapti.com/services/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://jnaapti.com/careers/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://jnaapti.com/meetups/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Meetups
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://virtualcoach.jnaapti.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
