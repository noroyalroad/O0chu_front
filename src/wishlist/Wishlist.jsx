import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../config/api";
import { useSelector } from "react-redux";
import Genresitemlist from "../genres/Genresitemlist";
import Header from "../nav/Header";
import ScrollToTopButton from "../scrolltop/ScrolltoptoButton";
import Footer from "../footer/Footer";
import Auth from "../hoc/auth";

const Wishlist = () => {
  const [wishlist, setwishlist] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.userData) {
      axios
        .get(`${api}/api/wish/wishlist/?user_email=${user.userData.email}`)
        .then((res) => {
          setwishlist(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  return (
    <div>
      <Header />
      <Genresitemlist list={wishlist} />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Auth(Wishlist, true);
