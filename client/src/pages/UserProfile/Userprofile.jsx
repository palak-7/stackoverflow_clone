import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UserProfile.css";
import { postImage } from "../../actions/users";

const Userprofile = ({ slideIn, handleSlideIn }) => {
  const [profileImage, setProfileImage] = useState("");
  const [displaySubmitBtn, setDisplaySubmitBtn] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  // const profilePicture = useSelector((state) => state.imageReducer);

  const [Switch, setSwitch] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setProfileImage(base64);
    console.log("file: " + profileImage);
    setDisplaySubmitBtn(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postImage(id, profileImage));
    console.log("Uploaded");
  };

  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <form onSubmit={handleSubmit}>
                <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                  {profileImage ? (
                    <img
                      style={{ width: "108px", height: "127px" }}
                      src={profileImage}
                      alt="profile Image"
                    ></img>
                  ) : (
                    <>
                      <Avatar
                        backgroundColor="purple"
                        color="white"
                        fontSize="50px"
                        px="40px"
                        py="30px"
                      >
                        {currentProfile?.name.charAt(0).toUpperCase()}
                      </Avatar>
                    </>
                  )}
                </label>
                <input
                  type="file"
                  label="Image"
                  name="myFile"
                  id="file-upload"
                  accept=".jpeg, .png .jpg"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileUpload(e)}
                />
                <button
                  style={{ display: !displaySubmitBtn ? "none" : "block" }}
                  className="edit-profile-btn"
                >
                  Submit
                </button>
              </form>

              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default Userprofile;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
    }

    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
