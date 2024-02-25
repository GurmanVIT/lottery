import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { clearData, submitFeedbackApi } from "../../../redux/feedbackSlice";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../../utils/Colors";


const Feedback = () => {
  const navigation = useNavigate();

  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  const feedbackReducer = useSelector((state) => state.submitFeedbackReducer.data);
  const isLoading = useSelector((state) => state.submitFeedbackReducer.isLoading);

  const sendFeedback = () => {
    if (description === "") {
      alert("Please enter any description!");
    } else {
      const payload = { description: description, media: "" };
      dispatch(submitFeedbackApi(payload));
    }
  };

  useEffect(() => {
    if (feedbackReducer != null && feedbackReducer.status === 1) {
      alert("Feedback sent!");
      dispatch(clearData());
      navigation(-1);
    }
  }, [feedbackReducer]);

  return (
    <>
      <div className="feedback">
        <div className="header_feedback">
          <div className="header_flex">
            <div className="back_img" onClick={() => navigation(-1)}>
              <img src={back} alt="back" />
            </div>
            <div className="feedback_content">
              <h4>Feedback</h4>
            </div>
          </div>

          <div className="feedback_section">
            <div className="text_area">
              <textarea
                rows={13}
                placeholder="Enter Description"
                value={description}
                onChange={(value) => setDescription(value.target.value)}
              ></textarea>
            </div>
            <div className="reward">
              <h5>Send helpful feedback</h5>
              <h5>Chance to win Mystery Rewards</h5>
            </div>
            <div className="sumnit_btn">
              <button className="login_button" onClick={() => sendFeedback()}>
                {isLoading ? (
                  <ClipLoader color={myColors.txtWhite} />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
