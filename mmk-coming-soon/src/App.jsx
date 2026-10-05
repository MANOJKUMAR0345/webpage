import { useState } from "react";
import DynamicIsland from "./components/DynamicIsland";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <DynamicIsland
        page={page}
        setPage={setPage}
      />

      {page === "home" ? <Home /> : <About />}
    </>
  );
}
