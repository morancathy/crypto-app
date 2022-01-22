import {Link} from "react-router-dom";
/*this function built into it that doesnt reload the pages.
Basically does the history.(push) to rerender to render next page w/out refrehing
Only use <a> if linking to another page.
link tags are linking between your applicaion  */

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Crypto Prices</div>
      </Link>
      <Link to="/currencies">
        <div>Currencies</div>
      </Link>
      <Link to="/place">
        <div>Place</div>
      </Link>
    </div>
  )
}

export default Nav;
