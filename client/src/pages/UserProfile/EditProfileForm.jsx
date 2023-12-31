import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserProfile.css";
import { updateProfile } from "../../actions/users";

const EditProfileForm = ({ currentUser, setSwitch }) => {
  const [name, setName] = useState(currentUser?.result?.name);
  const [about, setAbout] = useState(currentUser?.result?.about);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags[0] === "" || tags.length === 0) {
      alert("Update tags field");
    } else {
      dispatch(updateProfile(currentUser?.result?._id, { name, about, tags }));
    }
    setSwitch(false);
  };

  const theme = useSelector((state) => state.themeReducer);
  return (
    <div>
      <h1 className="edit-profile-title">Edit Your Profile</h1>
      <h2 className="edit-profile-title-2">Public Information</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>Display Name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              backgroundColor: !theme && "#313030",
              color: !theme && "#fff",
              borderRadius: "4px",
            }}
          />
        </label>
        <label htmlFor="about">
          <h3>About Me</h3>
          <textarea
            id="about"
            cols="30"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            style={{
              backgroundColor: !theme && "#313030",
              color: !theme && "#fff",
              borderRadius: "4px",
            }}
          ></textarea>
        </label>
        <label htmlFor="tags">
          <h3>Watched Tags</h3>
          <p>Add Tags seperated by 1 space.</p>
          <input
            type="text"
            id="tags"
            onChange={(e) => setTags(e.target.value.split(" "))}
            style={{
              backgroundColor: !theme && "#313030",
              color: !theme && "#fff",
              borderRadius: "4px",
            }}
          />
        </label>
        <br />
        <input type="submit" value="Save Profile" className="user-submit-btn" />

        <button
          type="button"
          className="user-cancel-btn"
          onClick={() => setSwitch(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
