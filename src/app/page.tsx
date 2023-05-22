import NavLink from '@/Components/NavLink';
import SkillsCard from '@/Components/SkillsCard';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Link from 'next/link';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt, FaSquareJs, FaLaravel, FaReact } from 'react-icons/fa6';
import { SiNextdotjs, SiPhp, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Javascript', icon: <FaSquareJs /> },
  { name: 'Typescript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'NextJS', icon: <SiNextdotjs /> },
  { name: 'PHP', icon: <SiPhp /> },
  { name: 'Laravel', icon: <FaLaravel /> },
];

export default async function Home() {
  return (
    <main className={styles.transition}>
      <div className={styles.main}>
        <ApplicationLogo className={styles.logo} />
        <div className={styles.nav}>
          <ul>
            <NavLink href="/">home</NavLink>
            <NavLink href="/#projects">projects</NavLink>
            <NavLink href="/#skills">my expertises</NavLink>
            <NavLink href="/#contacts">contact</NavLink>
          </ul>
        </div>
        <div className={styles.navContainer}>
        <div className={styles.navIcon}>
          {/* icon */}
        </div>
            <ul>
              <NavLink href="/">home</NavLink>
              <NavLink href="/about">about me</NavLink>
              <NavLink href="/projects">my projects</NavLink>
              <NavLink href="/contact">contact me</NavLink>
            </ul>
          </div>

        {/* hero */}
        <section id="hero" className={styles.hero}>
            <p>Sajid Muhammad Ikhlas</p>
            <span className={styles.heroPrimary}>CREATING AMAZING WEBSITES</span>
            <span className={styles.heroSecondary}>Full-stack developer</span>
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
            <div>
              <Link href="/projects">
                <button className={styles.projectsButton}>View All Projects</button>
              </Link>
            </div>
        </section>

        {/* soft and hard skills */}
        <section id="skills" className={styles.skills}>
          <span className={styles.skillsHead}>What I&apos;m Good At</span>
          <span>Language, library, and frameworks</span>
          <div className={styles.skillsGrid}>
            <ul>
              {Skills.map((skill) => (
                <SkillsCard key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </ul>
          </div>
        </section>

        {/* contact me */}
        <section id="contacts" className={styles.contacts}>
          <span className={styles.contactsHead}>Let&apos;s connect!</span>
            <div className={styles.contactsLi}>
              <span>+62-895-4111-38292</span>
              <span>sajidmuhammadikhlas@gmail.com</span>
            </div>
            <div>
            {/* footer */}
              <footer>
                {/* footer logo */}
                <div className={styles.footerLogo}>
                <ApplicationLogo className={styles.logoFooter}/>
                </div>

                {/* footer nav */}
                <div className={styles.footerNav}>
                  <ul>
                    <li>home</li>
                    <li>projects</li>
                    <li>about me</li>
                  </ul>
                </div>

                {/* footer social */}
                <div className={styles.footerSocial}>
                  <span>sajidmuhammadikhlas@gmail.com</span>
                  <span>+62-895-4111-38292</span>
                  <ul>
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>linkedin</li>
                  </ul>
                </div>
              </footer>
            </div>
        </section>
      </div>
    </main>
  );
};
