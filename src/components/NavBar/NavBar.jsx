import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Bufalo</h1>

        <nav>
            <ul>
                <li>Remeras</li>
                <li>Buzos</li>
                <li>Joggins</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar