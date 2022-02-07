import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p> By Md Ariz Umar.
    </footer>
  );
}

export default Footer;
