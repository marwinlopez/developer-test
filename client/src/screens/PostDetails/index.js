import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import apis from "../../api";

import './postDetails.css'

function PostDetails() {
  const location = useLocation();
  const { from } = location.state;
  const [state, setState] = useState();
  useEffect(() => {
    apis.getPostById(from).then((resp) => {
      const { data } = resp;
      console.log(data);
      setState(data.post);
    });
  }, [from]);

  return (
    <section id="posts-details">
      <div className="posts-details-heading">
        <span>Publicación</span>
        <h3>Mi Blog</h3>
      </div>

      <div className="posts-details-container">
        {state ? (
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label className="title">Título</Form.Label>
              <p>{state.title}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="author">
              <Form.Label className="title">Autor</Form.Label>
              <p>{state.author}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="creationDate">
              <Form.Label className="title">Fecha Publicación </Form.Label>
              <p>{state.createdAt}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="details">
              <Form.Label className="title">Contenido</Form.Label>
              <p>{state.details}</p>
            </Form.Group>
          </Form>
        ) : null}
      </div>
    </section>
  );
}

export default PostDetails;
