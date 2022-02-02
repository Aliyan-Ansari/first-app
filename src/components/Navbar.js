import React from 'react';
// import Text from './TextBox';
import PropTypes from 'prop-types';

function Navbar(props){


//   const [search, setSearch] = useState("");
//   const SearchData = () =>{
//     let searchedData = Text.includes(search);
//     if(searchedData){
//       console.log("Your Searched Data is included in the givven text");
//     }
//   }
//   const handleChange = (e) =>{
//       setSearch(e.target.value);
//   }

    return(
<>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="./index.html">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./index.html">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./index.html">{props.about}</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search"   placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="button">Search</button>
      </form>
    </div>
    <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>
</nav>
</>
);

}


Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: "Default Text"
}

export default Navbar ;