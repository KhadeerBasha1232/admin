import AdminPanel from "./Admin/AdminPanel";
function App() {
  return (
    <div className="App">
      {localStorage.getItem('email')==="khadeer123ab@gmail.com"?<AdminPanel/>:<div>You Are Not authorized to Access The Page</div>}
    </div>
  );
}

export default App;
