import React, { useState, useEffect } from 'react';



interface Props {
    post: Post;
  }
  function BlogPost(props: Props) {
    const [loveCount, setLoveCount] = useState(0);
    const [hahaCount, setHahaCount] = useState(0);
    const [saidCount, setSaidCount] = useState(0);
  
    function handleLoveClick() {
      setLoveCount(loveCount + 1);
    }
  
    function handleHahaClick() {
      setHahaCount(hahaCount + 1);
    }
  
    function handleSaidClick() {
      setSaidCount(saidCount + 1);
    }
  
    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex mb-3">
            <img
              src={`https://i.pravatar.cc/40?u=${props.post.user.email}`}
              alt={props.post.user.name}
              className="rounded-circle me-3"
              style={{width:"64px", height:"64px"}}
            />
            <div>
              <h5 className="card-title">{props.post.title}</h5>
              <p className="card-text text-muted">By {props.post.user.name}</p>
            </div>
          </div>
          <p className="card-text">{props.post.body}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-link" onClick={handleLoveClick}>
            <i className="bi bi-heart"></i> Love {loveCount}
          </button>
          <button className="btn btn-link" onClick={handleHahaClick}>
            <i className="bi bi-emoji-laughing"></i> Haha {hahaCount}
          </button>
          <button className="btn btn-link" onClick={handleSaidClick}>
            <i className="bi bi-chat-right-dots"></i> Said {saidCount}
          </button>
        </div>
      </div>
    );
  }

interface Post {
  id: number;
  title: string;
  body: string;
  user: User;
  userId:string;
}

interface User {
  name: string;
  email:string;
}



function BlogPostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/posts?_limit=5')
      .then(response => response.json())
      .then(data => {
        const postsWithUsers = data.map((post: Post) => {
          return fetch(`/users/${post.userId}`)
            .then(response => response.json())
            .then((user: User) => {
              return {
                ...post,
                user: user
              };
            });
        });
        Promise.all(postsWithUsers).then(posts => setPosts(posts));
      });
  }, []);

  return (
    <div className="container mt-5">
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogPostList;
