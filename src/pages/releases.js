import React from "react";
import Layout from "../components/layout";
import SectionDiv from "../components/section-div";

import { Link } from "gatsby";

import {
  Alert,
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Row,
  Toast, 
  ToastBody, 
  ToastHeader

} from "reactstrap"; // gatsby source-filesystem this


// what i'd want is a global var that catches the current latest version url.

// ..
const CurrentWindowsSetup = "/latest-version/latest-version.json";

// ?
const themecolor = "#3D91F9";


 const toaster = () => { 
 alert('* Has been copied to clipboard!')
      // some toaster functionality here


 }


const Releases = (props) => (



  
  <React.Fragment>
    <Layout>
      
    <SectionDiv>
    <h1>Releases</h1>
        <h2 id="Downloads">
          Downloads
          <a href="#Downloads" className="anchor-section float-right">
            #
          </a>
        </h2>
        <hr />

        {/* Weird Div margin styling  */}
        {/* Need to rejustify*/}
        {/* <Row style={{justifyContent: "center",}}> */}
        <Row>
          {" "}
          <div style={{ margin: 10,}}>
            {" "}
            <Card
              style={{ maxWidth: 490, minWidth: 490,  }}
              body
              outline
              color="primary"
              
            >
              {/* <CardImg top width="100%" src={icon} alt="Hookedin placeholder" width="100" height="100" /> */}
              <CardBody>
                <CardTitle>
                  <h2 style={{ color: themecolor }}>Windows Desktop Wallet</h2>
                </CardTitle>
                <CardSubtitle>
                  <p style={{ color: themecolor }}>
                    download the windows binaries!
                  </p>
                </CardSubtitle>
                {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={CurrentWindowsSetup}
                  download
                >
                  <Button color="primary" block>
                    Windows Setup
                  </Button>
                </a>
                <br /> 
                <Button>Windows setup signature</Button>{" "}
                <Button>.exe signature</Button>
              </CardBody>
            </Card>
          </div>
          <div style={{ margin: 10 }}>
            {" "}
            <Card
              style={{ maxWidth: 490, minWidth: 490 }}
              body
              outline
              color="primary"
            >
              {/* <CardImg top width="100%" src={icon} alt="Hookedin placeholder" width="100" height="100" /> */}
              <CardBody>
                <CardTitle>
                  <h2 style={{ color: themecolor }}>Linux Desktop Wallet</h2>
                </CardTitle>
                <CardSubtitle>
                  <p style={{ color: themecolor }}>
                    download the linux binaries!
                  </p>
                </CardSubtitle>
                {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                <Button color="primary" block>
                  Linux Setup
                </Button>
                <br /> 
                <Button>Linux setup signature</Button>
              </CardBody>
            </Card>{" "}
          </div>
        </Row>
        <br />
        <br />
        {/*
 <hr/>

 <h3 id="signatures">Signatures
            <a href="#signatures" className="anchor-section float-right">#</a>
        </h3>
 <a href="/">Windows setup Signatures</a>  <br/>
 <a href="/">Windows moneypot.exe Signatures</a>  <br/>
 <a href="/">Linux Signatures</a>  <br/>
 <br/>
<p> <h3> Don't know what to do with this? See:  ???</h3></p>
 <p> <h3>Source code: </h3></p> */}
      </SectionDiv>


      <SectionDiv>

        
        <h2 id="latest-url">
          Latest Version URL
        <a href="#latest-url" className="anchor-section float-right">
           #
        </a>
        </h2>
        <hr />
        <p>
          This is the latest version URL. When asked for it in the desktop
          wallet loader, please use this as the URL.{" "}
        </p>
          {" "} The most up-to-date{" "}
          <span style={{ fontWeight: "bold" }}>Version URL</span>: <br />
          <br />
         
          <Alert color="info">
            <h2>
            <span id="copytext"  onClick={e => {
            const mark = document.createElement('textarea')
            mark.setAttribute('readonly', 'readonly')
            mark.value = document.getElementById("copytext").innerHTML
            mark.style.position = 'fixed'
            mark.style.top = 0
            mark.style.clip = 'rect(0, 0, 0, 0)'
            document.body.appendChild(mark)
            mark.select()
            document.execCommand('copy')
            document.body.removeChild(mark)
            toaster()
          }}
          >
         https://wallet.moneypot.com/main.08514b5d8eef3b9ddd8f.js#XqOLxPU/AbF3J5F8IaphFFt7H+JsV5jeqn8QvTspYAE=
          </span>
          </h2>{" "}
          </Alert>
        
         <Alert style={{ maxWidth: 1000 }}>
          The version URL has last been changed X days ago! For more information
          please check the{" "}
          <Link to="/changelog/#version-history">Version History</Link>
         </Alert>
         <Alert color="danger" style={{  maxWidth: 600}}>Worried this URL might be malicious? Please check:  ??? </Alert>
      </SectionDiv>



   


      <SectionDiv>
        <h2>Executive Notes</h2>
        <hr />
        <p>
          You might be confused by the terms used above/below, where we talk
          about the{" "}
          <span style={{ fontWeight: "bold" }}>"Moneypot Wallet"</span>, and the{" "}
          <span style={{ fontWeight: "bold" }}>"Desktop Wallet (loader)"</span>,
          and the <span style={{ fontWeight: "bold" }}>"Version URL"</span>
        </p>
        <h2 id="Moneypot Wallet">Moneypot Wallet</h2>
        <p>
          Let's start off easy: The{" "}
          <span style={{ fontWeight: "bold" }}>Moneypot Wallet</span> is simply
          referring to the main wallet, which can be found{" "}
          <a href="https://wallet.moneypot.com">here. </a>{" "}
        </p>
        <h2 id="Desktop Wallet loader">Desktop Wallet loader</h2>
        <p>
          The <span style={{ fontWeight: "bold" }}>Desktop wallet loader</span>{" "}
          is an <a href="https://electronjs.org">Electron</a> implementation of
          the Moneypot Wallet, with integrated tor on Windows <br/><span style={{ fontWeight: "bold" }}>(Please note: on Linux the user himself is responsible to install tor, and for it to be able to bind to 127.0.0.1:9050)</span> <br/> By using
          it you enhance your privacy and security. (e.g you will have
          protection against domain hijacking or otherwise malicious wallet
          versions.) How you may ask?
        </p>
        <ul>
          <li>
            {" "}
            <b>Privacy</b> is enhanced due to Tor being embedded.{" "}
            <span style={{ fontWeight: "bold" }}>Note:</span> Your real IP will
            (by default!) never be shared with any custodian while using the
            application, but malicious servers might try to log it! (Hence why
            you might want to use TOR or a VPN by default.){" "}
          </li>
          <li>
            {" "}
            <b>Security</b> is enhanced due to the{" "}
            <span style={{ fontWeight: "bold" }}>Version URL</span> you need to
            enter before loading the wallet. The{" "}
            <span style={{ fontWeight: "bold" }}>Version URL</span> contains the
            main script of the wallet + an integrity check. Were someone to
            replace the main script of the wallet with a malicious version, the
            app wouldn't load, since the integrity check would fail.
          </li>
        </ul>
        <ul>
          <p>
            The Desktop wallet loader can be downloaded here:{" "}
            <a href="/releases#Downloads">Downloads</a> <br />
            You can find the source code of the Desktop wallet loader here:{" "}
            <a href="https://github.com/moneypot/moneypot-electron-wallet">
              Moneypot Electron Wallet Loader
            </a>{" "}
            <br />
            The signatures used for the various executables can be found here?{" "}
            <a href="/releases/#Downloads">signatures</a> <br />
          </p>
        </ul>
        <h2 id="Version URL">Version URL</h2>

        <p>
          {" "}
          And, at last: The{" "}
          <span style={{ fontWeight: "bold" }}>Version URL</span>: contains
          three essential parts which are necessary for the app to load.{" "}
        </p>
        <ul>
          1. The<a href="https://wallet.moneypot.com"> wallet.moneypot.com</a>{" "}
          domain name. <br />
          2. The main.js script. <br />
          3. a valid SHA256 Hash. <br />
        </ul>
        <p>
          The main.js script is what loads the entire wallet file, and the hash
          is checked against the wallet file to make sure it is valid, and that
          it cannot be altered later on (In the case of a domain hack, or
          malicious developer).
        </p>
        <hr/>
          {" "}
          A valid example of this would be the following URL:
          <Alert color="secondary">
            https://wallet.moneypot.com/main.08514b5d8eef3b9ddd8f.js#XqOLxPU/AbF3J5F8IaphFFt7H+JsV5jeqn8QvTspYAE=
          </Alert>
          Where, if we break it down a bit further: <br />
          <br />
          Would be the domain name:
          <Alert style={{ maxWidth: 700 }} color="info">
            https://wallet.moneypot.com/
          </Alert>
          Would be the main.js source:
          <Alert style={{ maxWidth: 700 }} color="info">
            main.08514b5d8eef3b9ddd8f.js
          </Alert>
          Would be the sha-256 integrity check:
          <Alert style={{ maxWidth: 700 }} color="info">
            XqOLxPU/AbF3J5F8IaphFFt7H+JsV5jeqn8QvTspYAE (=)
          </Alert>
        <br/>
        <hr />
      </SectionDiv>
      <SectionDiv>

      </SectionDiv>
    </Layout>
  </React.Fragment>
);



export default Releases;