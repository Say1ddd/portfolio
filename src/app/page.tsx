import NavLink from '@/Components/NavLink';
import ListComponent from '@/Components/ListComponent';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Link from 'next/link';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt, FaFacebook, FaGithub, FaInstagram, FaJs, FaLaravel, FaLinkedin, FaReact } from 'react-icons/fa6';
import { SiAdobephotoshop, SiFigma, SiNextdotjs, SiPhp, SiPostman, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiWindowsterminal } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import PrimaryButton from '@/Components/PrimaryButton';
import NavHeader from '@/Components/NavHeader';
import NavFooter from '@/Components/NavFooter';

const projects = [
  { 
    label: 'Portfolio',
    desc: 'My personal portfolio website created with NextJS and Typescript',
    src: '/portfolio.png'
  },
  { 
    label: 'Flot',
    desc: 'An E-commerce website created with Laravel, ReactJS, and TailwindCSS',
    src: '/flot.png'
  },
  { 
    label: "Too Do",
    desc: 'A simple todo app created with Django, ReactJS, and TailwindCSS',
    src: '/toodo.png'
  },
];

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
  },
  {
    label: 'Adobe Photoshop',
    icon: <SiAdobephotoshop />,
  },
  {
    label: 'Git',
    icon: <BsGit />,
  },
  {
    label: 'Postman',
    icon: <SiPostman />,
  },
  {
    label: 'VSCode',
    icon: <SiVisualstudiocode />,
  },
  {
    label: 'Terminal',
    icon: <SiWindowsterminal />,
  },
];

export default function Home() {
  

  return (
    <>
        <ul className={styles.nav}>
          <NavHeader replace={true} href="/">home</NavHeader>
          <NavHeader replace={true} href="#projects">Projects</NavHeader>
          <NavHeader replace={true} href="#skills">My Expertises</NavHeader>
        </ul>
    {/* <div className={styles.navContainer}>
    <div className={styles.navIcon}> */}
      {/* icon */}
    {/* </div>
        <ul>
          <NavLink href="/">home</NavLink>
          <NavLink href="/about">about me</NavLink>
          <NavLink href="/projects">my projects</NavLink>
        </ul>
      </div> */}
      <main className={`${styles.transition} ${styles.main}`}>
          {/* hero */}
          <section id="hero" className={styles.hero}>
            <div className={styles.heroImage}>
              <Image
                  src='/author.png'
                  alt='Author'
                  width={100}
                  height={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              <h1>Hello There, I&apos;m Sajid.</h1>
            </div>
            <h2 className={styles.Title}>Fullstack Web Developer</h2>
            <p className={styles.Sub}>A passionate Fullstack web developer enthusiast specialized in building stunning pixel perfect interactive websites</p>
          </section>

          {/* project section */}
          <section id="projects" className={styles.projects}>
            <h1 className={styles.Title}>What I&apos;ve Created</h1>
            <h2 className={styles.Sub}>In the Past Years</h2>
            <div>
                <ul>
                  {projects.map((project, index) => (
                    <li key={index} className={styles.projectsList}>
                      <div className={styles.projectsImage}>
                        <Image
                          quality={50}
                          src={project.src}
                          alt={project.label}
                          width={300}
                          height={0}
                          style={{height: '100%', width: 'auto'}}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className={styles.projectsDesc}>
                        <h3>{project.label}</h3>
                        <p>{project.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link href="https://github.com/Say1ddd?tab=repositories" target="_blank">
                    <PrimaryButton>
                      More on My Github <FaGithub />
                    </PrimaryButton>
                </Link>
              </div>
          </section>

          {/* soft and hard skills */}
          <section id="skills" className={styles.skills}>
              <h1 className={styles.Title}>What I&apos;ve Been Using</h1>
              <div className={styles.skillsContainer}>
                  <div className={styles.skillsDev}>
                    <h2 className={styles.Sub}>Language, Library, and Frameworks</h2>
                    <ul>
                      {SkillsDev.map((skillDev, index) => (
                        <ListComponent
                          key={index}
                          label={skillDev.name}
                          icon={skillDev.icon}
                        />
                      ))}
                    </ul>
                  </div>
                  <span className={styles.skillsGap}></span>
                  <div className={styles.skillsTool}>
                    <h2 className={styles.Sub}>Tool and Softwares</h2>
                    <ul>
                      {SkillsTool.map((skillTool, index) => (
                          <li key={index}>
                            <span>{skillTool.icon}</span>
                          <div className={styles.skillsText}>
                            <p>{skillTool.label}</p>
                          </div>
                      </li>
                      ))}
                    </ul>
                  </div>
              </div>
          </section>

          {/* contact */}
              {/* <div className={styles.contactsList}>
                <span><MdCall /></span>
                <span><MdMail /></span>
              </div> */}
              {/* footer */}
                <div className={styles.footerContainer}>
                  <div className={styles.footerContent}>
                    {/* footer logo */}
                    <div className={styles.footerTop}>
                      <div className={styles.footerLeft}>
                    <div className={styles.footerLogo}>
                    <ApplicationLogo className={styles.logoFooter}/>
                    </div>

                    {/* footer nav */}
                    <div className={styles.footerNav}>
                      <div className={styles.footerLink}>
                        <h3>Navigation</h3>
                        <ul>
                        <NavLink href="/">Back to Top</NavLink>
                        <NavLink href="/#projects">Projects</NavLink>
                        <NavLink href="/#skills">Skills</NavLink>
                        </ul>
                      </div>
                      <div className={styles.footerLink}>
                        <h3>Other</h3>
                        <ul>
                        <NavFooter scroll={false} href="/">Home</NavFooter>
                        <NavFooter href="/blog">Blog</NavFooter>
                        <NavFooter href="/projects">My Projects</NavFooter>
                        <NavFooter href="/about">About Me</NavFooter>
                        </ul>
                      </div>
                      </div>
                    </div>

                    {/* footer social */}
                    <div className={styles.footerRight}>
                    <ul className={styles.footerSocial}>
                      <Link href='mailto:sajidmuhammadikhlas@gmail.com' target='_blank'>
                      <ListComponent label='sajidmuhammadikhlas@gmail.com' />
                      </Link>
                      <Link href='https://wa.me/+62895411138292' target='_blank'>
                      <ListComponent label='+62 895 4111 38292' />
                      </Link>
                      <div>
                        <div className={styles.footerIcon}>
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
                    </div>
                    </div>
                    <footer className={styles.footerBottom}>
                      <p>&copy; 2024 Sajid Muhammad Ikhlas</p>
                    </footer>
                  </div>
                </div>
      </main>
    </>
  );
};
