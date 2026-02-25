import OrbisLogo from "../common/OrbisLogo";

type HeaderProps = {
  applicationName: string;
};

const Header = ({ applicationName = "Application" }: HeaderProps) => {
  const homeURL: string = window.location.href.includes("intranet.orbiseducation.com") ? "./" : "/";

  // eslint-disable-next-line react-hooks/immutability
  document.title = `Orbis Education | ${applicationName}`;

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
