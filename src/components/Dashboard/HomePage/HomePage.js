import React from "react";
import "./HomePage.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CantaWorld from "../../../assets/canta-globe.png";
import TiventyDigital from "../../../assets/tiventydigital.png";
import Bamboo from "../../../assets/bamboo.png";
import HeliumHealth from "../../../assets/heliumhealth.png";
import Evolvecredit from "../../../assets/evolvecredit.png";
import LeftArrow from "../../../assets/Arrow 1.png";
import RightArrow from "../../../assets/Arrow 2.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";
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

const HomePage = () => {
  return (
    <>
      <Box
        sx={{ flexGrow: 1, display: "flex", flexDirection: "row" }}
        className="hero-section"
      >
        <div className="sub-section">
          <div className="sub-section_1">
            <button className="top-button">For Business</button>
            <h2>
              Pay your <span>suppliers</span>
              <br /> anywhere in the world
            </h2>
            <p>You can pay anyone, anywhere, in any currency. </p>
            <div className="hero-button">
              <div className="googleplay">
                <button className="googleplaybutton">
                  <div className="google-icon">
                    <FaGooglePlay className="googleAppleFonts" />
                  </div>
                  <div className="inner-cont">
                    <span className="sub-content-1">Get it on</span>
                    <span className="sub-content-2">Google Play</span>
                  </div>
                </button>
              </div>
              <div className="appstore">
                <button className="appstorebutton">
                  <div className="apple-icon">
                    <FaApple className="googleAppleFonts" />
                  </div>
                  <div className="inner-cont">
                    <span className="sub-content-1">Download on the</span>
                    <span className="sub-content-2">App Store</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="sub-section_2">
            <img src={CantaWorld} alt="CantaWorld" className="rotating-globe"/>
          </div>
        </div>{" "}
      </Box>

      <Grid
        container
        className="suppliers"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="paysuppliers_1">
          <p>Pay your suppliers anywhere in the world</p>
        </div>
        <div className="paysuppliers_2">
          <p>Pay your suppliers anywhere in the world</p>
        </div>
        <div className="paysuppliers_3">
          <p>Pay your suppliers anywhere in the world</p>
        </div>
        <div className="paysuppliers_4">
          <p>Pay your suppliers anywhere in the world</p>
        </div>
        {/* <Grid
          className="paysuppliers"
          sx={{ display: "flex", justifyContent: "space-between" }}
        ></Grid> */}
        {/* <div className="paysuppliers">

        </div> */}
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
          padding: "1rem",
        }}
      >
        <img src={TiventyDigital} alt="Tiventy Digital" />
        <img src={Bamboo} alt="Bamboo" />
        <img src={HeliumHealth} alt="Helium Health" />
        <img src={Evolvecredit} alt="Evolve Credit" />
      </Grid>

      <section container spacing={2} className="about-canta">
        <div className="sub-about">
          <img src={LeftArrow} alt="Left Arrow" />
          <img src={RightArrow} alt="Right Arrow" />
        </div>
        <div className="about-text">
          <p>
            We make payments online and globally and we know the existing hassle
            <br />
            associated with online payments. This is why we decided no one,
            including
            <br /> you, has to go through all that stress just to make payments
            globally. Canta
            <br /> provides a seamless, secure and speedy payment process that
            ensures you’re
            <br /> never late on payments.{" "}
          </p>
        </div>
        <div className="canta-about-2">
          <div className="item-1">
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
          </div>
          <div className="item-2">
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
          </div>
          <div className="item-3">
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
          </div>
        </div>

        <div className="canta-about-3">
          <h2>
            Trade with anyone <br /> in the world with <br /> zero headache
          </h2>
          <img src={CantaDesign} alt="Canta Design" />
        </div>
      </section>

      <section className="virtual-banking">
        <div className="virtual-banking-text">
          <h1>01</h1>
          <h2>
            Virtual Banking
            <br /> with you in mind
          </h2>
          <p>
            Whether as a business or an individual, you can open
            <br /> and manage your accounts wherever you are. With
            <br /> our virtual account you can conduct transactions in
            <br /> several currencies without incurring exorbitant
            <br />
            currency conversion fees.
          </p>
        </div>
        <div className="virtual-banking-image">
          <img src={VirtualBanking} alt="vurtual banking" />
        </div>
      </section>

      <section className="peer-peer">
        <div className="peer-peer-text">
          <h1>02</h1>
          <h2>
            Peer-to-Peer
            <br /> Remittance{" "}
          </h2>
          <p>
            Whether as a business or an individual, you can open
            <br /> and manage your accounts wherever you are. With our
            <br /> virtual account you can conduct transactions in several
            <br /> currencies without incurring exorbitant
          </p>
        </div>
        <div className="peer-peer-image">
          <img src={PeerToPeer} alt="peer-peer" />
        </div>
      </section>

      <section className="on-off-payment">
        <div className="on-off-payment-text">
          <h1>03</h1>
          <h2>
            On and Offline
            <br /> Payment
          </h2>
          <p>
            We care about your money as much as you do. The internet
            <br /> is not a barrier. Connect with our onground personal
            <br /> to process your transactions seamlessly
          </p>
        </div>
        <div className="on-off-payment-image">
          <img src={OnOffPayment} alt="on-off-payment" />
        </div>
      </section>

      <section className="trade-at-yourplace">
        <div className="trade-at-yourplace-text">
          <h1>04</h1>
          <h2>Trade At your pace</h2>
          <p>
            Not okay with our rate? Buy and sell fx amongst fellow
            <br /> KYC’ed Canta users. Businesses can generate invoices and
            <br /> globally accepted LPO (Licensing purchase order)
          </p>
        </div>
        <div className="trade-at-yourplace-image">
          <img src={TradeAtYourPlace} alt="trade-at-yourplace" />
        </div>
      </section>

      <section className="three-steps">
        <div className="three-steps-wrapper">
          <div className="title-header">
            <h2>
              Get started in three
              <br /> easy steps
            </h2>
          </div>
          <div className="three-steps-images">
            <div className="first-step">
              <img src={FirstStep} alt="first-step" />
              <p>
                Quickly signup and
                <br /> verify details
              </p>
            </div>
            <div className="second-step">
              <img src={SecondStep} alt="second-step" />
              <p>
                Verify your documents to
                <br /> activate account
              </p>
            </div>
            <div className="third-step">
              <img src={ThirdStep} alt="third-step" />
              <p>
                Buy currencies and send to
                <br /> anyone globally
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="longest-section">
        <div className="sub-section-1">
          <h2>Hear what people<br/> are saying about<br/> Canta</h2>
          <img src={FirstFooter} alt="First-footer"/>
        </div>

        <div className="faq">
          <div className="faq-header">
          <h2>Faq</h2>
          </div>
          <div className="accordion">
            <Accordion/>
          </div>
        </div>
        <div className="send-money-globally">
          <img src={SendGlobally} alt="Send money globally"/>
        </div>

        <div className="real-footer">
          <div className="real-footer-1">
            <img src={FooterLogo} alt="Footer logo" />
            <p>Helping africans send<br></br> money globally</p>
          </div>
          <div className="real-footer-2">
            <span>Contact Us</span>
            <p>Contact@canta.io</p>
            <p>+2347032155156</p>
          </div>
          <div className="real-footer-3">
            <span>Socials</span>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>
          <div className="real-footer-4">
            <span>Legal</span>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
