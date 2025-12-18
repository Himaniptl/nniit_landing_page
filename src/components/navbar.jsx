import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import "./navbar.css";
import Logo from "../NNIIT_Landing_Page_Assets/logo.png";
import DemoModal from "../components/DemoModal";

export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDemo, setOpenDemo] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsCoursesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openDemo || isMobileMenuOpen ? "hidden" : "auto";
  }, [openDemo, isMobileMenuOpen]);

  // Close mobile menu when screen resizes to desktop to avoid weird states
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
       
        <div className="logo">
          <img src={Logo} alt="NNIIT" />
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links desktop-only">
          <div className="dropdown" ref={dropdownRef}>
            <button
              className="dropdown-btn"
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
            >
              Courses <ChevronDown className="icon" />
            </button>

            {isCoursesOpen && (
              <div className="mega-dropdown">
                <div className="mega-section">
                  <h4>Find courses by class</h4>
                  <p>
                    <a href="/courses/class-12-pcm">Class 12 PCM</a> |{" "}
                    <a href="/courses/class-12-pcb">Class 12 PCB</a> |{" "}
                    <a href="/courses/class-11-pcm">Class 11 PCM</a> |{" "}
                    <a href="/courses/class-11-pcb">Class 11 PCB</a> |{" "}
                    <a href="/courses/class-10">Class 10</a> |{" "}
                    <a href="/courses/class-9">Class 9</a> |{" "}
                    <a href="/courses/class-8">Class 8</a> |{" "}
                    <a href="/courses/class-7">Class 7</a> |{" "}
                    <a href="/courses/class-6">Class 6</a>
                  </p>
                </div>

                <div className="mega-section">
                  <h4>Find courses by target</h4>
                  <p>
                    <a href="/courses/repeater-pcm">Repeater PCM</a> |{" "}
                    <a href="/courses/repeater-pcb">Repeater PCB</a> |{" "}
                    <a href="/courses/class-12-pcm">Class 12 PCM</a> |{" "}
                    <a href="/courses/class-12-pcb">Class 12 PCB</a> |{" "}
                    <a href="/courses/class-11-pcm">Class 11 PCM</a> |{" "}
                    <a href="/courses/class-11-pcb">Class 11 PCB</a> |{" "}
                    <a href="/courses/class-10">Class 10</a> |{" "}
                    <a href="/courses/class-9">Class 9</a> |{" "}
                    <a href="/courses/class-8">Class 8</a> |{" "}
                    <a href="/courses/class-7">Class 7</a> |{" "}
                    <a href="/courses/class-6">Class 6</a>
                  </p>
                </div>

                <div className="mega-section">
                  <h4>Boards</h4>
                  <p>
                    <a href="/courses/class-12-pcm">Class 12 PCM</a> |{" "}
                    <a href="/courses/class-12-pcb">Class 12 PCB</a> |{" "}
                    <a href="/courses/class-11-pcm">Class 11 PCM</a> |{" "}
                    <a href="/courses/class-11-pcb">Class 11 PCB</a> |{" "}
                    <a href="/courses/class-10">Class 10</a> |{" "}
                    <a href="/courses/class-9">Class 9</a> |{" "}
                    <a href="/courses/class-8">Class 8</a> |{" "}
                    <a href="/courses/class-7">Class 7</a> |{" "}
                    <a href="/courses/class-6">Class 6</a>
                  </p>
                </div>
              </div>
            )}
          </div>

          <a href="#why-nniit" className="nav-item">
            Why NNIIT
          </a>

          <a href="#contact" className="nav-item contact">
            Contact us <span className="phone">+91-9110763704</span>
          </a>
        </div>

        {/* Desktop Right Buttons */}
        <div className="nav-buttons desktop-only">
          <button
            className="btn demo"
            onClick={() => setOpenDemo(true)}
          >
            Book a free demo
          </button>

          <button className="btn login">Login / Sign up</button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-links">
          <div className="mobile-dropdown">
            <button
              className="mobile-dropdown-btn"
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
            >
              Courses <ChevronDown className={`icon ${isCoursesOpen ? "rotate" : ""}`} />
            </button>
            
            <div className={`mobile-dropdown-content ${isCoursesOpen ? "show" : ""}`}>
                 <div className="mobile-section">
                  <h4>Find courses by class</h4>
                  <div className="mobile-links-grid">
                    <a href="/courses/class-12-pcm">Class 12 PCM</a>
                    <a href="/courses/class-12-pcb">Class 12 PCB</a>
                    <a href="/courses/class-11-pcm">Class 11 PCM</a>
                    <a href="/courses/class-11-pcb">Class 11 PCB</a>
                    <a href="/courses/class-10">Class 10</a>
                    <a href="/courses/class-9">Class 9</a>
                    <a href="/courses/class-8">Class 8</a>
                    <a href="/courses/class-7">Class 7</a>
                    <a href="/courses/class-6">Class 6</a>
                  </div>
                </div>

                <div className="mobile-section">
                  <h4>Find courses by target</h4>
                  <div className="mobile-links-grid">
                    <a href="/courses/repeater-pcm">Repeater PCM</a>
                    <a href="/courses/repeater-pcb">Repeater PCB</a>
                    <a href="/courses/class-12-pcm">Class 12 PCM</a>
                    <a href="/courses/class-12-pcb">Class 12 PCB</a>
                    <a href="/courses/class-11-pcm">Class 11 PCM</a>
                    <a href="/courses/class-11-pcb">Class 11 PCB</a>
                    <a href="/courses/class-10">Class 10</a>
                    <a href="/courses/class-9">Class 9</a>
                    <a href="/courses/class-8">Class 8</a>
                    <a href="/courses/class-7">Class 7</a>
                    <a href="/courses/class-6">Class 6</a>
                  </div>
                </div>

                <div className="mobile-section">
                   <h4>Boards</h4>
                   <div className="mobile-links-grid">
                    <a href="/courses/class-12-pcm">Class 12 PCM</a>
                    <a href="/courses/class-12-pcb">Class 12 PCB</a>
                    <a href="/courses/class-11-pcm">Class 11 PCM</a>
                    <a href="/courses/class-11-pcb">Class 11 PCB</a>
                    <a href="/courses/class-10">Class 10</a>
                    <a href="/courses/class-9">Class 9</a>
                    <a href="/courses/class-8">Class 8</a>
                    <a href="/courses/class-7">Class 7</a>
                    <a href="/courses/class-6">Class 6</a>
                   </div>
                </div>
            </div>
          </div>

          <a href="#why-nniit" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
            Why NNIIT
          </a>

          <a href="#contact" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
            Contact us <span className="phone">+91-9110763704</span>
          </a>

          <div className="mobile-nav-buttons">
            <button
              className="btn demo full-width"
              onClick={() => {
                setOpenDemo(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Book a free demo
            </button>

            <button className="btn login full-width">Login / Sign up</button>
          </div>
        </div>
      </div>

      <DemoModal
        open={openDemo}
        onClose={() => setOpenDemo(false)}
      />
    </nav>
  );
}
