import { useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./NavBar.css";
import { FaAlignJustify, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const menu = (
    <Menu style={{ background: "black" }}>
      <Menu.Item key="0" style={{ color: "white", background:"black" }}>
        <a href="https://www.antgroup.com">Portraits</a>
      </Menu.Item>
      <Menu.Item key="1" style={{ color: "white",  background:"black"}}>
        <a href="https://www.aliyun.com">Wedding Photography</a>
      </Menu.Item>
      <Menu.Item key="2" style={{ color: "white",  background:"black" }}>
        Product Photography
      </Menu.Item>
    </Menu>
  );

  return (
    <header class="header">
      <div class="container nav-section">
        <div class="brand-navBtn">
          <span class="brand-name">TOLOBADUN IMAGERY</span>
          <p class="brand-name-location">Lagos,Nigeria.</p>
          <span
            class="navBtn"
            onClick={() => {
              setToggleNav((prevState) => !prevState);
            }}
          >
            {!toggleNav ? <FaAlignJustify /> : <FaTimes />}
          </span>
        </div>

        <nav class={toggleNav ? "top-nav showNav" : "top-nav"}>
          <ul class="main-ul">
            <li class="main-list">
              <a href="index.html">Home</a>
            </li>
            <li class="main-list">
              <a href="#overview">About</a>
            </li>

            <li class="dropdown main-list">
              <Dropdown overlay={menu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  Services <DownOutlined />
                </a>
              </Dropdown>
            </li>

            <li class="main-list">
              <a href="#portraits">Testimonials</a>
            </li>
            <li class="main-list">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
