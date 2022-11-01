import React from 'react';
import '../styles/AboutMe.css';
import htmlLogo from '../assets/html-logo.png'
import nodeLogo from '../assets/node-logo.png'
import jsLogo from '../assets/js-logo.png'
import reactLogo from '../assets/react-logo.png'
import bsLogo from '../assets/bs-logo.png'
import cssLogo from '../assets/css-logo.png'
import mysqlLogo from '../assets/mysql-logo.png'
import fbLogo from '../assets/fb-logo.png'
import gitLogo from '../assets/git-logo.png'
import githubLogo from '../assets/github-logo.png'
import npmLogo from '../assets/npm-logo.png'
import exLogo from '../assets/ex-logo.png'


const AboutMe = () => {

    return(
        <section>
                <div className='about'>
                    <h3 className='about-h3'>These are the technologies I currently handle... <br />
                    If what you are looking for is not here,
                    I am sure I can learn it soon!</h3>
                </div>
                <div className='technologies-primary'>
                    <img src={htmlLogo} alt="html5" />
                    <img src={cssLogo} alt="html5" />
                    <img src={jsLogo} alt="html5" />
                    <img src={reactLogo} alt="html5" />
                    <img src={mysqlLogo} alt="html5" />
                    <img src={nodeLogo} alt="html5" />
                </div>
                <div className='technologies-secondary'>
                    <img src={bsLogo} alt="html5" />
                    <img src={fbLogo} alt="html5" />
                    <img src={gitLogo} alt="html5" />
                    <img src={githubLogo} alt="html5" />
                    <img src={npmLogo} alt="html5" />
                    <img src={exLogo} alt="html5" />
                </div>
        </section>
    )
}

export default AboutMe;