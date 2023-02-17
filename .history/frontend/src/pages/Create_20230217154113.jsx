// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form'
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import moment from "moment";



// const Create = () => {
//     // const { place } = props;
//     const params = useParams();
//     const { id } = params;
//   const [value, setValue] = useState(id?.title || "");
//   const [title, setTitle] = useState(id?.description || "");
//   const [file, setFile] = useState();
//   const [where_to_stay, setWhereToStay] = useState(id?.where_to_stay || "");
//   const navigate = useNavigate();


// const upload = async () => {
//   try {
//     const formData = new FormData();
//     formData.append("file", file);
//     const res = await axios.post("http://localhost:8090/api/v1/upload", formData);
//     return res.data;
//   } catch (err) {
//     console.log(err);
//   }
// };


//   const handleClick = async (e) => {
//     e.preventDefault();
//     const imgUrl = await upload([]);
 
//     try {
//       // id
//       //   ? await axios.put(`http://localhost:8090/api/v1/places/${id}`,
//       //     {
//       //       title,
//       //       where_to_stay,
//       //       description: value,

//       //       image_url1: file ? imgUrl : "",
//       //     })
//       //   :
//         await axios.post(`http://localhost:8090/api/v1/places`,
//           {
//             title,
//             where_to_stay,
//             description: value,

//             image_url1: file ? imgUrl : "",
        
//             created_at: moment(Date.now()).format("YYYY-MM-DD"),
//           });
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }

//   }
//   return (
//     <Form className="create-place" id="form">
//       <div className="content input-group">
//         <input
//           type="text"
//           placeholder="Title"
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Where to stay"
//           onChange={(e) => setWhereToStay(e.target.value)}
//         />
//         <div className="editorContainer">
//           <ReactQuill
//             className="editor"
//             theme="snow"
//             value={value}
//             onChange={setValue}
//           />
//         </div>
//       </div>
//       <div className="menu">
//         <div className="item">
//           {" "}
//           <h1 className="item-title">Publish</h1>
//           <span>
//             <b>Status: </b> Draft
//           </span>
//           <span>
//             <b>Visibility: </b> Public
//           </span>
//           <input
//             type="file"
//             id="file"
//             name="file"
//             onChange={(e) => setFile(e.target.file[0])}
//           />
//           <label className="file" htmlFor="file">
//             Upload Image
//           </label>
//           <div className="buttons">
//             <Button type="button" size="sm" className="btn">
//               Save Draft
//             </Button>
//             <Button size="sm" className="btn" type='submit' onClick={handleClick}>
//               Publish
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Form>
//   );
// };

// export default Create;

 import React, { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Store } from "../Store";
import { getError } from "../utils";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet-async";
import Rings from "../components/Rings.jsx";
import Message from "../components/Message.jsx";
import Button from "react-bootstrap/Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "UPDATE_REQUEST":
      return { ...state, loadingUpdate: true };
    case "UPDATE_SUCCESS":
      return { ...state, loadingUpdate: false };
    case "UPDATE_ERROR":
      return { ...state, loadingUpdate: false };
    case "UPLOAD_REQUEST":
      return { ...state, loadingUpload: true, errorUpload: "" };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        loadingUpload: false,
        errorUpload: "",
      };
    case "UPLOAD_FAIL":
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      return state;
  }
};
export default function Create() {
  const navigate = useNavigate();
  const params = useParams(); // /place/:id
  const { id: placeId } = params;

  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: "",
    });

  const [title, setTitle] = useState("");
  const [where_to_stay, setWhereToStay] = useState("");
  const [description, setDescription] = useState("");
  const [image_url1, setImageUrl1] = useState("");
  const [image_url2, setImageUrl2] = useState("");
  const [image_url3, setImageUrl3] = useState("");
  const [images, setImages] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(
          `http://localhost:8090/api/v1/places/${placeId}`
        );
        setTitle(data.title);
        setWhereToStay(data.where_to_stay);
        setDescription(data.description);
        setImageUrl1(data.image_url1);
        setImageUrl2(data.image_url2);
        setImageUrl3(data.image_url3);

        dispatch({ type: "FETCH_SUCCESS" });
      } catch (err) {
        dispatch({
          type: "FETCH_ERROR",
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [placeId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "UPDATE_REQUEST" });
      await axios.put(
        `http://localhost:8090/api/v1/places`,
        {
          id: placeId,
          title,
          where_to_stay,
          description,
          image_url1,
          image_url2,
          image_url3,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      );
      dispatch({
        type: "UPDATE_SUCCESS",
      });
      toast.success("Place updated successfully");
      navigate("/places");
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: "UPDATE_ERROR" });
    }
  };
  const uploadFileHandler = async (e, forImages) => {
    const file = e.target.file[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    try {
      dispatch({ type: "UPLOAD_REQUEST" });
      const { data } = await axios.post(
        "http://localhost:8090/api/v1/upload",
        bodyFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${userInfo.access_token}`,
          },
        }
      );
      dispatch({ type: "UPLOAD_SUCCESS" });

      if (forImages) {
        setImages([...images, data.secure_url]);
      } else {
        setImageUrl1(data.secure_url);
      }
      toast.success("Image uploaded successfully. click Update to apply it");
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: "UPLOAD_ERROR", payload: getError(err) });
    }
  };
  const deleteFileHandler = async (fileName, f) => {
    console.log(fileName, f);
    console.log(images);
    console.log(images.filter((x) => x !== fileName));
    setImages(images.filter((x) => x !== fileName));
    toast.success("Image removed successfully. click Update to apply it");
  };
  return (
    <Container className="small-container">
      <Helmet>
        <title>Edit Place</title>
      </Helmet>
      <h1>Edit Place </h1>

      {loading ? (
        <Rings></Rings>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Where to stay</Form.Label>
            <Form.Control
              value={where_to_stay}
              onChange={(e) => setWhereToStay(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Image url 1</Form.Label>
            <Form.Control
              value={image_url1}
              onChange={(e) => setImageUrl1(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image1">
            <Form.Label>Image url 2</Form.Label>
            <Form.Control
              value={image_url2}
              onChange={(e) => setImageUrl2(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image2">
            <Form.Label>Image url 2</Form.Label>
            <Form.Control
              value={image_url2}
              onChange={(e) => setImageUrl2(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image3">
            <Form.Label>Image url 2</Form.Label>
            <Form.Control
              value={image_url3}
              onChange={(e) => setImageUrl3(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imageFile">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" onChange={uploadFileHandler} />
            {loadingUpload && <rings></rings>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="additionalImage">
            <Form.Label>Additional Images</Form.Label>
            {images.length === 0 && <Message>No image</Message>}
            <ListGroup variant="flush">
              {images.map((x) => (
                <ListGroup.Item key={x}>
                  {x}
                  <Button variant="light" onClick={() => deleteFileHandler(x)}>
                    <i className="fa fa-times-circle"></i>
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="additionalImageFile">
            <Form.Label>Upload Aditional Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => uploadFileHandler(e, true)}
            />
            {loadingUpload && <Rings></Rings>}
          </Form.Group>

          <div className="mb-3">
            <Button disabled={loadingUpdate} type="submit">
              Update
            </Button>
            {loadingUpdate && <Rings></Rings>}
          </div>
        </Form>
      )}
    </Container>
  );
}



