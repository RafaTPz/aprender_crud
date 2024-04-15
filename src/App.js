import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Feed } from "./pages/Feed";
import { Router } from "./Router";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </>
  );
}

export default App;