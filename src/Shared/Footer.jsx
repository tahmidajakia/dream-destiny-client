const Footer = () => {
  return (
    <footer className="footer mt-10 bg-base-200 text-base-content p-10 border border-t-8 border-primaryColor mt-14">
      <aside>
        <h2 className="text-4xl font-bold">DreamyDestiny</h2>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Rooms</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <a className="link link-hover">Github</a>
        <a className="link link-hover">Discord</a>
        
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
