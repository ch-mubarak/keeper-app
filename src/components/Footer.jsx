import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      
      <p>Made with ♥ by Mubarak </p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
