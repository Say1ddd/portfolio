import NavLink from '@/Components/NavLink';
import Image from 'next/image';
import styles from '@/app/Globals.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
        <ul className={styles.sidelink}>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">My Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </ul>

      {/* hero */}
      <section id="hero" className={styles.hero}>
          <p>Frontend Developer</p>
          <span className={styles.heroPrimary}>CREATING AMAZING WEBSITES</span>
          <span className={styles.heroSecondary}></span>
            <div>
              {/* <Image
                src="#"
                alt="Picture of the author"
                width={500}
                height={500}
              /> */}
            </div>
      </section>

      {/* project lists */}
      <section id="projects" className={styles.projects}>
        <div className={styles.gridContainer}>
        <p className={`${styles.projectsHead} ${styles.row}`}>My Projects</p>
            <ul className={`${styles.row} ${styles.projectsUl}`}>
              <li className={styles.projectsLi}>
                <Image src="/nam.jpg"
                  alt="Picture of the author"
                  width={300}
                  height={300}
                  >
                </Image>
                <p>Project 1</p>
                <span>Project Description</span>
              </li>
              <li className={styles.projectsLi}>
                <Image src="/nam.jpg"
                  alt="Picture of the author"
                  width={300}
                  height={300}
                  >
                </Image>
                <p>Project 2</p>
                <span>Project Description</span>
              </li>
              <li className={styles.projectsLi}>
                <Image src="/nam.jpg"
                  alt="Picture of the author"
                  width={300}
                  height={300}
                  >
                </Image>
                <p>Project 3</p>
                <span>Project Description</span>
              </li>
            </ul>
          </div>
      </section>

      {/* soft and hard skills */}
      <section id="skills" className={styles.skills}>
        <h2>What I&apos;m Good At</h2>
        <ul>
            <li></li>
        </ul>
      </section>

      {/* awards and contributions */}
      <section id="awards" className={styles.gridContainer}>
        <h2>Award and Contributions</h2>
        <ul>
          <li>Best Web Developer 2021</li>
          <li>Best Web Developer 2020</li>
          <li>Best Web Developer 2019</li>
        </ul>
      </section>

      {/* contact me */}
      <section id="contacts">
        <h2>Contact Me</h2>
          <div>email</div>
          <div>mobile</div>
      </section>

      {/* footer */}
      <footer>
        <p>Copyright Sajidikhlas&copy; 2021</p>
      </footer>
    </main>
  );
};
