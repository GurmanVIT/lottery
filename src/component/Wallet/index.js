import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/img/back.svg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { directMemberList } from "../../redux/directMembersListSlice";
import moment from "moment";
import { clearData } from "../../redux/transactionListSlice";
import MainWallet from "./MainWallet";
import Bottom_bar from "../Home/Bottom/Bottom_bar";

const Wallet = () => {
  <>
    <div className="home_page">
      <MainWallet />
      <Bottom_bar />
    </div>
  </>;
};

export default Wallet;
