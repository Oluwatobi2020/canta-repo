import React from "react";
import "./HomePage.css";
import Grid from "@mui/material/Grid";
// import CantaWorld from "../../../assets/canta-globe.png";
import TiventyDigital from "../../../assets/tiventydigital.png";
import Bamboo from "../../../assets/bamboo.png";
// import Styled from "styled-components";
import HeliumHealth from "../../../assets/heliumhealth.png";
import Evolvecredit from "../../../assets/evolvecredit.png";
import LeftArrow from "../../../assets/Arrow 1.png";
import RightArrow from "../../../assets/Arrow 2.png";
import { IoFlash } from "react-icons/io5";
import { BsSignpost2Fill } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import CantaDesign from "../../../assets/canta-design.png";
import VirtualBanking from "../../../assets/VirtualBanking.png";
import PeerToPeer from "../../../assets/peer-peer.png";
import OnOffPayment from "../../../assets/on-off-payment.png";
import TradeAtYourPlace from "../../../assets/trade-at-yourplace.png";
import FirstStep from "../../../assets/first-image.png";
import SecondStep from "../../../assets/second-image.png";
import ThirdStep from "../../../assets/third-image.png";
import FirstFooter from "../../../assets/footer-1.png";
import Accordion from "../../Dashboard/Utils/Accordion.js";
import SendGlobally from "../../../assets/send-globally.png";
import FooterLogo from "../../../assets/footer-logo.png";
import AppStore from "../../../assets/AppStore.png";
import GoogleStore from "../../../assets/GooglePlay.png";
import CantaGlobe from "../../../assets/canta-globe.png";

