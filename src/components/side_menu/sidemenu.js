import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { FaClipboardList, FaHistory, FaSignOutAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { GiChefToque } from "react-icons/gi";
import handleOrders from "../../services/handle_orders";

import Button from "../UI/button/button";
import Img from "../UI/image/img";

import "./sideMenu.scss";

function SideMenu() {
  const buttonHistory = useHistory();
  const location = useLocation();
  const [active, setActive] = useState();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname])

  const navigateTo = (e, path) => {
    e.preventDefault();
    buttonHistory.push(path);
  }

  const iconStyles = { color: "var(--color-yellow)" };

  const logout = (e) => {
    localStorage.clear();
    navigateTo(e, "/");
  };

  const {
    doneOrderList
  } = handleOrders();

  return (
    <section className="sideMenu-container">
      <Img
        className="Logo"
        width="100px"
        height="100px"
        src="/Logo.png"
        alt="Astro Burger Logo"
      />
      <div className="menuButtons-container">
        <Button
          variant="secondary"
          onClick={(e) => navigateTo(e, "/salao")}
          icon={<AiFillEdit />}
          children="novo pedido"
          value="/salao"
          active={active}
        ></Button>
        <Button
          variant="secondary"
          onClick={(e) => navigateTo(e, "/done")}
          id="pedidos-prontos"
          icon={<FaClipboardList />}
          children="pedido pronto"
          value="/done"
          active={active}
        >
          <label
            className="notificacao-position label-header"
            htmlFor="pedidos-prontos"
          >
            PEDIDOS PRONTOS
            {doneOrderList.length > 0 ? (
              <label
                htmlFor="pedidos-prontos"
                className="notificacao-pedidos-prontos"
              >
                {doneOrderList.length}
              </label>
            ) : null}
          </label>
        </Button>
        <Button
          variant="secondary"
          onClick={(e) => navigateTo(e, "/kitchen")}
          span="material-icons"
          icon={<GiChefToque />}
          children="cozinha"
          value="/kitchen"
          active={active}
        ></Button>
        <Button
          variant="secondary"
          onClick={(e) => navigateTo(e, "/history")}
          span="material-icons"
          icon={<FaHistory />}
          children="histórico"
          value="/history"
          active={active}
        ></Button>
      </div>

      <Button
        variant="signout-btn"
        span="signout-btnContainer"
        onClick={logout}
        icon={<FaSignOutAlt size={20} style={iconStyles} />}
      ></Button>
    </section>
  );
}

export default SideMenu;
