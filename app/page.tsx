import Image from "next/image";
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.card}>
      <Image src="/profile.jpg" alt="Muhammad Saim" width={150} height={150} className={styles.profileImage} />
      <h2 className={styles.name}>Muhammad Saim</h2>
      <p className={styles.title}>Developer</p>
      <p className={styles.description}>100 Posts | 100 Followers | 100 Following</p>
      <a href="https://github.com/saim-x" className={styles.link}>Github</a>
      <a href="#" className={styles.link} style={{marginLeft: '10px'}}>Message</a>
    </div>
  );
}
