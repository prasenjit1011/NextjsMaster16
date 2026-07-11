// "use client";

// import { useState } from "react";

import ReduxProvider from '../../lib/provider';
import Link from 'next/link';
import { ReactNode } from 'react';
import { getLocale, getTranslations } from "next-intl/server";

import './navbar.css'
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const metadata = {
  title: "My App",
  description: "Next.js App",
};


const Header = () => {
  return (
    <header>

        <div className="container navbar">

            <a href="#" className="logo">
                Lux<span>Estate</span>
            </a>

            <ul className="nav-links">

                <li><a href="#">Home</a></li>

                <li><a href="#properties">Properties</a></li>

                <li><a href="#about">About</a></li>

                <li><a href="#agents">Agents</a></li>

                <li><a href="#blog">Blog</a></li>

                <li><a href="#contact">Contact</a></li>

            </ul>

            <div className="menu-toggle">
                <i className="fa-solid fa-bars"></i>
            </div>

        </div>

    </header>
  );
}

const Hero = () => {
  return (
    <section className="hero">

        <div className="container hero-content fade-up">

            <h1>
                Discover Luxury Living
                In The World's
                Finest Properties
            </h1>

            <p>

                Buy, Rent or Invest in premium residential
                and commercial properties with trusted
                real estate professionals.

            </p>

            <a href="#properties" className="btn">
                Explore Properties
            </a>




            <div className="search-box">

                <select>

                    <option>Property Type</option>

                    <option>Apartment</option>

                    <option>Villa</option>

                    <option>House</option>

                    <option>Office</option>

                </select>

                <select>

                    <option>Location</option>

                    <option>New York</option>

                    <option>Los Angeles</option>

                    <option>Miami</option>

                    <option>Dubai</option>

                </select>

                <select>

                    <option>Budget</option>

                    <option>$100k+</option>

                    <option>$250k+</option>

                    <option>$500k+</option>

                    <option>$1M+</option>

                </select>

                <input type="text"
                    placeholder="Keyword" />

                <button className="btn">

                    <i className="fa-solid fa-magnifying-glass"></i>

                    Search

                </button>

            </div>

        </div>

    </section>
  )
}

const Luxury = () => {
  return (
<section className="hero">
  <div className="container hero-content fade-up">
    <h1>
      Discover Luxury Living
      <br />
      In The World's
      <br />
      Finest Properties
    </h1>

    <p>
      Buy, Rent or Invest in premium residential and commercial properties
      with trusted real estate professionals.
    </p>

    <a href="#properties" className="btn">
      Explore Properties
    </a>

    {/* Search Box */}
    <div className="search-box">
      <select defaultValue="">
        <option value="" disabled>
          Property Type
        </option>
        <option>Apartment</option>
        <option>Villa</option>
        <option>House</option>
        <option>Office</option>
      </select>

      <select defaultValue="">
        <option value="" disabled>
          Location
        </option>
        <option>New York</option>
        <option>Los Angeles</option>
        <option>Miami</option>
        <option>Dubai</option>
      </select>

      <select defaultValue="">
        <option value="" disabled>
          Budget
        </option>
        <option>$100k+</option>
        <option>$250k+</option>
        <option>$500k+</option>
        <option>$1M+</option>
      </select>

      <input
        type="text"
        placeholder="Keyword"
      />

      <button type="button" className="btn">
        <i className="fa-solid fa-magnifying-glass"></i>{" "}
        Search
      </button>
    </div>
  </div>
</section>
  );
}

