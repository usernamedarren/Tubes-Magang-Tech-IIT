'use client';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="item">
        <div className="logo-section">
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="logo-pic-container">
              <Image
                className="logo-pic"
                src="/logo.png"
                alt="Inkubator IT"
                width={90}
                height={90}
              />
            </div>
            <div style={{ marginLeft: '10px' }}>
              <div className="logo-title">Inkubator IT</div>
              <div className="logo-desc">Your IT-Based Solution</div>
            </div>
          </div>
          <div className="social-link">
            <p className="social-text">Sosial Media Kami</p>
            <Link href="https://www.instagram.com/inkubatorit/" target="_blank">
              <Image
                src="/instagram-logo.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://www.linkedin.com/company/inkubatorit" target="_blank">
              <Image
                src="/linkedin-logo.svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://line.me/ti/p/~@coq4661e" target="_blank">
              <Image
                src="/line-logo.svg"
                alt="Line"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://wa.me/6285280570637" target="_blank">
              <Image
                src="/whatsapp-logo.svg"
                alt="WhatsApp"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
        <div className="contact">
          <p className="hubungi">Hubungi Kami</p>
          <p className="alamat">
            Sekretariat HMIF Gedung Benny Subianto (Labtek V),
          </p>
          <p className="alamat">
            Institut Teknologi Bandung, Jalan Ganesha No.10, 40132
          </p>
          <Link href="https://wa.me/6285280570637" target="_blank">
            <p className="telepon">(+62) 85280570637</p>
          </Link>
        </div>
      </div>
      <p className="rights-text text-sm">© 2024 Inkubator IT. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
