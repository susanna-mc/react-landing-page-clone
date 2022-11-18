/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import bearOpening from './images/bearOpening.mp4';
import { ReactComponent as Forbes } from './images/forbes.svg';
// import { ReactComponent as LifeHacker } from './images/lifeHacker.png';
import { ReactComponent as Logo } from './images/logo.svg';
//import { ReactComponent as Mac } from './images/mac@2x.png';
import { ReactComponent as TechRadar } from './images/techRadar.svg';
import { ReactComponent as Verge } from './images/theVerge.svg';
import { ReactComponent as VB } from './images/vb.svg';
import { ReactComponent as TNW } from './images/ynw.svg';

const mainStyles = css`
  background-color: white;
  color: #555;
  -webkit-font-smoothing: antialiased;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  text-decoration: none;

  a {
    text-decoration: none;
    color: #6e6e6e;
  }
`;

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  padding-left: 65px;
  padding-top: 15px;
  padding-bottom: 17px;
  position: fixed;
  z-index: 1;
  background-color: #fff;
  a:hover {
    color: #83b84d;
  }
`;

const navStyles = css`
  color: #6e6e6e;
  text-decoration: none;
  line-height: 1.6em;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
  font-style: normal;
  -webkit-text-decoration: none;
  -webkit-font-smoothing: antialiased;
  margin-top: 15px;
  margin-left: 415px;

  a {
    margin-right: 20px;
    text-decoration: none;
  }
  a:hover {
    color: #83b84d;
  }

  a:visited {
    color: #6e6e6e;
    text-decoration: none;
  }
`;

const bodyStyles = css`
  font-family: Montserrat, Trebuchet, sans-serif;
`;

const headerButtonStyles = css`
  background-color: #83b84d;
  border: 1px solid #83b84d;
  border-radius: 30px;
  display: inline-block;
  padding: 10px 22px;
  text-align: center;
  margin-right: 65px;
  margin-top: 10px;
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-family: Montserrat, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 1px;
  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #fff;
    background-color: #74a345;
  }
  a:visited {
    color: #fff;
    text-decoration: none;
  }
`;

const h1Section = css`
  padding: 90px 20px;
  display: block;
  box-sizing: border-box;
  height: 750px;
  width: 700px;
`;

const h1ButtonStyles = css`
  background-color: #83b84d;
  border: 1px solid #83b84d;
  color: #fff;
  font-size: 21px;
  font-family: Montserrat, Helvetica, sans-serif;
  border-radius: 30px;
  display: inline-block;
  padding: 18px 36px;
  text-align: center;
  font-weight: 500;
  text-decoration: none;
  font-style: normal;
  letter-spacing: -0.2px;
  line-height: 29.26px;
`;

const h1SectionDiv = css`
  margin-left: 200px;
  font-style: normal;
  margin-top: 150px;
`;
const h1Styles = css`
  font-weight: 600px;
  font-size: 45px;
  font-family: Montserrat, Trebuchet, sans-serif;
  font-style: normal;
  color: #555;
  letter-spacing: normal;
  margin-top: 0;
  margin-bottom: 0.3em;
  line-height: 1.2em;
`;
const h1Subtitle = css`
  font-size: 20px;
`;

const videoStyles = css`
  height: 550px;
  position: absolute;
  bottom: 4.7%;
  right: 15%;
`;

const mediaLogoSection = css`
  display: block;
  background-color: #f6f6f6;
  height: 142.63;
  padding-top: 29px;
  padding-bottom: 29px;
  text-align: center;
`;
const section2Styles = css`
  min-height: 700px;

  max-height: 750px;
  text-align: center;
  background-color: #435239;
  color: #fff;
  padding: 0px;
`;

export default function App() {
  return (
    <div css={mainStyles}>
      <header css={headerStyles}>
        <Logo />

        <nav css={navStyles}>
          <a href="#abc">Plans</a>
          <a href="#abc">What is a VPN?</a>
          <a href="#abc">Apps</a>
          <a href="#abc">Help</a>
          <a href="#abc">My Account</a>
        </nav>
        <div css={headerButtonStyles}>
          <a href="#abc"> Get TunnelBear</a>
        </div>
      </header>
      <body css={bodyStyles}>
        <section css={h1Section}>
          <div css={h1SectionDiv}>
            <h1 css={h1Styles}>A more secure way to browse the web</h1>
            <div css={h1Subtitle}>
              TunnelBear encrypts your internet connection to keep your online
              activity private on any network.
            </div>
            <p css={h1ButtonStyles}>Get TunnelBear now</p>
          </div>
          <video css={videoStyles} autoPlay="autoplay" muted="muted">
            <track
              src="myvideo_en.vtt"
              kind="captions"
              srcLang="en"
              label="English"
            />
            <source src={bearOpening} type="video/mp4" />
          </video>
        </section>
        <section css={mediaLogoSection}>
          <p>
            <Forbes />
            <Verge />
            LifeHacker
            <TNW />
            <VB />
            <TechRadar />
          </p>
        </section>
        <section css={section2Styles}>
          <img src="./images/mac@2x.png" alt="Mac with sample VPN" />
          <h2>Easy-to-use apps for all your devices</h2>
          <p>
            Just open the TunnelBear app, select a country, and flip the switch.
            Once you're connected, TunnelBear will work quietly in the
            background to keep your data secure.
          </p>
          <strong> Mac Windows iOS Android </strong>
          <br />
          <p css={h1ButtonStyles}>Get TunnelBear now</p>
        </section>

        <h2>Why millions of people are using TunnelBear</h2>
        <h3>Stop password and data theft</h3>
        <p>
          Hackers can steal passwords and data over insecure public WiFi.
          TunnelBear blocks them to keep you secure.
        </p>
        <h3>Access global content</h3>
        <p>
          Some content is only available in certain regions. TunnelBear changes
          your virtual location so you can see it anywhere.
        </p>
        <h3>Bypass local censorship</h3>
        <p>
          Some governments block popular websites and apps. TunnelBear unblocks
          them by changing your virtual location.
        </p>
        <h3>Protect your online privacy</h3>
        <p>
          Network owners and internet providers can see everything you do
          online. With TunnelBear on, they can't see a thing.
        </p>
        <h3>Prevent IP-based tracking</h3>
        <p>
          Ad services use your IP address to track your behaviour across sites.
          TunnelBear stops them by assigning you a new IP.
        </p>
        <h3>And way, way more</h3>
        <p>
          Play on new game servers, prevent speed throttling, and unblock apps
          and websites on school and work networks.
        </p>
      </body>
    </div>
  );
}
