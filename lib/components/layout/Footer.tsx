type FooterProps = {
  applicationVersion: string;
  copyrightYear: string;
};

const Footer = ({ applicationVersion = "0.0.0", copyrightYear = "2026" }: FooterProps) => (
  <footer>
    &copy; {copyrightYear} Orbis Education. All rights reserved. Version: {applicationVersion}
  </footer>
);

export default Footer;
