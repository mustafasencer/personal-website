import React from 'react';
import {IMain} from "../Models/Header";

function Footer(props: IMain) {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {props.social.map((item, i) => {
                            return (<li key={i}>
                                <a target="_blank" rel="noopener noreferrer" href={item.url}>
                                    <i className={item.className}>
                                    </i></a>
                            </li>)
                        })}
                    </ul>

                    <ul className="copyright">
                        <li>&copy; Copyright 2020 Mustafa Sencer Özcan</li>
                        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                    </ul>

                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home">
                    <i className="icon-up-open"></i></a></div>
            </div>
        </footer>
    );
}

export default Footer;
