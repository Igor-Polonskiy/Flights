
import React, { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([{ id: 1, title: 'Javascript', body: 'Description' },
  { id: 2, title: 'Javascript2', body: 'Description' },
  { id: 3, title: 'Javascript3', body: 'Description' },
  { id: 4, title: 'Javascript4', body: 'Description' },
  { id: 5, title: 'Javascript5', body: 'Description' }])

  const [title, setTitle] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value = {title}
          onChange = {e => setTitle(e.target.value)}
          type='text'
          placeholder='название поста'
        />
        <MyInput type='text' placeholder='описание поста' />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='список про js' />
    </div>
  );
}

export default App;
