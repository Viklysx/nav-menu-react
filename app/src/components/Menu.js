import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DriftPage from "./DriftPage";
import TimeAttackPage from "./TimeAttackPage";
import ForzaPage from "./ForzaPage";

export default function Menu() {
const activeClass = "menu__item-active";
  return (
    <>
      <Router>
        <nav class="menu">
          <NavLink exact className="menu__item" activeClassName={activeClass} to="/">
            Главная
          </NavLink>
          <NavLink className="menu__item" activeClassName={activeClass} to="/drift">
            Дрифт-такси
          </NavLink>
          <NavLink className="menu__item" activeClassName={activeClass} to="/timeattack">
            Time Attack
          </NavLink>
          <NavLink className="menu__item" activeClassName={activeClass} to="/forza">
            Forza Karting
          </NavLink>
        </nav>
        <div className="page">
            <Route path="/" exact component={HomePage} />
            <Route path="/drift" component={DriftPage} />
            <Route path="/timeattack" component={TimeAttackPage} />
            <Route path="/forza" component={ForzaPage} />
        </div>
      </Router>
    </>
  );
}
