import NavLink from '@/Components/NavLink';
import SkillsCard from '@/Components/SkillsCard';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Link from 'next/link';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt, FaJs, FaLaravel, FaReact } from 'react-icons/fa6';
import { SiAdobephotoshop, SiFigma, SiNextdotjs, SiPhp, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';

const SkillsDev = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Javascript', icon: <FaJs /> },
  { name: 'Typescript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'NextJS', icon: <SiNextdotjs /> },
  { name: 'PHP', icon: <SiPhp /> },
  { name: 'Laravel', icon: <FaLaravel /> },
];

const SkillsTool = [
  {
    name: 'Figma',
    icon: <SiFigma />,
    desc: "I started using Figma by creating SVG assets and my own logo design."},
  {
    name: 'Adobe Photoshop',
    icon: <SiAdobephotoshop />,
    desc: "I Started using Adobe Photoshop by modify and creating one of my favorite game's assets."},
  {
    name: 'Git',
    icon: <BsGit />,
    desc: "I started using Git out of curiosity about managing projects with a team."},
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
            <span className={styles.heroTitle}>Creating Amazing Websites</span>
            <span className={styles.heroSub}>Full-stack developer</span>
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
          <span className={`${styles.projectsTitle} ${styles.row}`}>What I&apos;ve Created</span>
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
          <span className={styles.skillsTitle}>What I&apos;m Good At</span>
          <span className={styles.skillsSub}>Language, library, and frameworks</span>
          <div className={styles.skillsDev}>
            <ul>
              {SkillsDev.map((skillDev) => (
                <SkillsCard key={skillDev.name} name={skillDev.name} icon={skillDev.icon} />
              ))}
            </ul>
          </div>
          <span className={styles.skillsSub}>Tool and softwares</span>
          <div className={styles.skillsTool}>
            <ul>
              {SkillsTool.map((skillTool) => (
                  <li key={skillTool.name}>
                    <span>{skillTool.icon}</span>
                  <div className={styles.skillsText}>
                    <p>{skillTool.name}</p>
                    <p>{skillTool.desc}</p>
                  </div>
              </li>
              ))}
            </ul>
          </div>
        </section>

        {/* contact me */}
        <section id="contacts" className={styles.contacts}>
          <span className={styles.contactsTitle}>Let&apos;s connect!</span>
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
