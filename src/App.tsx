import React, {useEffect, useState} from 'react';
import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {IMain} from "./Models/Main";

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
    })

    useEffect(() => {
        fetch('/resumeData.json', {method: "GET"})
            .then(r => {
                return r.json()
            })
            .then((jsonResponse) => {
                const a = jsonResponse.main as IMain
                console.log(a.social)
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
            <Footer/>
        </div>
    );
}

export default App;
