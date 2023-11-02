import logo from '../../assets/logocirc.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger-subtle">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img width="100" height="100" src={logo}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'}  to="/category/paintings">Paintings</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'}  to="/category/sculptures">Sculptures</NavLink>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget />
</nav>
  );
}
export default NavBar