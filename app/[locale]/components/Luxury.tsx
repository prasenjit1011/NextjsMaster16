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

export default Luxury;