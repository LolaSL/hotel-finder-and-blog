import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

// const getText = (html) => {
//   const doc = new DOMParser().parseFromString(html, "text/html");
//   return doc.body.textContent;
// };

const Place = (props) => {
  const { place } = props;
  return (
    <div>
      <Card className="post border shadow rounded">
        <div className="img p-2">
          <img
            src={post.photo}
            alt={post.title}
            className="post-image rounded shadow border img-fluid img-thumbnail"
          />
          <Card.Body className="content-title font-weight-light  text-center">
            {post?.title}
          </Card.Body>
          {/* <Card.Text className="content-post">
            {getText(post.description)}
          </Card.Text> */}
          <Link className="link" to={`/post/${post.slug}`}>
            <Button className="btn btn-home mb-2">Read More</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Post;