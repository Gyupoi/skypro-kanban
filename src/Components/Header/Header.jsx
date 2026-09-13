import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderNewButton,
  HeaderUser,
} from "./Header.styled";
import PopUser from "../popups/PopUser/PopUser";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

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
              <Link
                to="/add-card"
                className="header__btn-main-new"
                id="btnMainNew"
              >
                Создать новую задачу
              </Link>
            </HeaderNewButton>

            <HeaderUser onClick={() => setIsOpen(!isOpen)}>
              {user?.name || "Пользователь"}
            </HeaderUser>

            {isOpen ? <PopUser /> : null}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
