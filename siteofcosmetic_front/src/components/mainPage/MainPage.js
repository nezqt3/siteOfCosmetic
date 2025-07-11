import React, { useEffect, useState } from "react";
import Header from '../header/Header'
import './mainPage.css'

function MainPage() {

    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch("/api")
    //     .then((res) => res.json())
    //     .then((res) => setData(res.message))
    // })

    return (
        <div className="main-block">
            <Header/>
            <h1>mainPage</h1>
        </div>
    );
}

export default MainPage;