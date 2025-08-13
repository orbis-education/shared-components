import OrbisLogo from "./OrbisLogo";

const Header = ({ applicationName = "Application" }) => {

  document.title = `Orbis Education | ${applicationName}`;

  let homeURL = "/";

  if (window.location.href.includes("intranet.orbiseducation.com") === true) {

    homeURL = "./";

  };


  return (
    <header>

      <a href={homeURL} className="orbis-logo-link">
        <OrbisLogo />
      </a>

      <h1>{applicationName}</h1>

    </header>
  );
};

export default Header;