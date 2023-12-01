import HeaderBook from "./components/shared/Header";
import Route from "./components/shared/Route";
import SideBar from "./components/shared/SideBar";
import BookStore from "./pages/BookStore";
import UserAlbum from "./pages/userAlbum";

function App() {
  return (
    <div className="min-h-[100vh]">
      {/* <SideBar /> */}

      <HeaderBook />
      <Route path="/">
        <UserAlbum />
      </Route>
      <Route path="/bookStore">
        <BookStore />
      </Route>
    </div>
  );
}

export default App;
