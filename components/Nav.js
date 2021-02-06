import Link from 'next/link';
import NavStyles from './styles/NavStyles';
// import LogoImg from '../static/midnight-bakery.jpg';
const Nav = () => {
  return (
    <NavStyles>
      {/* <Link>
        {' '}
        <img src={LogoImg} alt="Bakery Logo" />
      </Link> */}
      <Link href="/items">Items</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/me">Acount</Link>
    </NavStyles>
  );
};
export default Nav;
