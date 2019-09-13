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
          I'm afraid of the world. Strange games they would play then. We must have died
          alone, a long long time ago. No death for the perfect men.
        </div>
      </div>
    </section>
    <section>
      <div className="login__section-text login__section-text-left">Or not. Do whatever you want.</div>
      <div className="login__image login__do-what-you-want">else</div>
    </section>
    <section>
      <div className="login__image login__pen-and-paper" />
      <div className="login__section-text login__section-text-right">Pen and paper would work just as well to be honest.</div>
    </section>
    <Footer />
  </div>
);

export default Login;
