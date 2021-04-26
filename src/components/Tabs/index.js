import { useState } from "react";
import "./TabsElements.css";
import imageBanner from "../../images/image4.jpg";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          ENZO GIORDANO
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          MATTHEW BURKE
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          EDWIN RENTA
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="content-wrapper">
            <div className="banner">
              <img className="bannerImg" src={imageBanner} alt="" />
            </div>
            <div className="info-box">
              <h2>ENZO GIORDANO</h2>
              <hr />
              <p>
                Enzo Giordano, co-founder of Left Hook, began his boxing career
                in 1989 in North London. At Light Middleweight, Enzo competed in
                28 amateur fights before
              </p>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="content-wrapper">
            <div className="banner">
              <img className="bannerImg" src={imageBanner} alt="" />
            </div>
            <div className="info-box">
              <h2>MATTHEW BURKE</h2>
              <hr />
              <p>
                Matt is a REPs qualified Fitness Instructor, a REPs qualified
                Personal Trainer and an ABA qualified boxing coach. He has been
                involved in boxing for over 25 years! Matt boxed as an amateur
                and a professional before he turned to coaching
              </p>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="content-wrapper">
            <div className="banner">
              <img className="bannerImg" src={imageBanner} alt="" />
            </div>
            <div className="info-box">
              <h2>EDWIN RENTA</h2>
              <hr />
              <p>
                Edwin De La Renta currently competes as an amateur boxer. As a
                coach he has been part of the Left Hook team since Autumn 2014.
                He initially took up boxing at the age of 15 but put it down to
                pursue the dramatic arts in his late teens
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
