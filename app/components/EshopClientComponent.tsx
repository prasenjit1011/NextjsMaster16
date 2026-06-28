// 'use client';

// import { useEffect } from 'react';
// import 'owl.carousel/dist/assets/owl.carousel.css';

// export const ComponentTestimonial = () => {
//     useEffect(() => {
//         let jquery: any;

//         const loadCarousel = async () => {
//             jquery = (await import('jquery')).default;

//             // Make jQuery globally available
//             (window as any).$ = jquery;
//             (window as any).jQuery = jquery;

//             await import('owl.carousel');

//             // Prevent duplicate initialization
//             if (jquery('.testi').hasClass('owl-loaded')) {
//                 jquery('.testi').trigger('destroy.owl.carousel');
//                 jquery('.testi').removeClass('owl-loaded');
//                 jquery('.testi').find('.owl-stage-outer').children().unwrap();
//             }

//             jquery('.testi').owlCarousel({
//                 autoplay: true,
//                 smartSpeed: 2000,
//                 center: false,
//                 dots: true,
//                 loop: true,
//                 margin: 25,
//                 nav: true,
//                 navText: [
//                     '<i class="bi bi-arrow-left"></i>',
//                     '<i class="bi bi-arrow-right"></i>'
//                 ],
//                 responsive: {
//                     0: { items: 1 },
//                     576: { items: 1 },
//                     768: { items: 1 },
//                     992: { items: 2 },
//                     1200: { items: 2 }
//                 }
//             });
//         };

//         loadCarousel();

//         return () => {
//             if ((window as any).$) {
//                 (window as any)
//                     .$('.testi')
//                     .trigger('destroy.owl.carousel');
//             }
//         };
//     }, []);

//     const arr = [1, 2, 3, 4, 5, 6];

//     return (
//         <div style={{ marginTop: '20px' }}>
//             <div className="owl-carousel testi testimonial-carousel">
//                 {arr.map((x) => (
//                     <div
//                         key={`testimonial-${x}`}
//                         className="testimonial-item img-border-radius bg-light rounded p-4"
//                     >
//                         <div className="position-relative">
//                             <i
//                                 className="fa fa-quote-right fa-2x text-secondary position-absolute"
//                                 style={{ bottom: '30px', right: '0' }}
//                             ></i>

//                             <div className="mb-4 pb-4 border-bottom border-secondary">
//                                 <p className="mb-0">
//                                     Lorem Ipsum is simply dummy text of the
//                                     printing Ipsum has been the industry's
//                                     standard dummy text ever since the 1500s.
//                                 </p>
//                             </div>

//                             <div className="d-flex align-items-center flex-nowrap">
//                                 <div className="bg-secondary rounded">
//                                     <img
//                                         src="/eshop/img/testimonial-1.jpg"
//                                         className="img-fluid rounded"
//                                         style={{
//                                             width: '100px',
//                                             height: '100px'
//                                         }}
//                                         alt="testimonial"
//                                     />
//                                 </div>

//                                 <div className="ms-4 d-block">
//                                     <h4 className="text-dark">
//                                         Client Name
//                                     </h4>

//                                     <p className="m-0 pb-3">
//                                         Profession
//                                     </p>

//                                     <div className="d-flex pe-5">
//                                         <i className="fas fa-star text-primary"></i>
//                                         <i className="fas fa-star text-primary"></i>
//                                         <i className="fas fa-star text-primary"></i>
//                                         <i className="fas fa-star text-primary"></i>
//                                         <i className="fas fa-star"></i>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };