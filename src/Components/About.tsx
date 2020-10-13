import React from 'react';
import {IMain} from "../Models/Main";

function About(props: IMain) {

    return (<section id="about">
        <div className="row">
            <div className="three columns">
                <img className="profile-pic" src={props.image} alt="Tim Baker Profile Pic"/>
            </div>
            <div className="nine columns main-col">
                <h2>About Me</h2>

                <p>{props.bio}</p>
                <div className="row">
                    <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                            <span>{props.name}</span><br/>
                            <span>{props.address.street}<br/>
                                {props.city} {props.address.state}, {props.address.zip}
                   </span><br/>
                            <span>{props.phone}</span><br/>
                            <span>{props.email}</span>
                        </p>
                    </div>
                    <div className="columns download">
                        <p>
                            <a href={props.email} className="button">
                                <i className="fa fa-download"></i>Download Resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>)
}

export default About;
