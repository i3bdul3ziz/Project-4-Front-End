import React from "react";
import "assets/css/sign.css";

function SectionLogin() {
  return (
    <div className="body1">
      <div id="wrapper">
        <div id="left">
          <div id="signin">
            <br /> <br />
            <br />
            <br />
            <br />
            <h2>SIGN IN</h2>
            <br />
            <br />
            <form>
              <div>
                <label>Email</label>
                <input type="text" class="text-input" />
              </div>
              <div>
                <label>Password</label>
                <input type="password" class="text-input" />
              </div>
              <button type="submit" class="primary-btn">
                Sign In
              </button>
            </form>
            <div class="links">
              <a href="/forgotpass">Forgot Password</a>
            </div>
            <div class="or">
              <hr class="bar" />
              <span>OR</span>
              <hr class="bar" />
            </div>
            <a href="#" class="secondary-btn">
              Create an account
            </a>
          </div>
        </div>
        <div id="right">
          <div id="showcase" className="section-dark">
            <div class="showcase-content">
              <h1 class="showcase-text">
                Let's explore <strong>together</strong>
              </h1>
              <a href="/" class="secondary-btn">
                Check our trips out!{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionLogin;
