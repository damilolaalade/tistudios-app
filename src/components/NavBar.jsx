import { useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined,MenuOutlined,CloseOutlined } from "@ant-design/icons";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const menu = (
    <Menu style={{ background: "black" }}>
      <Menu.Item key="0" style={{ color: "white", background: "black" }}>
        <a href="https://www.antgroup.com">Portraits</a>
      </Menu.Item>
      <Menu.Item key="1" style={{ color: "white", background: "black" }}>
        <a href="https://www.aliyun.com">Wedding Photography</a>
      </Menu.Item>
      <Menu.Item key="2" style={{ color: "white", background: "black" }}>
        Product Photography
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="header">
      <div className="container nav-section">
        <div className="brand-navBtn">
          <span className="brand-name">TOLOBADUN IMAGERY</span>
          <p className="brand-name-location">Lagos,Nigeria.</p>
          <span
            className="navBtn"
            onClick={() => {
              setToggleNav((prevState) => !prevState);
            }}
          >
            {!toggleNav ? <MenuOutlined /> : <CloseOutlined />}
          </span>
        </div>

        <nav className={toggleNav ? "top-nav showNav" : "top-nav"}>
          <ul className="main-ul">
            <li className="main-list">
              <a href="">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li className="main-list">
              <a href="">
                <Link to="/about-us">About</Link>
              </a>
            </li>

            <li className="dropdown main-list">
              <Dropdown overlay={menu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  Services <DownOutlined />
                </a>
              </Dropdown>
            </li>

            <li className="main-list">
              <a href="#portraits">Testimonials</a>
            </li>
            <li className="main-list">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
