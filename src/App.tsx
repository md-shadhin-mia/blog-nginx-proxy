import { useState } from 'react'
import BlogPostList from "./blogPost"
import "bootstrap/dist/css/bootstrap.css"

import "bootstrap-icons/font/bootstrap-icons.css"
function App() {
  return (
    <div className="App" style={{width:"60%", margin:"0% 20% 0% 20%"}}>
      <BlogPostList />
    </div>
  )
}

export default App
