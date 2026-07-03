import styles from "./aboutus.module.css";
import Counter from "../../components/Counter";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about our mission, expertise, and technology solutions.",
};

const skills = {
  Backend: [
    "Node.js",
    "NestJS",
    "Express.js",
    "TypeScript",
    "Java",
    "Spring Boot",
    "PHP/Laravel",
  ],
  Frontend: [
    "React.js",
    "Next.js",
    "Redux",
    "JavaScript",
    "HTML5",
    "CSS3",
  ],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  "Cloud & DevOps": [
    "AWS",
    "GCP",
    "Azure",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Nginx",
  ],
};

const highlights = [
  "Architected scalable enterprise applications across multiple industries.",
  "Designed secure REST APIs and microservices.",
  "Built high-performance backend systems with Node.js & NestJS.",
  "Implemented CI/CD pipelines and cloud-native deployments.",
  "Collaborated with global cross-functional teams.",
];

const focus = [
  "Node.js & NestJS",
  "Spring Boot",
  "React & Next.js",
  "Microservices",
  "Cloud Architecture",
  "System Design",
];

export default function Aboutus() {
  return (
    <main className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.avatar}>PA</div>

        <h1>Prasenjit Aluni</h1>

        <h2>
          Senior Full Stack Engineer
          <span>Node.js • NestJS • Spring Boot • React • Next.js</span>
        </h2>

        <p>
          Designing scalable, secure and high-performance software solutions
          for modern businesses.
        </p>

        <div className={styles.buttons}>
          <a href="mailto:prasenjit9011@gmail.com">Email</a>

          <a
            href="https://react-cloudrun-334684044157.asia-south1.run.app/"
            target="_blank"
          >
            Portfolio
          </a>

          <a
            href="https://j4t3c8u9u1.execute-api.us-east-1.amazonaws.com/"
            target="_blank"
          >
            Services
          </a>

          <a
            href="https://www.linkedin.com/in/prasenjit1011/"
            target="_blank"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/prasenjit1011/prasenjit1011/blob/main/Resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </section>


      {/* About */}
      <section className={styles.card}>
        <h3>About Me</h3>

        <p>
          Senior Full Stack Engineer with extensive experience in designing,
          developing and delivering enterprise-grade applications.
        </p>

        <p>
          Specialized in scalable backend development using Node.js, NestJS,
          Spring Boot and Laravel while creating modern frontend experiences
          with React and Next.js.
        </p>
      </section>

      {/* Skills */}
      <section className={styles.card}>
        <h3>Technology Stack</h3>

        <div className={styles.grid}>
          {Object.entries(skills).map(([title, items]) => (
            <div key={title} className={styles.skillCard}>
              <h4>{title}</h4>

              <div className={styles.tags}>
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className={styles.card}>
        <h3>Professional Highlights</h3>

        <ul className={styles.list}>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>      

      {/* Contact */}
      <section className={styles.contact}>
        <h3>Let's Connect</h3>

        <p>
          📧 prasenjit9011@gmail.com
          <br />
          📍 Kolkata, India
          <br />
          💼 Remote • Hybrid • Relocation
        </p>

        <h4>Building software that is scalable, maintainable and impactful.</h4>
      </section>
    </main>
  );
}