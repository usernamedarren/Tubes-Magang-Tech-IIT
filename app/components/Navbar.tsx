import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <Image 
          src="/logo-inverted.png"
          alt="Inkubator IT" 
          width={70}
          height={70}
        />
      </Link>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link href="https://www.inkubatorit.com/about">Tentang</Link>
        </li>
        <li className="navbar-item">
          <Link href="https://www.inkubatorit.com/layanan">Layanan</Link>
        </li>
        <li className="navbar-item">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className="navbar-item">
          <Link href="https://www.inkubatorit.com/faq">FAQ</Link>
        </li>
        <li className="navbar-item">
          <Link href="/tracker">Ongoing Project</Link>
        </li>
        <li className="navbar-item ajukan-proyek">
          <Link href="https://www.inkubatorit.com/ajukan-proyek">Ajukan Proyek</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;