export default function DynamicIsland({ page, setPage }) {
  return (
    <nav className="island">
      <button
        className={page === "home" ? "active" : ""}
        onClick={() => setPage("home")}
      >
        Home
      </button>

      <span className="camera">
        <span className={`lens ${page === "home" ? "lens-home" : "lens-about"}`} />
      </span>

      <button
        className={page === "about" ? "active" : ""}
        onClick={() => setPage("about")}
      >
        About
      </button>
    </nav>
  );
}
