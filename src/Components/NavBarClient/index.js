import { AiFillShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import styles from "./style.module.css";
import React from "react";
import { FiHeart  } from "react-icons/fi";

export default class NavBarCommercant extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className={styles.navbaritems1}>
        <h1 className={styles.logo1}>logo</h1>
        <div className={styles.menu_icons1} onClick={this.handleClick}>
          <i className={this.state.clicked ? `${styles.fas1} fa-times` : `${styles.fas1} fa-bars`}></i>
        </div>
        <ul className={this.state.clicked ? `${styles.nav_menu1} ${styles.active1}` : `${styles.nav_menu1}`}>
        <li>
            <a href="/favoris" className={styles.link1}>
            <FiHeart  style={{fill : "grey" }} className="icon"></FiHeart>
            </a>
          </li>
          <li>
            <a href="/commandes" className={styles.link1}>
              <AiFillShopping className={styles.icon1} />Orders
            </a>
          </li>
          <li>
            <a href="/profile" className={styles.link1}>
              <CgProfile className={styles.icon1} />Profile
            </a>
          </li>
          <li>
            <a href="/products" className={styles.link1}>
              <AiFillHome className={styles.icon1} />Home
            </a>
          </li>
          <li>
            <button className="btn btn-primary">Sign out</button>
          </li>
        </ul>
      </div>
    );
  }
}
