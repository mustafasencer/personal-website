import React, {RefObject} from "react";
import {IMain} from "../Models/Header";

function Header(props: IMain) {

    const ref: RefObject<any> = React.createRef();

    const smoothScroll = () => {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <header id="home">

            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li><a href="#home" onClick={smoothScroll}>Home</a>
                    </li>
                    <li><a href="#about" onClick={smoothScroll}>About</a></li>
                    <li><a target="_blank" rel="noopener noreferrer"
                           href={process.env.PUBLIC_URL + '/CV.pdf'}
                           onClick={smoothScroll}>Resume</a>
                    </li>
                </ul>

            </nav>

            <div className="row banner" ref={ref}>
                <div className="banner-text">
                    <h1 className="responsive-headline">I'm {props.name}</h1>
                    <h3>I'm an {props.city} based
                        <span> {props.occupation}</span>.
                        &nbsp;{props.description}</h3>
                    <hr/>
                    <ul className="social">
                        {props.social.map((item, i) => {
                            return (<li key={i}>
                                <a target="_blank" rel="noopener noreferrer" href={item.url}>
                                    <i className={item.className}>
                                    </i></a>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="icon-down-circle"></i>
                </a>
            </p>

        </header>
    )
}

export default Header;
