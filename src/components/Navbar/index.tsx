import { ChatsCircle, House, Scales, UserSquare } from "phosphor-react";
import "./Navbar.scss";

export function Navbar() {
  return (
    <nav className="navContainer">
      <ul>
        <li data-tooltip="Início">
          <a href="#home">
            <House size={48} weight="fill" />
          </a>
        </li>

        <li data-tooltip="Sobre">
          <a href="#about">
            <UserSquare size={48} weight="fill" />
          </a>
        </li>

        <li data-tooltip="Serviços">
          <a href="#services">
            <Scales size={48} weight="fill" />
          </a>
        </li>

        <li data-tooltip="Contato">
          <a href="#footer">
            <ChatsCircle size={48} weight="fill" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
