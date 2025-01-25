import React, { RefObject } from 'react';
import { IMain } from '../Models/Home';

function Home(props: IMain) {
  const ref: RefObject<any> = React.createRef();

  const smoothScroll = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="home">
      {/* NAVIGATION BAR */}
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>
        {/* <ul id="nav" className="nav">
          <li>
            <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + '/CV.pdf'} onClick={smoothScroll}>
              Resume
            </a>
          </li>
        </ul> */}
      </nav>

      {/* MAIN CONTENT */}
      <div className="row banner" ref={ref}>
        <div className="banner-text">
          <h1 className="responsive-headline">I&apos;m {props.name}</h1>
          <h2 className="responsive-headline">Seasoned Golang and Python software engineer! </h2>
          <h3>
            <img className="svg" src={process.env.PUBLIC_URL + '/images/golang-icon.svg'} alt="" />
            <img className="svg" src={process.env.PUBLIC_URL + '/images/python-icon.svg'} alt="" />
            <img className="svg" src={process.env.PUBLIC_URL + '/images/js-icon.svg'} alt="" />
            <img className="svg" src={process.env.PUBLIC_URL + '/images/ts-icon.svg'} alt="" />
          </h3>
          <hr />
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <ul className="social">
          {props.social.map((item, i) => {
            return (
              <li key={i}>
                <a target="_blank" rel="noopener noreferrer" href={item.url}>
                  <i className={item.className}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Home;
