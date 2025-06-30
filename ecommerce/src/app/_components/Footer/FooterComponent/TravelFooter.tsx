import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';

// Move data fetching to page component
type TravelFooterProps = {
  footerBgUrl: string;
};

function TravelFooter({ footerBgUrl }: TravelFooterProps) {
  return (
    <footer className={styles.travelFooter} style={{
      '--footer-bg-url': `url(${footerBgUrl})`
    } as React.CSSProperties}>
      <div className={styles.footerContent}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Image 
            src="/travel/footer/incredible-india-logo.png" 
            alt="Incredible India" 
            width={200} 
            height={80}
          />
        </div>

        {/* Follow Us Section */}
        <div className={styles.section}>
          <h2>Follow us</h2>
          <div className={styles.socialLinks}>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/travel/footer/facebook.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/travel/footer/twitter.svg" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/travel/footer/instagram.svg" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Image src="/travel/footer/youtube.svg" alt="YouTube" width={24} height={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/travel/footer/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </Link>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className={styles.section}>
          <h2>Quick links</h2>
          <nav>
            <Link href="/attractions">Attractions</Link>
            <Link href="/experiences">Experiences</Link>
            <Link href="/festivals-and-events">Festivals and Events</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/incredible-india">Incredible India</Link>
            <Link href="/content-hub">Content Hub</Link>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div className={styles.section}>
          <h2>Newsletter</h2>
          <p>Sign up for exciting news, learn more about our events and get great travel ideas.</p>
          <button className={styles.subscribeButton}>Subscribe now</button>
        </div>

        {/* Scan to Chat Section */}
        <div className={styles.section}>
          <h2>Scan to chat</h2>
          <div className={styles.qrCode}>
            <Image src="/travel/footer/qr-code.png" alt="QR Code" width={150} height={150} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.links}>
          <Link href="/terms">Terms of Use</Link>
          <span>|</span>
          <Link href="/privacy">Privacy Policy</Link>
          <span>|</span>
          <Link href="/contact">Contact Us</Link>
        </div>
        <p className={styles.copyright}>© Ministry of Tourism, Government of India.</p>
      </div>
    </footer>
  );
}

export default TravelFooter; 