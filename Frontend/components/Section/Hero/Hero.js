import React, { Fragment } from "react";
import Nav from "../Nav/Nav";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.content}>
        <h2 className={classes.title}>Your instant automated e-KYC client</h2>
        <div>
          <h3 className={classes.title_instruction}>Instructions</h3>
          <p className={classes.instruction}>
            1. Sign In using your google account
          </p>
          <p className={classes.instruction}>
            2. Input your wallet address and generate a token
          </p>
          <p className={classes.instruction}>
            3. Capture DP &#8594; Liveness &#8594; Upload files
          </p>
          <p className={classes.instruction}>4. Submit !</p>
        </div>
      </div>
      <div className={classes.img}>
        <img src={"./images/aadharSample.png"} alt="aadhar Sample" />
      </div>
    </div>
  );
}

export default Hero;
