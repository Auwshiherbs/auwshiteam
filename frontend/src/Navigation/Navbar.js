import React from "react";

const Navbar = () => {
  return (
<ul class="nav nav-tabs" id="Navbar">
  <li class="nav-item">
    <a class="nav-link " href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#">About Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="/product">products</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#">Blogs</a>
  </li>
</ul>
  );
};

export default Navbar;