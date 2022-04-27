import Directory from "./components/directory/directory.component";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/Authentication.component";
const Shop = () => {
  return (
    <div>
      <h2>I am the shop</h2>
    </div>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
}
export default App;
