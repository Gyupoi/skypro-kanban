import { useState } from "react";
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderNewButton,
  HeaderUser,
} from "./Header.styled";
import PopUser from "../popups/PopUser/PopUser";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <HeaderNav>
            <HeaderNewButton>
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderNewButton>
            <HeaderUser onClick={() => setIsOpen(!isOpen)}>
              Ivan Ivanov
            </HeaderUser>

            {isOpen ? <PopUser /> : null}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
