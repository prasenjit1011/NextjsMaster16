import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import LanguageSwitcher from './LanguageSwitcher';
import { ProductFilterB } from './EshopClientComponent';
// import { ComponentTestimonial } from './EshopClientComponent';

const languages = [
    { code: "ar", name: "العربية", flag: "🇸🇦", href: "/ar" },
  { code: "en", name: "English", flag: "🇬🇧", href: "/en" },
  { code: "bn", name: "বাংলা", flag: "🇧🇩", href: "/bn" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳", href: "/hi" },
];



interface BannerProps {
    pageTitle: string;
}



export const Footer = () => {
    return (
        <div className="container-fluid copyright bg-dark py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2"></i>TuliOutlet</a>, All right reserved. 2026</span>
                    </div>
                    <div className="col-md-6 my-auto text-center text-md-end text-white">
                    </div>
                </div>
            </div>
        </div>
    );
}


export const NewNavBar = async () => {
    //const text = useTranslations('HomePage');
    const text = await getTranslations('HomePage');
    const locale = await getLocale();
    // const pathname = usePathname();
    const selectedLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <div className="container-fluid fixed-top">
      <div className="container topbar bg-primary d-none d-lg-block">
        <div className="d-flex justify-content-between">
          <div className="top-info ps-2">
            <small className="me-3">
              <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
              <Link href="#" className="text-white">
                {text('address')}
              </Link>
            </small>

            <small className="me-3">
              <i className="fas fa-envelope me-2 text-secondary"></i>
              <Link href="mailto:hello@tuliooutlet.shop" className="text-white">
                hello@tuliooutlet.shop
              </Link>
            </small>
          </div>

          <div className="top-link pe-2">
            <Link href="/privacy-policy" className="text-white">
              <small className="text-white mx-2">
                {text('PrivacyPolicy')}
              </small>
            </Link>
            {' / '}

            <Link href="/terms" className="text-white">
              <small className="text-white mx-2">
                {text('TermsofUse')}
              </small>
            </Link>
            {' / '}

            <Link href="/refunds" className="text-white">
              <small className="text-white ms-2">
                {text('SalesRefunds')}
              </small>
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-0">
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
          <Link href="/" className="navbar-brand">
            <h1 className="text-primary display-6">
              {text('TuliOutlet')}
            </h1>
          </Link>

          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary"></span>
          </button>

          <div
            className="collapse navbar-collapse bg-white"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto">
              <Link href="/" className="nav-item nav-link">
                {text('Home')}
              </Link>

              <Link href="/shop" className="nav-item nav-link">
                {text('Shop')}
              </Link>

              <Link href="/product" className="nav-item nav-link">
                {text('Product')}
              </Link>
              <Link href="/service" className="nav-item nav-link">
                {text('Service')}
              </Link>

              <Link href="/contact" className="nav-item nav-link">
                {text('Contact')}
              </Link>
            </div>
            <div className="d-flex m-3 me-0">
              <button
                className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fas fa-search text-primary"></i>
              </button>
              <div className="dropdown me-4 my-auto">
                

                <LanguageSwitcher />
                </div>
              <Link
                href="/cart"
                className="position-relative me-4 my-auto"
              >
                <i className="fa fa-shopping-bag fa-2x"></i>

                <span
                  className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                  style={{
                    top: '-5px',
                    left: '15px',
                    height: '20px',
                    minWidth: '20px',
                  }}
                >
                  0
                </span>
              </Link>


              
              <Link href="/dashboard" className="my-auto">
                <i className="fas fa-user fa-2x text-primary"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}



export const ProductCategory = async () => {
    //const text = useTranslations('HomePage');
    const text = await getTranslations('HomePage');

    return (
        <div className="container-fluid service py-2">
            <div className="container py-2">
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <a href="#">
                            <div className="service-item bg-secondary rounded border border-secondary">
                                <img src="/eshop/img/featur-1.jpg" className="img-fluid rounded-top w-100" alt="" />
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-primary text-center p-4 rounded">
                                        <h5 className="text-white">{text('FreshApples')}</h5>
                                        <h3 className="mb-0">{text('20OFF')}</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <a href="#">
                            <div className="service-item bg-dark rounded border border-dark">
                                <img src="/eshop/img/featur-2.jpg" className="img-fluid rounded-top w-100" alt="" />
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-light text-center p-4 rounded">
                                        <h5 className="text-primary">{text('TastyFruits')}</h5>
                                        <h3 className="mb-0">{text('Freedelivery')}</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <a href="#">
                            <div className="service-item bg-primary rounded border border-primary">
                                <img src="/eshop/img/featur-3.jpg" className="img-fluid rounded-top w-100" alt="" />
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-secondary text-center p-4 rounded">
                                        <h5 className="text-white">{text('ExoticVegitable')}</h5>
                                        <h3 className="mb-0">{text('Discount30')}</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const BannerCategory = async () => {
    //const text = useTranslations('HomePage');
    const text = await getTranslations('HomePage');


    return (
        <div className="container-fluid banner bg-secondary my-5">
            <div className="container py-5">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="py-4">
                            <h1 className="display-3 text-white">{text('FreshExoticFruits')}</h1>
                            <p className="fw-normal display-3 text-dark mb-4">{text('inOurStore')}</p>
                            <p className="mb-4 text-dark">{text('content01')}</p>
                            <a href="#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">BUY</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <img src="/eshop/img/baner-1.png" className="img-fluid w-100 rounded" alt="" />
                            <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute" style={{width: "140px", height: "140px", top: "0", left: "0"}}>
                                <h1 style={{fontSize: "100px"}}>1</h1>
                                <div className="d-flex flex-column">
                                    <span className="h2 mb-0">50$</span>
                                    <span className="h4 text-muted mb-0">kg</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const ProductRegular = async () => {
    //const text = useTranslations('HomePage');
    const text = await getTranslations('HomePage');

    let products = [];
    for (let i = 0; i < 9; i++) {
        products.push(<ProductDaily key={i} />);
    }

    return (        
        <div className="container-fluid py-2">
            <div className="container py-2">
                <div className="text-center mx-auto mb-5" style={{maxWidth: "700px"}}>
                    <h1 className="display-4">{text('DailyProducts')}</h1>
                    <p>{text('content02')}</p>
                </div>
                <div className="row g-4">
                    {products}
                </div>
            </div>
        </div>
    );
}

export function TotalSale(){
    return (        
        <div className="container-fluid">
            <div className="container">
                <div className="bg-light p-5 rounded">
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5">
                                <i className="fa fa-users text-secondary"></i>
                                <h4>satisfied customers</h4>
                                <h1>1963</h1>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5">
                                <i className="fa fa-users text-secondary"></i>
                                <h4>quality of service</h4>
                                <h1>99%</h1>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5">
                                <i className="fa fa-users text-secondary"></i>
                                <h4>quality certificates</h4>
                                <h1>33</h1>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5">
                                <i className="fa fa-users text-secondary"></i>
                                <h4>Available Products</h4>
                                <h1>789</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Testimonial(){
    return <></>
    // return (        
    //     <div className="container-fluid testimonial py-1">
    //         <div className="container py-1">
    //             <div className="testimonial-header text-center">
    //                 <h4 className="text-primary">Our Testimonial</h4>
    //                 <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
    //             </div>
    //             <ComponentTestimonial />
    //         </div>
    //     </div>
    // );
}

export function OurService(){
    return (
        <>
            
            <div className="container-fluid featurs py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fas fa-car-side fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Free Shipping</h5>
                                    <p className="mb-0">Free on order over $300</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fas fa-user-shield fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Security Payment</h5>
                                    <p className="mb-0">100% security payment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fas fa-exchange-alt fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>30 Day Return</h5>
                                    <p className="mb-0">30 day money guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fa fa-phone-alt fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>24/7 Support</h5>
                                    <p className="mb-0">Support every time fast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}





function ProductDaily(){
    const randNumber = Math.floor(Math.random()* (9 - 0 + 1));
    const imgName = "../eshop/img/p-"+randNumber+".png";
    console.log('Random Number : '+ randNumber);

    return (
        <div className="col-lg-6 col-xl-4">
            <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                    <div className="col-6">
                        <img src={imgName} className="img-fluid rounded-circle w-100" alt="" />
                    </div>
                    <div className="col-6">
                        <Link href="/product/1" className="h5">Organic Tomato</Link>
                        <div className="d-flex my-3">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4 className="mb-3">3.12 $</h4>
                        <Link href="/product/1" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}




export const ProductList = () =>{

    let products = [];
    for (let i = 0; i < 9; i++) {
        products.push(<Product key={i} boxClassName="col-md-6 col-lg-4 col-xl-3" />);
    }


    return (
        <>
            
            <div className="container-fluid zpage-header py-5"></div>
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="tab-class text-center">
                        <div className="row g-4">
                            <div className="col-lg-12 text-end">
                                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                    <li className="nav-item">
                                        <a className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                            <span className="text-dark" style={{width:" 130px"}}>All Products</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                            <span className="text-dark" style={{width: "130px"}}>Vegetables</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                            <span className="text-dark" style={{width: "130px"}}>Fruits</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                            <span className="text-dark" style={{width: "130px"}}>Bread</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                            <span className="text-dark" style={{width: "130px"}}>Meat</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            {products}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            {products}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            {products}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-4" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            {products}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-5" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            {products}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        </>
    );
}



interface ProductProps {
    boxClassName: string;
}

function Product({ boxClassName }: ProductProps) {
    const randNumber = Math.floor(Math.random()* (9 - 0 + 1));
    const imgName = "../eshop/img/best-product-"+randNumber+".jpg";

    
    return (
        <div className={boxClassName} key={'product'+1000*Math.random()}>
            <div className="rounded position-relative fruite-item">
                <div className="fruite-img">
                    <img src={imgName} className="img-fluid w-100 rounded-top" alt="" />
                </div>
                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>Grapes </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <Link href="/product/1" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export const ProductListing = () => {

    
    return (
            <>
            <div className="container-fluid zpage-header py-5"></div>
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">

                                <div className="col-xl-3">
                                    <ProductSearch boxWidth="input-group w-100 mx-auto d-flex" />
                                </div>
                                <div className="col-6"></div>
                                <div className="col-xl-3">
                                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                        <label htmlFor="fruits">Default Sorting:</label>
                                        <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                                            <option value="volvo">Nothing</option>
                                            <option value="saab">Popularity</option>
                                            <option value="opel">Organic</option>
                                            <option value="audi">Fantastic</option>
                                        </select>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="row g-4">
                                <div className="col-lg-3">
                                    <div className="row g-4">
                                        <ProductFilter />
                                    </div>
                                </div>


                                <ProductListingSearch />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export const ProductDetails = () => {
    return <h1>P DetailsLIST</h1>
}



function ProductFilter({searchFilter}){
    return (
        <>
            {searchFilter == "true" ? <ProductSearch boxWidth="input-group w-100 mx-auto d-flex mb-4" />:<></>}
            <ProductFilterA />
            <ProductFilterB />
            <ProductFilterC />
            <ProductFilterD />
            <ProductFilterE />
        </>
    );
}

function ProductFilterA(){
    return (
        <div className="col-lg-12">
            <div className="mb-3">
                <h4>Categories</h4>
                <ul className="list-unstyled fruite-categorie">
                    <li>
                        <div className="d-flex justify-content-between fruite-name">
                            <a href="#"><i className="fas fa-apple-alt me-2"></i>Apples</a>
                            <span>(3)</span>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between fruite-name">
                            <a href="#"><i className="fas fa-apple-alt me-2"></i>Oranges</a>
                            <span>(5)</span>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between fruite-name">
                            <a href="#"><i className="fas fa-apple-alt me-2"></i>Strawbery</a>
                            <span>(2)</span>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between fruite-name">
                            <a href="#"><i className="fas fa-apple-alt me-2"></i>Banana</a>
                            <span>(8)</span>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between fruite-name">
                            <a href="#"><i className="fas fa-apple-alt me-2"></i>Pumpkin</a>
                            <span>(5)</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}




function ProductFilterC(){
    return (
        <div className="col-lg-12">
            <div className="mb-3">
                <h4>Additional</h4>
                <div className="mb-2">
                    <input type="radio" className="me-2" id="Categories-1" name="Categories-1" value="Beverages" />
                    <label htmlFor="Categories-1"> Organic</label>
                </div>
                <div className="mb-2">
                    <input type="radio" className="me-2" id="Categories-2" name="Categories-1" value="Beverages" />
                    <label htmlFor="Categories-2"> Fresh</label>
                </div>
                <div className="mb-2">
                    <input type="radio" className="me-2" id="Categories-3" name="Categories-1" value="Beverages" />
                    <label htmlFor="Categories-3"> Sales</label>
                </div>
                <div className="mb-2">
                    <input type="radio" className="me-2" id="Categories-4" name="Categories-1" value="Beverages" />
                    <label htmlFor="Categories-4"> Discount</label>
                </div>
                <div className="mb-2">
                    <input type="radio" className="me-2" id="Categories-5" name="Categories-1" value="Beverages" />
                    <label htmlFor="Categories-5"> Expired</label>
                </div>
            </div>
        </div>
    );
}
    
    
function ProductFilterD(){
    let products = [];
    for (let i = 0; i < 4; i++) {
        products.push(<ProductFeature key={i} imgName={"featur-"+i+".jpg"} />);
    }


    return (
        <div className="col-lg-12">
            <h4 className="mb-3">Featured products</h4>
            {products}
            <div className="d-flex justify-content-center my-4">
                <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">Vew More</a>
            </div>
        </div>
    );
}

function ProductFeature({imgName}){
    return (
        <div className="d-flex align-items-center justify-content-start">
            <div className="rounded me-4" style={{width: "100px", height: "100px"}}>
                <img src={"/eshop/img/"+imgName} className="img-fluid rounded" alt="" />
            </div>
            <div>
                <Link href="/product/1">
                    <h6 className="mb-2">Big Oranges</h6>
                </Link>
                <div className="d-flex mb-2">
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star"></i>
                </div>
                <div className="d-flex mb-2">
                    <h5 className="fw-bold me-2">2.99 $</h5>
                    <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                </div>
            </div>
        </div>
    );
}

function ProductFilterE(){
    return (
        <div className="col-lg-12">
            <div className="position-relative">
                <img src="/eshop/img/banner-fruits.jpg" className="img-fluid w-100 rounded" alt="" />
                <div className="position-absolute" style={{top: "50%", right: "10px", transform: "translateY(-50%)"}}>
                    <h3 className="text-secondary fw-bold">Fresh <br /> Fruits <br /> Banner</h3>
                </div>
            </div>
        </div>       
    );
}




function ProductListingSearch(){
    let products = [];
    for (let i = 0; i < 9; i++) {
        products.push(<Product key={i} boxClassName="col-md-6 col-lg-6 col-xl-4" />);
    }
    return (
        <>
            <div className="col-lg-9">
                <div className="row g-4 justify-content-center">
                    {products}
                    
                    <div className="col-12">
                        <div className="pagination d-flex justify-content-center mt-5">
                            <a href="#" className="rounded">&laquo;</a>
                            <a href="#" className="active rounded">1</a>
                            <a href="#" className="rounded">2</a>
                            <a href="#" className="rounded">3</a>
                            <a href="#" className="rounded">4</a>
                            <a href="#" className="rounded">5</a>
                            <a href="#" className="rounded">6</a>
                            <a href="#" className="rounded">&raquo;</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



function ProductSearch({boxWidth}){
    return (
        <div className={boxWidth}>
            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
            <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
        </div>
    );
}