const Features = () => {
  return (
<section>
  <div className="container">
    <div className="features">
      <div className="feature zoom">
        <i className="fa-solid fa-house"></i>

        <h3>Luxury Homes</h3>

        <p>
          Discover premium homes in the best locations.
        </p>
      </div>

      <div className="feature zoom">
        <i className="fa-solid fa-location-dot"></i>

        <h3>Prime Locations</h3>

        <p>
          Properties located near schools, parks and city centers.
        </p>
      </div>

      <div className="feature zoom">
        <i className="fa-solid fa-handshake"></i>

        <h3>Trusted Agents</h3>

        <p>
          Experienced professionals ready to help you.
        </p>
      </div>

      <div className="feature zoom">
        <i className="fa-solid fa-key"></i>

        <h3>Easy Ownership</h3>

        <p>
          Hassle-free buying and legal assistance.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}

const Properties = () => {
  return (
<section id="properties">
  <div className="container">
    <div className="section-title">
      <h2>Featured Properties</h2>

      <p>
        Explore our hand-picked premium real estate listings.
      </p>
    </div>

    <div className="property-grid">
      {/* Property 1 */}
      <div className="property-card">
        <div className="property-img">
          <Image
            src="/realestate/images/property1.jpg"
            alt="Modern Family Villa"
            width={500}
            height={350}
          />

          <span className="property-tag">For Sale</span>
        </div>

        <div className="property-info">
          <h3>Modern Family Villa</h3>

          <p>
            <i className="fa-solid fa-location-dot"></i>{" "}
            Beverly Hills, California
          </p>

          <div className="price">$1,250,000</div>

          <div className="property-meta">
            <span>
              <i className="fa-solid fa-bed"></i> 4 Beds
            </span>

            <span>
              <i className="fa-solid fa-bath"></i> 3 Baths
            </span>

            <span>
              <i className="fa-solid fa-ruler-combined"></i> 3500 sqft
            </span>
          </div>
        </div>
      </div>

      {/* Property 2 */}
      <div className="property-card">
        <div className="property-img">
          <Image
            src="/realestate/images/property2.jpg"
            alt="Luxury Penthouse"
            width={500}
            height={350}
          />

          <span className="property-tag">New</span>
        </div>

        <div className="property-info">
          <h3>Luxury Penthouse</h3>

          <p>
            <i className="fa-solid fa-location-dot"></i>{" "}
            Manhattan, New York
          </p>

          <div className="price">$2,850,000</div>

          <div className="property-meta">
            <span>
              <i className="fa-solid fa-bed"></i> 5 Beds
            </span>

            <span>
              <i className="fa-solid fa-bath"></i> 4 Baths
            </span>

            <span>
              <i className="fa-solid fa-ruler-combined"></i> 4800 sqft
            </span>
          </div>
        </div>
      </div>

      {/* Property 3 */}
      <div className="property-card">
        <div className="property-img">
          <Image
            src="/realestate/images/property3.jpg"
            alt="Luxury Beach House"
            width={500}
            height={350}
          />

          <span className="property-tag">Featured</span>
        </div>

        <div className="property-info">
          <h3>Luxury Beach House</h3>

          <p>
            <i className="fa-solid fa-location-dot"></i>{" "}
            Malibu, California
          </p>

          <div className="price">$3,100,000</div>

          <div className="property-meta">
            <span>
              <i className="fa-solid fa-bed"></i> 6 Beds
            </span>

            <span>
              <i className="fa-solid fa-bath"></i> 5 Baths
            </span>

            <span>
              <i className="fa-solid fa-ruler-combined"></i> 5200 sqft
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

const About = () => {
  return (
<section id="about">
  <div className="container">
    <div className="about">
      <div className="about-image">
        <Image
          src="/realestate/images/about.jpg"
          alt="About Us"
          width={600}
          height={450}
        />
      </div>

      <div className="about-content fade-up">
        <h2>Helping You Find The Perfect Property</h2>

        <p>
          We specialize in premium residential and commercial properties
          across the world's most desirable locations. Our experienced team
          is dedicated to making buying, selling, and investing effortless.
        </p>

        <p>
          Whether you're purchasing your first home or expanding your
          investment portfolio, we provide expert guidance, market insights,
          and personalized service every step of the way.
        </p>

        <a href="#" className="btn">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  );
}

const Services = () => {
  return (
<section className="services">
  <div className="container">
    <div className="section-title">
      <h2>Our Services</h2>

      <p>
        Everything you need for buying, selling, and managing luxury
        properties.
      </p>
    </div>

    <div className="features">
      <div className="feature">
        <i className="fa-solid fa-house-user"></i>

        <h3>Buy Property</h3>

        <p>
          Explore thousands of verified homes, apartments, villas, and
          luxury estates.
        </p>
      </div>

      <div className="feature">
        <i className="fa-solid fa-sack-dollar"></i>

        <h3>Sell Property</h3>

        <p>
          Get maximum value with professional marketing and expert
          negotiations.
        </p>
      </div>

      <div className="feature">
        <i className="fa-solid fa-building"></i>

        <h3>Property Management</h3>

        <p>
          Complete maintenance and tenant management for your investments.
        </p>
      </div>

      <div className="feature">
        <i className="fa-solid fa-scale-balanced"></i>

        <h3>Legal Support</h3>

        <p>
          Transparent documentation and hassle-free legal assistance.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}



const RealComp = () =>{
  return (
    <>
    
<section className="categories">
  <div className="container">
    <div className="section-title">
      <h2>Browse By Category</h2>

      <p>
        Choose from a wide range of luxury real estate options.
      </p>
    </div>

    <div className="property-grid">
      <div className="property-card">
        <div className="property-img">
          <Image
            src="/realestate/images/category-apartment.jpg"
            alt="Luxury Apartments"
            width={500}
            height={350}
          />
        </div>

        <div className="property-info">
          <h3>Apartments</h3>
          <p>120+ Luxury Apartments</p>
        </div>
      </div>

      <div className="property-card">
        <div className="property-img">
          <Image
            src="/realestate/images/category-villa.jpg"
            alt="Luxury Villas"
            width={500}
            height={350}
          />
        </div>

        <div className="property-info">
          <h3>Luxury Villas</h3>
          <p>80+ Premium Villas</p>
        </div>
      </div>

      <div className="property-card">
        <div className="property-img">
          <Image
            src="/realestate/images/category-office.jpg"
            alt="Commercial Properties"
            width={500}
            height={350}
          />
        </div>

        <div className="property-info">
          <h3>Commercial</h3>
          <p>65+ Office Spaces</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="stats">
  <div className="container">
    <div className="features">
      <div className="feature">
        <i className="fa-solid fa-building"></i>
        <h2>2,500+</h2>
        <p>Properties Sold</p>
      </div>

      <div className="feature">
        <i className="fa-solid fa-users"></i>
        <h2>1,800+</h2>
        <p>Happy Clients</p>
      </div>

      <div className="feature">
        <i className="fa-solid fa-user-tie"></i>
        <h2>120+</h2>
        <p>Professional Agents</p>
      </div>

      <div className="feature">
        <i className="fa-solid fa-award"></i>
        <h2>15+</h2>
        <p>Years Experience</p>
      </div>
    </div>
  </div>
</section>

<section className="why-us">
  <div className="container">
    <div className="section-title">
      <h2>Why Choose LuxEstate?</h2>

      <p>
        We provide exceptional service with complete transparency and trust.
      </p>
    </div>

    <div className="about">
      <div className="about-content">
        <h2>Real Estate Experts You Can Trust</h2>

        <p>
          Our mission is to simplify your property journey through innovative
          technology, experienced consultants, and unmatched customer support.
        </p>

        <ul style={{ marginTop: "20px" }}>
          <li style={{ marginBottom: "12px" }}>
            <i className="fa-solid fa-circle-check"></i> Verified Premium Listings
          </li>

          <li style={{ marginBottom: "12px" }}>
            <i className="fa-solid fa-circle-check"></i> Professional Real Estate Advisors
          </li>

          <li style={{ marginBottom: "12px" }}>
            <i className="fa-solid fa-circle-check"></i> Transparent Pricing
          </li>

          <li style={{ marginBottom: "12px" }}>
            <i className="fa-solid fa-circle-check"></i> Secure Documentation
          </li>

          <li style={{ marginBottom: "12px" }}>
            <i className="fa-solid fa-circle-check"></i> 24/7 Customer Support
          </li>
        </ul>

        <a href="#contact" className="btn">
          Contact Us
        </a>
      </div>

      <div className="about-image">
        <Image
          src="/realestate/images/why-us.jpg"
          alt="Why Choose LuxEstate"
          width={600}
          height={450}
        />
      </div>
    </div>
  </div>
</section>

<section id="agents">
  <div className="container">
    <div className="section-title">
      <h2>Meet Our Expert Agents</h2>

      <p>
        Dedicated professionals helping you find your dream home.
      </p>
    </div>

    <div className="agent-grid">
      <div className="agent-card">
        <Image
          src="/realestate/images/agent1.jpg"
          alt="John Anderson"
          width={350}
          height={420}
        />

        <div className="agent-info">
          <h3>John Anderson</h3>

          <p>Senior Property Consultant</p>

          <div className="agent-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="agent-card">
        <Image
          src="/realestate/images/agent2.jpg"
          alt="Emily Carter"
          width={350}
          height={420}
        />

        <div className="agent-info">
          <h3>Emily Carter</h3>

          <p>Luxury Home Specialist</p>

          <div className="agent-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="agent-card">
        <Image
          src="/realestate/images/agent3.jpg"
          alt="Michael Brown"
          width={350}
          height={420}
        />

        <div className="agent-info">
          <h3>Michael Brown</h3>

          <p>Commercial Property Expert</p>

          <div className="agent-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="testimonial-section">
  <div className="container">
    <div className="section-title">
      <h2>What Our Clients Say</h2>

      <p>
        Trusted by thousands of happy homeowners and investors.
      </p>
    </div>

    <div className="testimonial-grid">
      <div className="testimonial">
        <Image
          src="/realestate/images/client1.jpg"
          alt="Sarah Johnson"
          width={100}
          height={100}
        />

        <p>
          "Buying our dream villa was effortless thanks to the professional
          team. Highly recommended!"
        </p>

        <h4>Sarah Johnson</h4>

        <div className="stars">★★★★★</div>
      </div>

      <div className="testimonial">
        <Image
          src="/realestate/images/client2.jpg"
          alt="David Wilson"
          width={100}
          height={100}
        />

        <p>
          "Professional service, transparent pricing and excellent customer
          support throughout the process."
        </p>

        <h4>David Wilson</h4>

        <div className="stars">★★★★★</div>
      </div>

      <div className="testimonial">
        <Image
          src="/realestate/images/client3.jpg"
          alt="Jennifer Lee"
          width={100}
          height={100}
        />

        <p>
          "Their agents helped us find the perfect investment property within
          our budget."
        </p>

        <h4>Jennifer Lee</h4>

        <div className="stars">★★★★★</div>
      </div>
    </div>
  </div>
</section>

<section id="blog">
  <div className="container">
    <div className="section-title">
      <h2>Latest News & Blog</h2>

      <p>
        Stay updated with the latest real estate market trends.
      </p>
    </div>

    <div className="blog-grid">
      <div className="blog-card">
        <Image
          src="/realestate/images/blog1.jpg"
          alt="Luxury Home Design Trends"
          width={400}
          height={250}
        />

        <div className="blog-content">
          <h3>Top 10 Luxury Home Design Trends</h3>

          <p>
            Explore the newest architecture and interior design ideas for
            premium homes.
          </p>

          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </div>

      <div className="blog-card">
        <Image
          src="/realestate/images/blog2.jpg"
          alt="Property Investment"
          width={400}
          height={250}
        />

        <div className="blog-content">
          <h3>Best Cities For Property Investment</h3>

          <p>
            Discover high-growth locations offering exceptional investment
            opportunities.
          </p>

          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </div>

      <div className="blog-card">
        <Image
          src="/realestate/images/blog3.jpg"
          alt="First Time Home Buyers"
          width={400}
          height={250}
        />

        <div className="blog-content">
          <h3>Home Buying Tips For First-Time Buyers</h3>

          <p>
            Learn everything you should know before purchasing your first
            property.
          </p>

          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section>
  <div className="container">
    <div className="newsletter">
      <h2>Subscribe To Our Newsletter</h2>

      <p>
        Get exclusive property listings and real estate news.
      </p>

      <form>
        <input
          type="email"
          placeholder="Enter your email"
        />

        <button type="submit" className="btn">
          Subscribe
        </button>
      </form>
    </div>
  </div>
</section>



<section id="contact">
  <div className="container">
    <div className="section-title">
      <h2>Contact Us</h2>

      <p>We'd love to help you find your perfect property.</p>
    </div>

    <div className="about">
      <div>
        <h3>Get In Touch</h3>

        <br />

        <p>
          <i className="fas fa-location-dot"></i>{" "}
          25 Luxury Avenue, New York, USA
        </p>

        <br />

        <p>
          <i className="fas fa-phone"></i>{" "}
          +1 234 567 890
        </p>

        <br />

        <p>
          <i className="fas fa-envelope"></i>{" "}
          info@luxestate.com
        </p>
      </div>

      <div>
        <iframe
          title="LuxEstate Location"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="350"
          style={{
            border: 0,
            borderRadius: "15px",
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>


    <footer>

        <div className="container">

            <div className="footer-grid">

                <div className="footer-col">

                    <h3>LuxEstate</h3>

                    <p>
                        Your trusted partner for luxury real estate,
                        investment opportunities and dream homes.
                    </p>

                    <div className="footer-social">

                        <a href="#"><i className="fab fa-facebook-f"></i></a>

                        <a href="#"><i className="fab fa-twitter"></i></a>

                        <a href="#"><i className="fab fa-linkedin-in"></i></a>

                        <a href="#"><i className="fab fa-instagram"></i></a>

                    </div>

                </div>



                <div className="footer-col">

                    <h3>Quick Links</h3>

                    <ul>

                        <li><a href="#">Home</a></li>

                        <li><a href="#">Properties</a></li>

                        <li><a href="#">Agents</a></li>

                        <li><a href="#">About</a></li>

                        <li><a href="#">Contact</a></li>

                    </ul>

                </div>



                <div className="footer-col">

                    <h3>Services</h3>

                    <ul>

                        <li><a href="#">Buy Property</a></li>

                        <li><a href="#">Sell Property</a></li>

                        <li><a href="#">Property Rental</a></li>

                        <li><a href="#">Property Management</a></li>

                    </ul>

                </div>



                <div className="footer-col">

                    <h3>Contact</h3>

                    <p>New York, USA</p>

                    <p>+1 234 567 890</p>

                    <p>info@luxestate.com</p>

                </div>

            </div>

            <div className="copyright">

                © 2026 LuxEstate. All Rights Reserved.

            </div>

        </div>

    </footer>

    </>
  );
}





const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
        <ReduxProvider>
          <div style={{ border: "0px solid #b70951", padding: 0, marginTop: 0 }}>
            <Header />
            <Hero />
            <Luxury />
            <Features />
            <Properties />
            <About />
            <Services />
            <RealComp />
          </div>
        </ReduxProvider>
  );
}


const languages = [
  { code: "en", name: "English", flag: "🇬🇧", href: "/en" },
  { code: "bn", name: "বাংলা", flag: "🇧🇩", href: "/bn" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳", href: "/hi" },
];

const NavBar = async () => { 
  const locale = await getLocale();
  const selectedLanguage = languages.find((lang) => lang.code === locale) || languages[0];
  const text = await getTranslations('HomePage');
  


  return (
    <header>
      <div className="logo">
        <Image
          src="/logo.svg"
          alt={`MyWebsite ${locale}`}
          width='200'
          height='70'
        />
        
      </div>

      <nav className="navbar">
        <Link href="/">{text('Home')}</Link>
        <Link href="/aboutus">{text('About Us')}</Link>
        <Link href="/category">{text('Category')}</Link>

        {/* Render Dropdown */}
        <div className="dropdown">
          <span className="dropdown-btn">{text('Render')} ▼</span>

          <div className="dropdown-content">
            <Link href="/renderpage/ssr">{text('SSR')}</Link>
            <Link href="/renderpage/ssg">{text('SSG')}</Link>
            <Link href="/renderpage/isr">{text('ISR')}</Link>
            <Link href="/renderpage/csr">{text('CSR')}</Link>
          </div>
        </div>

        
        <div className="dropdown">
          <span className="dropdown-btn">{text('More')} ▼</span>
          <div className="dropdown-content">            
            <Link href="/company">{text('Company')}</Link>
            <Link href="/category/item">{text('Item')}</Link>
            <Link href="/hydration">{text('Hydration')}</Link>
            <Link href="/error">{text('Error')}</Link>
          </div>
        </div>




        <Link href="/dashboard">{text('Dashboard')}</Link>
        {/* Language Dropdown */}
        <div className="language-dropdown">
          <button className="language-btn">
            {selectedLanguage.flag} {selectedLanguage.name} ▼
          </button>

          <div className="language-menu">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={lang.href}                
              >
                {lang.flag} {lang.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default RootLayout;