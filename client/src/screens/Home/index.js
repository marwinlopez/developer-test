import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import apis from "../../api";

export const Home = () => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    apis
      .allPosts()
      .then((resp) => {
        const {status, ...restOfResp} = resp;

        if(status === 200){
          const { data } = restOfResp
          setPost(data.posts)
        }

      });
    
  },[]);

  const handleInput = (e) => {
    const { value } = e.target;
    setSearch(value.toUpperCase())
    console.log(value)
  }

  const postFilter = (post) =>{
    if(search !== ''){
      return post.title.toUpperCase().includes(search) || 
             post.author.toUpperCase().includes(search) || 
             post.details.toUpperCase().includes(search)
    }
    return post
  }

  return (
    <section id="blog">
      <div className="search">
        <input onChange={handleInput} id="search" />
      </div>
      <div className="blog-heading">
        <span>Mis Publicaciones</span>
        <h3>Mi Blog</h3>
      </div>

      <div className="blog-container">
        {post.filter(postFilter).map((p) => {
          return (
            <div key={p._id} className="blog-box">
              {/* <div className='blog-img'>
                            <img src="https://picsum.photos/500" alt='blog'/>
                        </div> */}
              <div className="blog-text">
                <Link to="#" className="blog-title">
                  {p.title}
                </Link>
                <h6>Author: {p.author}</h6>
                <span>{p.creationDate}</span>
                <p>{p.details.length > 60 ? `${p.details.substring(0,59)}...` : p.details}</p>
                <Link 
                  to="post-details"
                  state={{ from: p._id }}
                  >Leer mas</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
