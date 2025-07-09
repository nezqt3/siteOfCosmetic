import React, { useEffect, useState } from "react";

function MainPage() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then((res) => setData(res.message))
    })

    return (
        <div>
            <h1>{data}</h1>
        </div>
    );
}

export default App;