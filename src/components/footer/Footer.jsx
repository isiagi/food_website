import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__content">
          <div>
          <h2>SmartFit</h2> 
          <p>We are leading outfit website.</p>
          <p>All Rights Reserved @ 2022</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Cart</p>
          </div>
          <div>
            <h3>Catergories</h3>
            <p>Sneakers</p>
            <p>Boots</p>
            <p>Gentle ware</p>
            <p>Ladies shoes</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>+256</p>
            <p>smartfit@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
