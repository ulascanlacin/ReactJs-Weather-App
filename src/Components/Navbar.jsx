import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar bg-dark">
                <div className="container-fluid d-flex">
                    <div className="d-flex align-items-center">
                        <span className=" mb-0 text-white  ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="56"
                                height="56"
                                fill="currentColor"
                                className="bi bi-brightness-alt-high-fill mt-0"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                            </svg>
                            <h2 className="mt-0">WEATHER</h2>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
