import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMapMarkedAlt,
  faSignInAlt,
  faUserPlus,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import classnames from "classnames";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
function IndexNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/"
            title="Best Saudi Tourism Company"
          >
            Trip To Go
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink data-placement="bottom" href="/" title="Go Home">
                <i>
                  <FontAwesomeIcon size="lg" icon={faHome} />{" "}
                </i>
                <p className="d-lg-none">HOME</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/trips"
                title="Explore Our Trips"
              >
                <i>
                  <FontAwesomeIcon size="lg" icon={faMapMarkedAlt} />{" "}
                </i>
                <p className="d-lg-none">TRIPS</p>
              </NavLink>
            </NavItem>

            {props.isLogin ? (
              <>
                <NavItem>
                  <NavLink
                    data-placement="bottom"
                    href="/profile"
                    title="Your Profile"
                  >
                    <i>
                      {" "}
                      <FontAwesomeIcon size="lg" icon={faUserCircle} />{" "}
                    </i>
                    <p className="d-lg-none">PROFILE</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button
                    onClick={() => {
                      props.isLogout();
                    }}
                    className="btn-round"
                    color="danger"
                  >
                    LOG OUT
                  </Button>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink href="/signin">
                    <FontAwesomeIcon size="lg" icon={faSignInAlt} /> Sign In
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">
                    <FontAwesomeIcon size="lg" icon={faUserPlus} /> Sign Up
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
export default IndexNavbar;
