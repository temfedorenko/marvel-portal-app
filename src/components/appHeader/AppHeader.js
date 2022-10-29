import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <a href="https://www.freepnglogos.com/pics/marvel-logo" title="Image from freepnglogos.com">
          <img
            className="app__logo"
            src="https://www.freepnglogos.com/uploads/marvel-logo-png/image-marvel-studios-logo-marvel-database-2.png"
            alt="image marvel studios logo"
          />
        </a>
        <div>Information portal</div>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <a href="#">Characters</a>
          </li>
          /
          <li>
            <a href="#">Comics</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
