import Heading from "./Heading";
import "../styles/help.scss";
import { MdEmail, MdKeyboardArrowRight } from "react-icons/md";
import { FaRobot } from "react-icons/fa";

const Help = () => {
  return (
    <>
      <Heading pageName="Help" />
      <section className="help">
        <h2 className="heading2 page-heading">How can we help you?</h2>

        <div className="help-content">
          <div className="help-items">
            <div className="help-text">
              <div className="icons">
                <MdEmail />
              </div>

              <div>
                <h3 className="heading3">Mail Us</h3>
                <p className="p">For inquiries and complaints please send us a mail to help@klosanow.com</p>
              </div>
            </div>
            <div className="icons">
              <MdKeyboardArrowRight />
            </div>
          </div>

          <div className="help-items">
            <div className="help-text">
              <div className="icons">
                <FaRobot />
              </div>

              <div>
                <h3 className="heading3">Chat with Bot</h3>
                <p className="p">Resolve issue quicker by chatting with bot.</p>
              </div>
            </div>
            <div className="icons">
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Help;
