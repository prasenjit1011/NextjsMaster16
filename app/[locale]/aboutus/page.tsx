import './aboutus.css'
import Counter from "../../components/Counter";

export const metadata = {
  title: "About Us",
  description: "Learn more about our mission, expertise, and technology solutions.",
};

export default function Aboutus() {
  return (
    <main className="container">
      <section>
        <h1>About Us</h1>

        <p>
          Welcome to our digital innovation hub. We specialize in building
          scalable, high-performance web applications and cloud-native solutions
          that help businesses transform their ideas into successful products.
        </p>

        <p>
          Our expertise spans modern frontend and backend technologies,
          including Next.js, React, Node.js, NestJS, FastAPI, and cloud
          platforms such as Google Cloud Platform (GCP). We focus on creating
          secure, maintainable, and user-friendly applications that deliver
          exceptional experiences.
        </p>

        <h2>What We Do</h2>
        <ul>
          <li>Modern Web Application Development</li>
          <li>REST API & Microservice Architecture</li>
          <li>Cloud Deployment & DevOps Automation</li>
          <li>Multilingual and Internationalized Applications</li>
          <li>Database Design & Performance Optimization</li>
          <li>AI & Generative AI Integration</li>
          <li>Enterprise Software Solutions</li>
        </ul>

        <h2>Our Technology Stack</h2>
        <p>
          We leverage industry-leading technologies to build reliable and
          future-ready solutions:
        </p>

        <ul>
          <li>Frontend: Next.js, React, TypeScript, Redux</li>
          <li>Backend: Node.js, NestJS, FastAPI, Python</li>
          <li>Databases: PostgreSQL, MySQL, MongoDB</li>
          <li>Cloud: Google Cloud Run, GKE, Docker</li>
          <li>CI/CD: GitHub Actions, Automated Deployments</li>
          <li>AI: LangChain, LLM Applications, AI Automation</li>
        </ul>

        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses and developers with innovative,
          scalable, and intelligent technology solutions. We believe in writing
          clean code, embracing modern architecture, and continuously learning
          to stay ahead in the rapidly evolving technology landscape.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Performance-focused development</li>
          <li>Scalable cloud architecture</li>
          <li>Clean and maintainable code</li>
          <li>Modern development practices</li>
          <li>Security-first approach</li>
          <li>Continuous innovation and learning</li>
        </ul>

        <Counter pageName="About Us" />
      </section>
    </main>
  );
}