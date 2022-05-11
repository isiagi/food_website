import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__content">
          <div>
          <h2>Happy Foods</h2> 
          <p>@ 2022</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Tray</p>
          </div>
          <div>
            <h3>Catergories</h3>
            <p>Breakfast</p>
            <p>Lunch</p>
            <p>Dinner</p>
            <p>Desert</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>+256</p>
            <p>@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
