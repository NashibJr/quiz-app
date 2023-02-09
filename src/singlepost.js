import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Singlepost = () => {
      const { id } = useParams();
      const posts = useSelector(state => state.posts.posts);
      const post = posts.find(post => post.id.toString() === id);
      console.log(post);
      return (
            <>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
            </>
      );
}

export default Singlepost;