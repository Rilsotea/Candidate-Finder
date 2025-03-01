  // TODO: Add necessary code to display the navigation bar and link between the pages
  import { Link } from 'react-router-dom';

  const Nav = () => {
    return (
      <nav className="nav">
        <ul>
          <li className="nav-item">
            <Link to="/" className="nav-link">Search Candidates</Link>
          </li>
          <li className="nav-item">
            <Link to="/saved" className="nav-link">Saved Candidates</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Nav;
  
