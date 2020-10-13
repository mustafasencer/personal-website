import React from 'react';
import {IMain} from "../Models/Main";

function Header(props: IMain) {

    const smoothScroll = () => {
        console.log('on click!!!')
    }

    return (
        <header id="home">

            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home" onClick={smoothScroll}>Home</a>
                    </li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                </ul>

            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I'm {props.name}.</h1>
                    <h3>I'm a {props.city} based <span>{props.occupation}</span>. {props.description}.</h3>
                    <hr/>
                    <ul className="social">
                        {props.social.map((item, i) => {
                            return (<li key={i}><a className={item.className} href={item.url}/></li>)
                        })}
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="icon-down-circle"></i></a>
            </p>

        </header>
    )
}

export default Header;