const HomePage = () => {
  return (
    <div className="Landing-page">
      <Grid container spacing={2} className="hero-section">
        <Grid item xs={12} className="tobi-trick">
          <img src={FooterLogo} alt="Canta logo" />
        </Grid>
        <Grid item xs={12} container spacing={2} className="sub-section">
          <Grid item xs={12} md={6} className="sub-section_1">
            <button className="top-button">For Business</button>
            <div className="special-text">
              <h2>
              Pay your <span>suppliers</span> anywhere in the world
              </h2>{" "}

            </div>
            <p>You can pay anyone, anywhere, in any currency. </p>
            <Grid item xs={12} container spacing={3} className="hero-button">
              <Grid item xs={3} className="googleplaybutton">
                <img src={GoogleStore} alt="Google store" />
              </Grid>
              <Grid item xs={3} className="appstorebutton">
                <img src={AppStore} alt="App store" />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="sub-section_2">
            <img src={CantaGlobe} alt="CantaWorld" className="rotating-globe" />
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="suppliers">
        <Grid item xs={12} className="paysuppliers_1" id="#scroll-container">
          <p id="scroll-text">Pay your suppliers anywhere in the world</p>
        </Grid>
      </Grid>

      <Grid
        container
        // spacing={2}
        className="section-main"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // alignItems: "center",
          padding: "1.5rem",
        }}
      >
        <img src={TiventyDigital} alt="Tiventy Digital" />
        <img src={Bamboo} alt="Bamboo" />
        <img src={HeliumHealth} alt="Helium Health" />
        <img src={Evolvecredit} alt="Evolve Credit" />
      </Grid>

      <Grid container spacing={2} className="about-canta">
        <Grid item xs={12} className="sub-about">
          <img src={LeftArrow} alt="Left Arrow" />
          <img src={RightArrow} alt="Right Arrow" />
        </Grid>
        <Grid item xs={12} className="about-text">
          <div className="about-text-2">
            <p>
              We make payments online and globally and we know the existing
              hassle associated with online payments. This is why we decided no
              one, including you, has to go through all that stress just to make
              payments globally. Canta provides a seamless, secure and speedy
              payment process that ensures you’re never late on payments.{" "}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} container spacing={2} className="canta-about-2">
          <Grid item xs={3} className="item-1">
            <div className="icon-and-text">
              <div className="icon-container">
                <div className="icon-1">
                  <IoFlash className="flash-icon" />
                </div>
              </div>
              <div className="icon-text">
                <p>
                  Fund with your local currency and payout
                  <br /> in 30+ currencies and be rest assured,
                  <br /> your funds are held securely.
                </p>
              </div>
            </div>
            <div className="vl"></div>
          </Grid>
          <Grid item xs={3} className="item-2">
            <div className="icon-and-text">
              <div className="icon-container">
                <div className="icon">
                  <BsSignpost2Fill className="sign-post-icon" />
                </div>
              </div>
              <div className="icon-text">
                <p>
                  Not okay with our rate? Buy and sell fx
                  <br /> amongst fellow KYC’ed Canta users.
                  <br /> Businesses can generate invoices and
                  <br /> globally accepted LPO (Licensing purchase
                  <br /> order)
                </p>
              </div>
            </div>
            <div className="vl"></div>
          </Grid>
          <Grid item xs={3} className="item-3">
            <div className="icon-and-text">
              <div className="icon-container">
                <div className="icon">
                  <BiUserPin className="user-icon" />
                </div>
              </div>
              <div className="icon-text">
                <p>
                  We have customer personnel that would
                  <br /> attend to you in real-time even though
                  <br /> you’re offline
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} className="canta-about-3">
          <h2>
            Trade with anyone <br /> in the world with <br /> zero headache
          </h2>
          <img src={CantaDesign} alt="Canta Design" />
        </Grid>
      </Grid>

      <Grid container spacing={2} className="virtual-banking">
        <Grid item xs={6} className="virtual-banking-text">
          <h1>01</h1>
          <h2>
            Virtual Banking
            <br /> with you in mind
          </h2>
          <div className="virtual-text">
          <p>
            Whether as a business or an individual, you can open
            <br /> and manage your accounts wherever you are. With
            <br /> our virtual account you can conduct transactions in
            <br /> several currencies without incurring exorbitant
            <br />
            currency conversion fees.
          </p>
          </div>
        </Grid>
        <Grid item xs={6} className="virtual-banking-image">
          <img src={VirtualBanking} alt="vurtual banking" />
        </Grid>
      </Grid>

      <Grid container spacing={2} className="peer-peer">
        <Grid item xs={6} className="peer-peer-text">
          <h1>02</h1>
          <h2>
            Peer-to-Peer
            <br /> Remittance{" "}
          </h2>
          <div className="peer-text">
            <p>
              Whether as a business or an individual, you can open
              <br /> and manage your accounts wherever you are. With our
              <br /> virtual account you can conduct transactions in several
              <br /> currencies without incurring exorbitant
            </p>
          </div>
        </Grid>
        <Grid item xs={6} className="peer-peer-image">
          <img src={PeerToPeer} alt="peer-peer" />
        </Grid>
      </Grid>

      <Grid container spacing={2} className="on-off-payment">
        <Grid item xs={6} className="on-off-payment-text">
          <h1>03</h1>
          <h2>
            On and Offline
            <br /> Payment
          </h2>
          <div className="one-off-text">
            <p>
              We care about your money as much as you do. The internet
              is not a barrier. Connect with our onground personal
              to process your transactions seamlessly
            </p>
          </div>
        </Grid>
        <Grid item xs={6} className="on-off-payment-image">
          <img src={OnOffPayment} alt="on-off-payment" />
        </Grid>
      </Grid>

      <Grid container spacing={2} className="trade-at-yourplace">
        <Grid item xs={6} className="trade-at-yourplace-text">
          <h1>04</h1>
          <h2>Trade At your pace</h2>
          <div className="trade-text">
            <p>
              Not okay with our rate? Buy and sell fx amongst fellow
              KYC’ed Canta users. Businesses can generate invoices and
              globally accepted LPO (Licensing purchase order)
            </p>
          </div>
        </Grid>
        <Grid item xs={6} className="trade-at-yourplace-image">
          <img src={TradeAtYourPlace} alt="trade-at-yourplace" />
        </Grid>
      </Grid>

      <Grid container spacing={2} className="three-steps">
        <Grid item container xs={12} className="three-steps-wrapper">
          <Grid item xs={12} className="title-header">
            <h2>
              Get started in three
              <br /> easy steps
            </h2>
          </Grid>
          <Grid item xs={12} container className="three-steps-images">
            <Grid item xs={4} className="first-step">
              <img src={FirstStep} alt="first-step" />
              <p>
                Quickly signup and
                <br /> verify details
              </p>
            </Grid>
            <Grid item xs={4} className="second-step">
              <img src={SecondStep} alt="second-step" />
              <p>
                Verify your documents to
                <br /> activate account
              </p>
            </Grid>
            <Grid item xs={4} className="third-step">
              <img src={ThirdStep} alt="third-step" />
              <p>
                Buy currencies and send to
                <br /> anyone globally
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="longest-section">
        <Grid item xs={12} className="sub-section-1">
          <div className="footer-head">
            <h2>
              Hear what people
              are saying about
              Canta
            </h2>

          </div>
          <img src={FirstFooter} alt="First-footer" />
        </Grid>
        <Grid item xs={12} container spacing={2} className="faq">
          <Grid item xs={12} className="faq-header">
            <h2>Faq</h2>
          </Grid>
          <Grid item xs={12} className="accordion">
            <div className="for-accordion">
              <Accordion />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} className="send-money-globally">
          <img src={SendGlobally} alt="Send money globally" />
        </Grid>
        <Grid item xs={12} className="real-footer" container spacing={10}>
          <Grid item xs={3} className="real-footer-1">
            <img src={FooterLogo} alt="Footer logo" />
            <p>
              Helping africans send<br></br> money globally
            </p>
          </Grid>
          <Grid item xs={3} className="real-footer-2">
            <span>Contact Us</span>
            <p>Contact@canta.io</p>
            <p>+2347032155156</p>
          </Grid>
          <Grid item xs={3} className="real-footer-3">
            <span>Socials</span>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </Grid>
          <Grid item xs={3} className="real-footer-4">
            <span>Legal</span>
            <p>Privacy Policy</p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
