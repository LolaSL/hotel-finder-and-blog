import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";



const Create = () => {
    // const { place } = props;
    const params = useParams();
    const { id } = params;
  const [value, setValue] = useState(id?.title || "");
  const [title, setTitle] = useState(id?.description || "");
  const [file, setFile] = useState();
  const [where_to_stay, setWhereToStay] = useState(id?.where_to_stay || "");
  const navigate = useNavigate();


//   const formData = new FormData();
//   formData.append("name", name.value);
//   for(let i =0; i < files.files.length; i++) {
//           formData.append("files", files.files[i]);
//   }
//   fetch("http://localhost:8090/upload", {
//       method: 'POST',
//       body: formData,
//       headers: {
//         "Content-Type": "multipart/form-data"
//       }
//   })
//       .then((res) => console.log(res))
//       .catch((err) => ("Error occured", err));
// }
const upload = async () => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:8090/api/v1/upload", formData);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};


  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload([]);
 
    try {
      id
        ? await axios.put(`http://localhost:8090/api/v1/places/${id}`,
          {
            title,
            where_to_stay,
            description: value,

            image_url1: file ? imgUrl : "",
          })
        : await axios.post(`http://localhost:8090/api/v1/places`,
          {
            title,
            where_to_stay,
            description: value,

            image_url1: file ? imgUrl : "",
        
            created_at: moment(Date.now()).format("YYYY-MM-DD"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }

  }
  return (
    <Form className="create-place" id="form">
      <div className="content input-group">
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
            onChange={(e) => setFiles(e.target.files)}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <Button type="button" size="sm" className="btn">
              Save Draft
            </Button>
            <Button size="sm" className="btn" type='submit' onClick={handleClick}>
              Publish
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Create;


