import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useLocation, useNavigate } from "react-router-dom";
import moment from "moment";


const Create = () => {
  const state = useLocation().state;

  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.description || "");
  const [file, setFile] = useState(null);
  const [where_to_stay, setWhereToStay] = useState(state?.where_to_stay || "");
  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        "http://localhost:8090/api/v1/upload",
        formData
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`http://localhost:8090/api/v1/places${state.id}`, {
            title,
            where_to_stay,
            description: value,

            image_url: file ? imgUrl : "",
          })
        : await axios.post(`http://localhost:8090/api/v1/places`, {
            title,
            where_to_stay,
            description: value,

            image_url1: file ? imgUrl1 : "",
        
            created_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="create-place">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Where to stay"
          onChange={(e) => setWhereToStay(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          {" "}
          <h1 className="item-title">Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            type="file"
            id="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <Button type="button" size="sm" className="btn">
              Save Draft
            </Button>
            <Button size="sm" className="btn" onClick={handleClick}>
              Publish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;


