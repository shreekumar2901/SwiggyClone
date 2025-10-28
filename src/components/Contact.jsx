const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-hero">
        <span className="contact-badge">Contact Us</span>
        <h1 className="contact-title">We would love to hear from you.</h1>
        <p className="contact-subtitle">
          Questions about your order, partnership opportunities, or product
          feedback&mdash;drop us a message and our support crew will respond
          within 24 hours.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-card contact-details">
          <h2>Reach Out</h2>
          <ul>
            <li>
              <span className="contact-label">Support</span>
              <a href="mailto:dummy@email.com">dummy@email.com</a>
            </li>
            <li>
              <span className="contact-label">Partnerships</span>
              <a href="mailto:dummy@email.com">dummy@email.com</a>
            </li>
            <li>
              <span className="contact-label">Phone</span>
              <a href="tel:+1234567890">+91 12345 67890</a>
            </li>
            <li>
              <span className="contact-label">Hours</span>
              <span>Mon - Sun, 8:00 AM - 11:00 PM IST</span>
            </li>
          </ul>
        </div>

        <form className="contact-card contact-form">
          <h2>Send a Message</h2>
          <label>
            Name
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Topic
            <select defaultValue="">
              <option value="" disabled>
                Choose a topic
              </option>
              <option value="order">Order related</option>
              <option value="partner">Partner enquiry</option>
              <option value="feedback">Feedback</option>
            </select>
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="Tell us a bit more"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
