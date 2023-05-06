import Heading from "./Heading";

const MailUs = () => (
  <section className="mail-container">
    <Heading pageName="Mail Us" />
    <div className="mail">
      <h2 className="heading3 page-heading">Compose</h2>

      <form className="mail-us">
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <input type="text" placeholder="Subject" />
        <textarea name="message" placeholder="Compose your message" id="" cols={30} rows={30}></textarea>

        <div>
          <button type="submit" className="btn heading3">Send</button>
        </div>
      </form>
    </div>
  </section>
);

export default MailUs;
