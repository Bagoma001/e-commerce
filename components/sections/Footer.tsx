function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <h1>LOGO</h1>
      </div>

      <div className="footer-flex">
        <div className="About">
          <h3>About</h3>
          <p>Our company</p>
          <p>Our Founders</p>
          <p>Blog</p>
        </div>

        <div className="information-flex">
          <h4>Information</h4>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Return</p>
        </div>

        <div className="support">
          <h3>Support</h3>
          <p>Contact Us</p>
          <p>Help</p>
          <p>FAQ</p>
          <p>Checkout</p>
        </div>
      </div>

      <div className="last-footer">
        <div>
          <p>Copyright@2024 Furnify. All rights reserved</p>
        </div>

        <div>
          <p>Social media networks</p>
        </div>

        <div>
          <p>Images of payment methods </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
