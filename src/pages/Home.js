import React, { useState, useEffect } from "react";
import Header from '../components/Header'
import './Home.css'
import Picture from '../assets/profile_pic.jpg'



const Home = () => {

    const [frame, setFrame] = useState(0);
    const [name, setName] = useState(" ");
    const [displayName, setDisplayName] = useState(false);
    const [labelOne, setLabelOne] = useState(" ")
    const [displayLabelOne, setDisplayLabelOne] = useState(false);
    const [labelTwo, setLabelTwo] = useState(" ")
    const [displayLabelTwo, setDisplayLabelTwo] = useState(false);
    const [labelThree, setLabelThree] = useState(" ")
    const [displayLabelThree, setDisplayLabelThree] = useState(false);

    const myName = "Efaz Ahmed";
    const myLabelOne = "Software Engineer";
    const myLabelTwo = "Programmer"
    const myLabelThree= "Leader"


    // Name
    useEffect(() => {
        if (!displayName && frame <= myName.length) {
            const interval = setInterval(() => {
                setName(myName.slice(0, frame) + "|")
                setFrame(frame => frame + 1);
            }, 50)
            return () => clearInterval(interval)
        } else if (!displayName && frame < myName.length + 1) {
            console.log(frame)
            const interval = setInterval(() => {
                setFrame(frame => frame + 1)
                if(name === 'Efaz Ahmed|') {
                    setName("Efaz Ahmed");
                } else {
                    setName("Efaz Ahmed|");
                }
            }, 50)
            return () => clearInterval(interval)
        } else if (!displayName) {
            setDisplayName(true);
            setName("Efaz Ahmed");
            setFrame(0);
        }
    });

    // Label One
    useEffect(() => {
        if (!displayLabelOne && displayName && frame <= myLabelOne.length) {
            const interval = setInterval(() => {
                setLabelOne(myLabelOne.slice(0, frame) + "|")
                setFrame(frame => frame + 1);
            }, 50)
            return () => clearInterval(interval)
        } else if (!displayLabelOne && displayName && frame < myLabelOne.length + 1) {
            const interval = setInterval(() => {
                setFrame(frame => frame + 1)
                if(labelOne === `${myLabelOne}|`) {
                    setLabelOne(`${myLabelOne}`);
                } else {
                    setLabelOne(`${myLabelOne}|`);
                }
            }, 50)
            return () => clearInterval(interval)
        } else if (!displayLabelOne && displayName) {
            setDisplayLabelOne(true);
            setLabelOne(`${myLabelOne}`);
            setFrame(0);
        }
    });

    // Label Two
    useEffect(() => {
        if (!displayLabelTwo && displayLabelOne && displayName && frame <= myLabelTwo.length) {
            const interval = setInterval(() => {
                setLabelTwo(myLabelTwo.slice(0, frame) + "|")
                setFrame(frame => frame + 1);
            }, 70)
            return () => clearInterval(interval)
        } else if (!displayLabelTwo && displayLabelOne && displayName && frame < myLabelTwo.length + 1) {
            const interval = setInterval(() => {
                setFrame(frame => frame + 1)
                if(labelTwo === `${myLabelTwo}|`) {
                    setLabelTwo(`${myLabelTwo}`);
                } else {
                    setLabelTwo(`${myLabelTwo}|`);
                }
            }, 50)
            return () => clearInterval(interval)
        } else if (!displayLabelTwo && displayLabelOne && displayName) {
            setDisplayLabelTwo(true);
            setLabelTwo(`${myLabelTwo}`);
            setFrame(0);
        }
    });
    
    // Label Three
    useEffect(() => {
        if (!displayLabelThree && displayLabelTwo && displayLabelOne && displayName && frame <= myLabelThree.length) {
            const interval = setInterval(() => {
                setLabelThree(myLabelThree.slice(0, frame) + "|")
                setFrame(frame => frame + 1);
            }, 70)
            return () => clearInterval(interval)
        } else if (!displayLabelThree && displayLabelTwo && displayLabelOne && displayName && frame < myLabelThree.length + 1) {
            const interval = setInterval(() => {
                setFrame(frame => frame + 1)
                if(labelThree === `${myLabelThree}|`) {
                    setLabelThree(`${myLabelThree}`);
                } else {
                    setLabelThree(`${myLabelThree}|`);
                }
            }, 50)
            return () => clearInterval(interval)
        } else if (!displayLabelThree && displayLabelTwo && displayLabelOne && displayName) {
            setDisplayLabelThree(true);
            setLabelThree(`${myLabelThree}`);
            setFrame(0);
        }
    });
    
    
    return (
        <>
            <Header />
            <div className="content">
                <img src={Picture}></img>
                <div className="text-container">
                    <p className="name-title">{`${name} `}</p>
                    <p className="label-title label-one">{`${labelOne} `}</p>
                    <p className="label-title label-two">{`${labelTwo} `}</p>
                    <p className="label-title label-three">{`${labelThree} `}</p>
                </div> 
            </div>
        </>
    )
}




export default Home;