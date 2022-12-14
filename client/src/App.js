import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./screens/Error";
import { Home } from "./screens/Home";
import { Post } from "./screens/Post";
import PostDetails from "./screens/PostDetails";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post" element={<Post />} />
          <Route path="post-details" element={<PostDetails />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

