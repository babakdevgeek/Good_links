import "./App.css";
import Filters from "./components/Filters";
import Navbar from "./Navbar";

function App() {
  return (
    <main className="md:flex bg-black text-foregrand min-h-screen">
      <Navbar />
      <article className="md:grow">
        <Filters />
      </article>
    </main>
  );
}

export default App;
