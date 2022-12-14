import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import apis from "../../api";
import "./posts.css";

export const Post = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState({
    titleError: null,
    authorError: null,
    detailsError: null,
  });

  const [state, setState] = useState({
    title: null,
    author: null,
    details: null,
    createdAt: new Date().toLocaleDateString(),
  });

  const handleInput = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    setIsError({
      ...isError,
      [`${id}Error`]: null,
    });
  };

  const validate = (item) =>{
   if (item == null || item === ""){
    return "Es Requerido"
   }else{
    return null
   }
  }

  const postInsert = async (e) => {
    e.preventDefault();

    const { title, author, details, createdAt } = state;

      setIsError({
        titleError: validate(title),
        authorError: validate(author),
        detailsError: validate(details),
      });

    if (title && author && details) {
      const payload = {  title, author, details, createdAt }
      await apis.createPosts(payload)
      setState({
        title: null,
        author: null,
        details: null,
        createdAt: new Date().toLocaleDateString(),
      });
      navigate('/');
    }
  };

  return (
    <section id="posts">
      <div className="posts-heading">
        <span>Nueva Publicación</span>
        <h3>Mi Blog</h3>
      </div>

      <div className="posts-container">
        <Form noValidate onSubmit={postInsert}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título de la Publicación"
              onChange={handleInput}
            />
            <Form.Text className="danger">{isError.titleError}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="author">
            <Form.Label>Autor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Autor de la Publicación"
              onChange={handleInput}
            />
            <Form.Text className="danger">{isError.authorError}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="creationDate">
            <Form.Label>Fecha Publicación </Form.Label>
            <p>{state.createdAt}</p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="details">
            <Form.Label>Contenido</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Contenido de la Publicación"
              onChange={handleInput}
              style={{ height: "200px" }}
            />
            <Form.Text className="danger">{isError.detailsError}</Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </div>
    </section>
  );
};
