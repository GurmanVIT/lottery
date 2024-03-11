import React, { useEffect, useState } from "react";
import Home_page from "../../component/Home/Home_page";
import Winner from "./Winner/Index";
import Earning from "./Winner/Earning";
import Information from "./Information/Index";
import { randomMembersList } from "../../redux/randomMembersListSlice";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../redux/profileSlice";

const Index = () => {
  const dispatch = useDispatch();

  const randomMembersListReducer = useSelector(
    (state) => state.randomMembersListReducer.data
  );
  const profileResponse = useSelector((state) => state.profileReducer.data);
  const [randomMember, setRandomMember] = useState(null);

  useEffect(() => {
    dispatch(profile());
    dispatch(randomMembersList());
  }, []);

  useEffect(() => {
    console.log("profileResponse ===> ", profileResponse);
    if (profileResponse != null && profileResponse.status === 1) {
      localStorage.setItem("sponsorId", profileResponse.data.userId);
    }
  }, [profileResponse]);

  useEffect(() => {
    if (
      randomMembersListReducer != null &&
      randomMembersListReducer.success === 1
    ) {
      setRandomMember(randomMembersListReducer.data);
    }
  }, [randomMembersListReducer]);

  return (
    <main>
      <div className="home_page">
        <Home_page />
        <Information randomMember={randomMember} />
        <Earning randomMember={randomMember} />
        <Winner randomMember={randomMember} />
      </div>
    </main>
  );
};

export default Index;
