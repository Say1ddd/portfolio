import NavLink from '@/Components/NavLink';
import ListComponent from '@/Components/ListComponent';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Link from 'next/link';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt, FaFacebook, FaInstagram, FaJs, FaLaravel, FaLinkedin, FaReact } from 'react-icons/fa6';
import { SiAdobephotoshop, SiFigma, SiNextdotjs, SiPhp, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import PrimaryButton from '@/Components/PrimaryButton';
import { MdCall, MdMail } from 'react-icons/md';

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
    label: 'Figma',
    icon: <SiFigma />,
    desc: "I started using Figma by creating SVG assets and my own logo design."},
  {
    label: 'Adobe Photoshop',
    icon: <SiAdobephotoshop />,
    desc: "I Started using Adobe Photoshop by modify and creating one of my favorite game's assets."},
  {
    label: 'Git',
    icon: <BsGit />,
    desc: "I started using Git out of curiosity about managing projects with a team."},
];

export default async function Home() {
  return (
    <main className={styles.transition}>
      <div className={styles.main}>
        <div className={styles.fixed}>
          <ApplicationLogo className={styles.logo} />
          <div className={styles.nav}>
            <ul>
              <NavLink href="/">home</NavLink>
              <NavLink href="/#projects">projects</NavLink>
              <NavLink href="/#skills">my expertises</NavLink>
              <NavLink href="/#contact">contact</NavLink>
            </ul>
          </div>
        </div>
        {/* <div className={styles.navContainer}>
        <div className={styles.navIcon}> */}
          {/* icon */}
        {/* </div>
            <ul>
              <NavLink href="/">home</NavLink>
              <NavLink href="/about">about me</NavLink>
              <NavLink href="/projects">my projects</NavLink>
              <NavLink href="/contact">contact me</NavLink>
            </ul>
          </div> */}

        {/* hero */}
        <section id="hero" className={`${styles.hero} ${styles.container}`}>
          <div className={styles.row}>
            <p className={styles.gridCols12}>Sajid Muhammad Ikhlas</p>
            <span className={`${styles.Title} ${styles.gridCols12}`}>Creating Amazing Websites</span>
            <span className={`${styles.Sub} ${styles.gridCols12}`}>Full-Stack Web Developer</span>
                {/* <Image
                  src="#"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                /> */}
            </div>
        </section>

        {/* project lists */}
        <section id="projects" className={`${styles.projects} ${styles.container}`}>
          <div className={styles.row}>
            <span className={`${styles.Title} ${styles.gridCols12}`}>What I&apos;ve Created</span>
            <span className={`${styles.Sub} ${styles.gridCols12}`}>In the Past Years</span>
          </div>
          <div className={styles.row}>
              <ul className={styles.gridCols12}>
                <ListComponent
                  icon={<Image src="/atsukogrin.png"
                  alt="test"
                  width={150}
                  height={100}></Image>}
                  label="Project1"
                />
                <ListComponent
                  icon={<Image src="/atsukogrin.png"
                  alt="test"
                  width={150}
                  height={100}></Image>}
                  label="Project2"
                />
                <ListComponent
                  icon={<Image src="/atsukogrin.png"
                  alt="test"
                  width={150}
                  height={100}></Image>}
                  label="Project3"
                />
              </ul>
            </div>
            <div className={styles.row}>
              <Link href="/projects" className={styles.gridCols12}>
                  <PrimaryButton>
                    View More
                  </PrimaryButton>
              </Link>
            </div>
        </section>

        {/* soft and hard skills */}
        <section id="skills" className={`${styles.skills} ${styles.container}`}>
          <div className={styles.row}>
            <span className={`${styles.Title} ${styles.gridCols12}`}>What I&apos;m Good At</span>
            <span className={`${styles.Sub} ${styles.gridCols12}`}>Language, Library, and Frameworks</span>
          </div>
          <div className={`${styles.skillsDev} ${styles.row}`}>
            <ul className={styles.gridCols12}>
              {SkillsDev.map((skillDev, index) => (
                <ListComponent
                key={index}
                label={skillDev.name}
                icon={skillDev.icon}
                />
              ))}
            </ul>
          </div>
          <div className={styles.row}>
            <span className={`${styles.Sub} ${styles.gridCols12}`}>Tool and Softwares</span>
          </div>
          <div className={`${styles.skillsTool} ${styles.row}`}>
            <ul className={styles.gridCols12}>
              {SkillsTool.map((skillTool, index) => (
                  <li key={index}>
                    <span>{skillTool.icon}</span>
                  <div className={styles.skillsText}>
                    <p>{skillTool.label}</p>
                    <p>{skillTool.desc}</p>
                  </div>
              </li>
              ))}
            </ul>
          </div>
        </section>

        {/* contact me */}
        <section id="contact" className={`${styles.contacts} ${styles.container}`}>
          <div className={styles.row}>
            <span className={`${styles.Title} ${styles.gridCols12}`}>Get in Touch</span>
            <span className={`${styles.Sub} ${styles.gridCols12}`}>Let&apos;s Work Together</span>
            <span></span>
          </div>
            {/* <div className={`${styles.contactsList} ${styles.row}`}>
              <span className={styles.gridCols12}><MdCall /></span>
              <span className={styles.gridCols12}><MdMail /></span>
            </div> */}
            {/* footer */}
              <footer className={styles.container}>
                {/* footer logo */}
                <div className={styles.footerLogo}>
                <ApplicationLogo className={styles.logoFooter}/>
                </div>

                {/* footer nav */}
                <div className={`${styles.footerNav} ${styles.row}`}>
                  <span className={styles.gridCols12}>Navigation</span>
                  <ul className={styles.gridCols12}>
                  <NavLink href="/">Back to Top</NavLink>
                  <NavLink href="/#projects">Projects</NavLink>
                  <NavLink href="/#skills">Skills</NavLink>
                  <NavLink href="/#contact">Contact</NavLink>
                  </ul>
                </div>

                {/* footer social */}
                <ul className={`${styles.footerSocial} ${styles.row}`}>
                  <Link href='mailto:sajidmuhammadikhlas@gmail.com' target='_blank'>
                  <ListComponent
                    className={styles.gridCols12}
                    label='sajidmuhammadikhlas@gmail.com'
                  />
                  </Link>
                  <Link href='https://wa.me/+62895411138292' target='_blank'>
                  <ListComponent
                    className={styles.gridCols12}
                    label='+62 895 4111 38292'
                  />
                  </Link>
                  <div className={styles.row}>
                    <div className={styles.gridCols12}>
                    <Link href='https://www.linkedin.com/in/sajid-muhammad-ikhlas/' target='_blank'>
                      <ListComponent icon={<FaLinkedin />} />
                    </Link>
                    <Link href='https://web.facebook.com/sajid.muhammad.12764' target='_blank'>
                      <ListComponent icon={<FaFacebook />} />
                    </Link>
                    <Link href='https://www.instagram.com/say1ddd/' target='_blank'>
                      <ListComponent icon={<FaInstagram />} />
                    </Link>
                    </div>
                  </div>
                </ul>
              </footer>
        </section>
      </div>
    </main>
  );
};
