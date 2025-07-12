import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Divider,
  Typography,
} from "@mui/material";
import { getAuth, clearAuth } from "../utils/auth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [auth, setAuth] = useState(getAuth());

  const isAuthenticated = !!auth?.token;
  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Partners", href: "#partners" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "/faq", isRoute: true },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleAvatarClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const renderMenu = () => (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleMenuClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{ className: "mt-2 w-64" }}
    >
      <div className="flex items-center space-x-3 p-3 border-b border-gray-200">
        <Avatar>
          {isAuthenticated
            ? auth?.fullname?.[0] || auth?.userEmail?.[0] || "U"
            : "G"}
        </Avatar>
        <div>
          <Typography variant="subtitle1" className="text-foreground font-semibold">
            {isAuthenticated ? auth?.fullname || auth?.userEmail : "Guest"}
          </Typography>
          <Typography variant="body2" className="text-muted-foreground">
            {isAuthenticated ? auth?.userEmail : "Not signed in"}
          </Typography>
        </div>
      </div>
      {isAuthenticated ? (
        <>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/profile" className="w-full">View your channel</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/history" className="w-full">History</Link>
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={() => {
              clearAuth();
              setAuth(null);
              handleMenuClose();
              window.location.href = "/";
            }}
          >
            Sign out
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/signin" className="w-full">Sign In</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/signup" className="w-full">Sign Up</Link>
          </MenuItem>
        </>
      )}
    </Menu>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container-modern">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-xl flex items-center justify-center shadow-lg border-2 border-white">
              <span className="text-primary font-bold text-lg lg:text-xl tracking-wider drop-shadow-sm">
                R
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-gradient">Rwafi</span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Logistics Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 focus-ring rounded-md px-3 py-2"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 focus-ring rounded-md px-3 py-2"
                >
                  {item.name}
                </button>
              )
            )}
          </nav>

          {/* Avatar Menu (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <IconButton onClick={handleAvatarClick}>
              <Avatar>
                {isAuthenticated
                  ? auth?.fullname?.[0] || auth?.userEmail?.[0] || "U"
                  : "G"}
              </Avatar>
            </IconButton>
            {renderMenu()}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden btn btn-ghost p-2 focus-ring"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="glass rounded-xl mt-4 p-6 shadow-xl border">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) =>
                  item.isRoute ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors duration-200 focus-ring rounded-lg px-4 py-3 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors duration-200 focus-ring rounded-lg px-4 py-3 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  )
                )}
              </nav>
              <div className="flex justify-center mt-6 pt-6 border-t border-gray-200">
                <IconButton onClick={handleAvatarClick}>
                  <Avatar>
                    {isAuthenticated
                      ? auth?.fullname?.[0] || auth?.userEmail?.[0] || "U"
                      : "G"}
                  </Avatar>
                </IconButton>
                {renderMenu()}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
