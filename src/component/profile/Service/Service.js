import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../../../redux/uploadFileSlice";
import { addQuery, clearData } from "../../../redux/addQuerySlice";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../../utils/Colors";


const Service = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const userId = localStorage.getItem("userId");

  const uploadFileData = useSelector((state) => state.uploadFileReducer.data);
  const submitQueryReducer = useSelector((state) => state.addQueryReducer.data);
  const isLoading = useSelector((state) => state.addQueryReducer.isLoading);

  const setDocumentImage = (pan_image_path) => {
    dispatch(uploadFile(pan_image_path));
  };

  useEffect(() => {
    if (uploadFileData != null) {
      setImageUrl(uploadFileData.Location);
    }
  }, [uploadFileData]);

  useEffect(() => {
    if (submitQueryReducer != null && submitQueryReducer.status === 1) {
      alert("Token submitted");
      dispatch(clearData());
      navigation(-1);
    }
  }, []);

  const submitToken = () => {
    if (subject === "") {
      alert("Please select subject!");
    } else if (description === "") {
      alert("Please select description!");
    } else {
      const payload = {
        id: userId,
        subject: subject,
        description: description,
        media: imageUrl,
      };
      dispatch(addQuery(payload));
    }
  };

  return (
    <>
      <div className="service_customer">
        <div className="header_service">
          <div className="header_flex">
            <div className="back_img" onClick={() => navigation(-1)}>
              <img src={back} alt="back" />
            </div>
            <div className="service_content">
              <h4>Generate Token</h4>
            </div>
          </div>

          <div className="service_section">
            <Form.Select
              aria-label="Default select example"
              onChange={(value) => setSubject(value.target.value)}
            >
              <option>Open this select menu</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
            </Form.Select>
            <div className="text_area">
              <textarea
                rows={10}
                placeholder="Gerenate Token"
                value={description}
                onChange={(val) => setDescription(val.target.value)}
              ></textarea>
            </div>

            <div className="upload_btn">
              <input
                id="doc-front"
                type="file"
                className="temprary-input"
                accept="image/*"
                onChange={(e) => {
                  setDocumentImage(e.target.files[0]);
                }}
              />
              {/* <img src={rectangle} alt="rectangle" />
              <p className="ellipsis">Upload Image</p> */}
            </div>

            <div className="sumnit_btn">
              <button
                type="button"
                className="login_button"
                onClick={() => submitToken()}
              >
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

export default Service;
