import React from 'react';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import './Login.css';
import Footer from '../components/Footer';

const Login = () => (
  <div className="login__container">
    <NavBar />
    <div className="login__logo">
      <Logo />
    </div>
    <section>
      <div className="login__image login__track-stuff" />
      <div className="login__section-text login__section-text-right">
        <div>Track stuff.</div>
        <div className="login__section-description">
          TRKR will help you realize that you're either really good or really bad at tracking stuff.
        </div>
      </div>
    </section>
    <section>
      <div className="login__section-text login__section-text-left">
        <div>Or... don't track anything.</div>
        <div className="login__section-description">You're a grown person. Do whatever you want.</div>
      </div>
      <div className="login__image login__do-what-you-want" />
    </section>
    <section>
      <div className="login__image login__pen-and-paper" />
      <div className="login__section-text login__section-text-right">
        <div>To be honest...</div>
        <div className="login__section-description">Pen and paper would work just as well.</div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Login;
