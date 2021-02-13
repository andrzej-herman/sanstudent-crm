import React from "react";
import { Link } from "react-router-dom";
import logodarkImg from "../assets/images/logo-dark.png";
import logosmImg from "../assets/images/logo-sm.png";
import logolightImg from "../assets/images/logo-light.png";
// import ProfileMenu from "./ProfileMenu";

const TopBar = () => {
  const toggleFullscreen = () => {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logosmImg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logodarkImg} alt="" height="17" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logosmImg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logolightImg} alt="" height="18" />
                </span>
              </Link>
            </div>

            {/* <button
              type="button"
              className="btn btn-sm mr-2 font-size-24 d-lg-none header-item waves-effect waves-light"
              onClick={toggleMenu}
            >
              <i className="mdi mdi-menu"></i>
            </button> */}
          </div>

          <div className="d-flex">
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Szukaj studenta ..."
                />
                <span className="fa fa-search"></span>
              </div>
            </form>

            <div className="dropdown d-none d-lg-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                onClick={toggleFullscreen}
              >
                <i className="mdi mdi-fullscreen"></i>
              </button>
            </div>

            {/* <ProfileMenu /> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default TopBar;
