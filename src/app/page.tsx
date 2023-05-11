import NavLink from '@/Components/NavLink';
import Image from 'next/image';

const skills = [
  'Javascript',
  'Typescript',
  'Tailwindcss',
  'React',
  'Nextjs',
  'PHP',
  'Laravel',
];

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3',
  },
];

export default function Home() {
  return (
    <main>
      <nav>
        <ul>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">My Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </ul>
      </nav>

      {/* hero */}
      <section id="hero">
        <p>frontend developer</p>
        <h2>CREATING AMAZING WEBSITES</h2>
        <span>for your</span>
        <span>BUSINESSES</span>
          <div>
            {/* <Image
              src="#"
              alt="Picture of the author"
              width={500}
              height={500}
            /> */}
          </div>

      {/* soft and hard skills */}
      </section>
      <section id="skills">
        <h2>What I&apos;m Good At</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* project lists */}
      <section id="projects">
        <h2>My Best Projects</h2>
        {projects.map((project) => (
          <ul key={project.title}>
            <li>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          </ul>
        ))}
      </section>

      {/* awards and contributions */}
      <section id="awards">
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
