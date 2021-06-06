import css from "./Header.module.css";

function Header() {
  return (
    <header className="header">
      <h1 className={css.h1}>The weather</h1>
      <h2 className={css.h2}>Clear. Fresh. Informative.</h2>
    </header>
  );
}

export default Header;
