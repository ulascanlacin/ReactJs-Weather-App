import React from "react";
import Navbar from "./Navbar";
import Weather from "./Weather";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Weather />
            </div>
        </div>
    );
}

export default Home;
