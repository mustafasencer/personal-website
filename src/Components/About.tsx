import React from 'react';
import {IMain} from "../Models/Header";

function About(props: IMain) {

    return (<section id="about">
        <div className="row">
            <div className="two columns">
                <img className="profile-pic" src={process.env.PUBLIC_URL + '/images/profilepic.jpg'}
                     alt="All the rights, honours and privileges thereunto appertaining..."/>
            </div>
            <div className="nine columns">
                <h2>About Me</h2>
                <p>{props.bio}</p>
                <div className="brands">
                    <img className="svg" src={process.env.PUBLIC_URL + '/images/python-brands.svg'} alt=""/>
                    <img className="svg" src={process.env.PUBLIC_URL + '/images/js-brands.svg'} alt=""/>
                    <img className="svg-ts" src={process.env.PUBLIC_URL + '/images/ts-brands.svg'} alt=""/>
                    <img className="svg" src={process.env.PUBLIC_URL + '/images/golang-brands.svg'} alt=""/>
                </div>
                <div className="row">
                    <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                            <span>{props.name}</span><br/>
                            <span>{props.address.street}<br/>
                                {props.city}, {props.address.zip}
                   </span><br/>
                            <span>{props.phone}</span><br/>
                            <span>{props.email}</span>
                        </p>
                    </div>

                </div>

            </div>

        </div>

    </section>)
}

export default About;
