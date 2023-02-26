import { FC, useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Modal from "../Modal";

const NotUser: FC = () => {
  return (
    <Modal
      modalText="You must be logged in to use this feature, auto navigate to Sign In Page after"
      navigatePage="/customeraccount"
      modalBtn="Login now"
    />
  );
};

export default NotUser;
