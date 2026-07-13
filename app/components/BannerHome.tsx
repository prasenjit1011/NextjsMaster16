"use client";


import { useLocale, useTranslations } from "next-intl";

export default function BannerHome() {
    const locale = useLocale();
    const text = useTranslations("HomePage");

    console.log("Locale:", locale);
    console.log("Translation:", text("100OrganicFoods"));

  return (
    <div className="container-fluid py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row g-5 align-items-center">

          <div className="col-md-12 col-lg-7">

            <h4 className="mb-3 text-secondary">
              {text("100OrganicFoods")}45
            </h4>

            <h1 className="mb-5 display-3 text-primary">
              {text("OrganicVeggiesFruitsFoods")}
            </h1>

            <div className="position-relative mx-auto">

              <input
                className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                type="text"
                placeholder={text("Search")}
              />

              <button
                type="button"
                className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                style={{
                  top: 0,
                  right: "25%",
                }}
              >
                {text("SubmitNow")}
              </button>

            </div>

          </div>

          <div className="col-md-12 col-lg-5">

            <div
              id="carouselId"
              className="carousel slide position-relative"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">

                <div className="carousel-item active rounded">

                  <img
                    src="/eshop/img/hero-img-1.png"
                    className="img-fluid w-100 h-100 bg-secondary rounded"
                    alt=""
                  />

                  <a href="#" className="btn px-4 py-2 text-white rounded">
                    {text("Fruites")}
                  </a>

                </div>

                <div className="carousel-item rounded">

                  <img
                    src="/eshop/img/hero-img-2.jpg"
                    className="img-fluid w-100 h-100 rounded"
                    alt=""
                  />

                  <a href="#" className="btn px-4 py-2 text-white rounded">
                    {text("Vesitables")}
                  </a>

                </div>

              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}