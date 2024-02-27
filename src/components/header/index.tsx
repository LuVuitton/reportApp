import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to={"/"}>Create Report</Link> <br />
        <Link to={"/reports"}>Report List</Link>
      </nav>
    </header>
  );
}
