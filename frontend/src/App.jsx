import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";

function App() {
  return (
    <div>
      <h1>DevConnect AI</h1>

      <Signup />
      <hr />

      <Login />
      <hr />

      <CreatePost />
      <hr />

      <Feed />
    </div>
  );
}

export default App;