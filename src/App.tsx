import React, {useEffect, useState} from 'react';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {IMain} from "./Models/Header";

function App() {
    const [mainInfo, setMainInfo] = useState<IMain>({
            name: "",
            bio: "string",
            email: "string",
            city: "string",
            phone: "string",
            description: "",
            occupation: "",
            social: [],
            address: {street: "", state: "", zip: 0}
        }
    )

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/resumeData.json',
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(r => {
                return r.json()
            })
            .then((jsonResponse) => {
                const a = jsonResponse.main as IMain
                setMainInfo(a);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="App">
            <Header {...mainInfo}/>
            <About {...mainInfo}/>
            <Footer {...mainInfo}/>
        </div>
    );
}

export default App;
