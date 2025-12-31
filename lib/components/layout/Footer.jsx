
const Footer = ({ applicationVersion = "0.0.0", copyrightYear = 2025 }) =>
  <footer>&copy; {copyrightYear} Orbis Education. All rights reserved. Version: {applicationVersion}</footer>;

export default Footer;