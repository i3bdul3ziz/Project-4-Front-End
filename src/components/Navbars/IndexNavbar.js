import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"
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
import logo from "../../assets/img/loogo.png";

function IndexNavbar(props) {

  let url = props.user ?`/userprofile/${props.user._id}`:`/companyprofile/${props.company && props.company._id}`
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  console.log(props.user)
  React.useEffect(() => {
    window.scrollTo(800,800)
    
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 49 ||
        document.body.scrollTop > 49
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 50 ||
        document.body.scrollTop < 50
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
            <img width={150} hieght={100} src={logo} />
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
              <NavLink data-placement="bottom" href="/home" title="Go Home">
                <i>
                  <FontAwesomeIcon size="lg" icon={faHome} />{" "}
                </i>
                <p className="d-lg-none">HOME</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                onClick={() => window.scrollTo(1000,0)}
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
                    href={url}
                    title="Your Profile"
                  >
                    <i>
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
