import OrbisLogo from "../common/OrbisLogo";

type HeaderProps = {
  applicationName: string;
};

const Header = ({ applicationName = "Application" }: HeaderProps) => {

  document.title = `Orbis Education | ${applicationName}`;

  let homeURL: string = "/";

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