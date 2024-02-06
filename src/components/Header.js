import React from "react";

export default function Header({ darkMode, setDarkMode }) {
  const toggledarkMode = () => {
    setDarkMode(!darkMode);
  };
  const getTodaysDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="container-fluid no-padding">
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-black' : 'bg-lightgrey'}`}>
          <div className="collapse navbar-collapse text-white" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link active ${darkMode ? 'text-white' : 'text-black'}`} aria-current="page" href="#">To-Do List</a>
              </li>
              <li className="nav-item">
                <span className={`nav-link ${darkMode ? 'text-white' : 'text-black'}`}>{getTodaysDate()}</span>
              </li>
              <li className="nav-item px-5">
                <button className="btn btn-primary" onClick={toggledarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
