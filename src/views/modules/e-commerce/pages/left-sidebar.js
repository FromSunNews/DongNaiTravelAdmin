import  React,{memo,Fragment} from 'react';

// React-bootstrap
import {Row, Col,Button, Image, Nav} from 'react-bootstrap';

// Router
import {Link} from 'react-router-dom';

//Components
import Card from '../../../../components/bootstrap/card'
import ProductCard from "../components/product-card"
import ProductCardListView from "../components/product-card-list-view"
import FilterRating from "../components/filter-rating"
import FilterOptions from "../components/filter-options"
import ProductSlider from "../components/product-slider"
import SubHeader from '../components/sub-header'
import OfferCard from '../components/offer-card'
import RangeSlider from '../components/range-slider'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';

//Img
import img1 from '../../../../assets/modules/e-commerce/images/01.png';
import img2 from '../../../../assets/modules/e-commerce/images/02.png';
import img3 from '../../../../assets/modules/e-commerce/images/03.png';
import img4 from '../../../../assets/modules/e-commerce/images/04.png';
import img5 from '../../../../assets/modules/e-commerce/images/05.png';
import img6 from '../../../../assets/modules/e-commerce/images/06.png';
import img7 from '../../../../assets/modules/e-commerce/images/offers/06.png';
import img8 from '../../../../assets/modules/e-commerce/images/offers/07.png';
import img9 from '../../../../assets/modules/e-commerce/images/offers/09.png';
import img10 from '../../../../assets/modules/e-commerce/images/offers/10.png';
import img11 from '../../../../assets/modules/e-commerce/images/2.png';
import img12 from '../../../../assets/modules/e-commerce/images/1.png';


SwiperCore.use([Autoplay]);

const Leftsidebar = memo(() => {
    return (
        <Fragment>
            <SubHeader />
            <div className="mt-4 mb-4">
                <Row>
                    <Col lg="3">
                        <Card className="iq-custom-card">
                            <div className="card-header border-bottom">
                                <h4 className="list-main mb-0">Filters</h4>
                            </div>
                            <Card.Body>
                                <Link className="bg-transparent iq-custom-collapse w-100 d-flex justify-content-between pb-3" data-bs-toggle="collapse" to="#iq-product-filter-01" role="button" aria-expanded="true" aria-controls="iq-product-filter-01">
                                    <h5 className="mb-0">Categories</h5>
                                    <i className="right-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </i>
                                </Link>
                                <div className="collapse show" id="iq-product-filter-01">
                                    <div className="mt-2">
                                        <span>Price</span>
                                          <RangeSlider />
                                        <div className="product-ratings mt-2">
                                            <h5 className="py-3 mb-0">
                                                Avg. Customer Review
                                            </h5>
                                            <div>
                                                <FilterRating id="01" count={5} count1={0} productChecked="Checked" />
                                                <FilterRating id="02" count={4} count1={1}/>
                                                <FilterRating id="03" count={3} count1={2}/>
                                                <FilterRating id="04" count={2} count1={3}/>
                                                <FilterRating id="05" count={1} count1={4}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link className="bg-transparent d-flex justify-content-between iq-custom-collapse py-3" data-bs-toggle="collapse" to="#iq-product-filter-02" role="button" aria-expanded="true" aria-controls="iq-product-filter-02">
                                    <h5 className="mb-0">Type</h5>
                                    <i className="right-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </i>
                                </Link>
                                <div className="collapse show" id="iq-product-filter-02">
                                    <FilterOptions uniqueName="type" id="01" productName="Accessories" productChecked="Checked" />
                                    <FilterOptions uniqueName="type" id="02" productName="Bags" />
                                    <FilterOptions uniqueName="type" id="03" productName="Men's Fashion" />
                                    <FilterOptions uniqueName="type" id="04" productName="Women's Fashion" />
                                    <FilterOptions uniqueName="type" id="05" productName="Fashion" />
                                </div>
                                <Link className="bg-transparent d-flex justify-content-between iq-custom-collapse py-3" data-bs-toggle="collapse" to="#iq-product-filter-03" role="button" aria-expanded="true" aria-controls="iq-product-filter-03">
                                    <h5 className="mb-0">Discount</h5>
                                    <i className="right-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </i>
                                </Link>
                                <div className="collapse show" id="iq-product-filter-03">
                                    <FilterOptions uniqueName="discount" id="01" productName="80% Off" />
                                    <FilterOptions uniqueName="discount" id="02" productName="50% Off" />
                                    <FilterOptions uniqueName="discount" id="03" productName="40% Off" />
                                    <FilterOptions uniqueName="discount" id="04" productName="30% Off" />
                                    <FilterOptions uniqueName="discount" id="05" productName="20% Off" />
                                    <FilterOptions uniqueName="discount" id="06" productName="10% Off" productChecked="Checked" />
                                </div>
                                <Link className="bg-transparent d-flex justify-content-between iq-custom-collapse pt-3" data-bs-toggle="collapse" to="#iq-product-filter-04" role="button" aria-expanded="true" aria-controls="iq-product-filter-04">
                                    <h5 className="mb-0">Sellers</h5>
                                    <i className="right-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </i>
                                </Link>
                                <div className="collapse show mt-3" id="iq-product-filter-04">
                                    <FilterOptions uniqueName="sellers" id="01" productName="Max" />
                                    <FilterOptions uniqueName="sellers" id="02" productName="Ajio" />
                                    <FilterOptions uniqueName="sellers" id="03" productName="Levi's" />
                                    <FilterOptions uniqueName="sellers" id="04" productName="Woodie" />
                                    <FilterOptions uniqueName="sellers" id="05" productName="Denim" />
                                </div>
                            </Card.Body>
                        </Card>
                        <div className="overflow-hidden collection-slider">
                            <Swiper className="p-0 m-0 mb-4 swiper-wrapper list-inline"
                                slidesPerView= {1}
                                loop= {true}
                                centeredSlides= {true}
                                autoplay= {true}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                spaceBetween= {8}
                                breakpoints= {{
                                    320: { slidesPerView: 1 },
                                    550: { slidesPerView: 1 },
                                    991: { slidesPerView: 1 },
                                    1400: { slidesPerView: 1 },
                                    1500: { slidesPerView: 1 },
                                    1920: { slidesPerView: 1 },
                                    2040: { slidesPerView: 1 },
                                    2440: { slidesPerView: 1 }
                                }}>
                                <SwiperSlide className="card-slide">
                                    <Card>
                                        <Card.Body>
                                            <div className="d-flex justify-content-center">
                                                <Image src={img11} className="img-fluid object-contain avatar-100" alt="product"/>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="text-primary">
                                                    New Collection for you
                                                </h6>
                                                <p className="small">Get 20 % off on Headphones</p>
                                                <Button className="btn btn-primary" type="submit">View Now</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide className="card-slide">
                                    <Card>
                                        <Card.Body>
                                            <div className="d-flex justify-content-center">
                                                <Image src={img12} className="img-fluid object-contain avatar-100" alt="product"/>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="text-primary">
                                                    New Collection for you
                                                </h6>
                                                <p className="small">Get 20 % off on Biker's Jacket</p>
                                                <Button className="btn btn-primary" type="submit">View Now</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </div>  
                    </Col>
                    <Col lg="9">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="mb-0">Trending Items</h4>
                            <Nav as="ul" className="nav-pills mb-0 iq-product-filter d-flex bg-transparent" id="pills-tab" role="tablist">
                                <Nav.Item as="li" className="dropdown d-xl-block">
                                    <div className="input-group ">
                                        <input type="search" className="form-control iq-ecom-searchbox" placeholder="Search..."/>
                                        <span className="iq-ecom-search" >
                                            <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                                <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </Nav.Item>
                                <Nav.Item as="li" role="presentation">
                                    <Button bsPrefix="nav-link iq-filter active" id="grid-view-tab" data-bs-toggle="pill" data-bs-target="#pills-grid-view" to="#" role="tab" aria-controls="pills-grid-view" aria-selected="true">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1 4.5C1 1.87479 1.02811 1 4.5 1C7.97189 1 8 1.87479 8 4.5C8 7.12521 8.01107 8 4.5 8C0.988927 8 1 7.12521 1 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 4.5C12 1.87479 12.0281 1 15.5 1C18.9719 1 19 1.87479 19 4.5C19 7.12521 19.0111 8 15.5 8C11.9889 8 12 7.12521 12 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1 15.5C1 12.8748 1.02811 12 4.5 12C7.97189 12 8 12.8748 8 15.5C8 18.1252 8.01107 19 4.5 19C0.988927 19 1 18.1252 1 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 15.5C12 12.8748 12.0281 12 15.5 12C18.9719 12 19 12.8748 19 15.5C19 18.1252 19.0111 19 15.5 19C11.9889 19 12 18.1252 12 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Button>
                                </Nav.Item>
                                <Nav.Item as="li" role="presentation">
                                    <Button bsPrefix="nav-link iq-filter" id="list-view-tab" data-bs-toggle="pill" data-bs-target="#pills-list-view" to="#" role="tab" aria-controls="pills-list-view" aria-selected="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.0144 3.99976C3.0144 3.44753 2.5634 2.99976 2.0072 2.99976C1.451 2.99976 1 3.44753 1 3.99976C1 4.55198 1.451 4.99976 2.0072 4.99976C2.5634 4.99976 3.0144 4.55198 3.0144 3.99976Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7.00952 3.66659H15.0095" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.0144 7.66626C3.0144 7.11404 2.5634 6.66626 2.0072 6.66626C1.451 6.66626 1 7.11404 1 7.66626C1 8.21848 1.451 8.66626 2.0072 8.66626C2.5634 8.66626 3.0144 8.21848 3.0144 7.66626Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7.00952 7.99959H15.0095" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.0144 11.6663C3.0144 11.114 2.5634 10.6663 2.0072 10.6663C1.451 10.6663 1 11.114 1 11.6663C1 12.2185 1.451 12.6663 2.0072 12.6663C2.5634 12.6663 3.0144 12.2185 3.0144 11.6663Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7.00952 11.9996H15.0095" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Button>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-grid-view" role="tabpanel" aria-labelledby="grid-view-tab">
                                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                                    <Col>
                                        <ProductCard productName="Casual Shoes" productImage={img1} productRating="3.5"  productPrice="$56.00" />
                                    </Col>
                                    <Col>
                                        <ProductCard productName="Biker's Jacket" productImage={img2} productRating="3.5"  productPrice="$56.00" statusDetails="New" statusColor="primary"  />
                                    </Col>
                                    <Col>
                                        <ProductCard productName="Knitted Shrug" productImage={img3} productRating="3.5"  productPrice="$56.00" />
                                    </Col>
                                    <Col>
                                        <ProductCard productName="Blue Handbag" productImage={img4} productRating="3.5"  productPrice="$56.00" />
                                    </Col>
                                    <Col>
                                        <ProductCard productName="Pink Sweater" productImage={img5} productRating="3.5"  productPrice="$56.00" statusDetails="Sold" statusColor="warning" />
                                    </Col>
                                    <Col>
                                        <ProductCard productName="Pink Handbag" productImage={img6} productRating="3.5"  productPrice="$56.00" />
                                    </Col>
                                </Row>
                            </div>
                            <div className="tab-pane fade" id="pills-list-view" role="tabpanel" aria-labelledby="list-view-tab">
                                <Row className="row-cols-1">
                                    <Col>
                                        <ProductCardListView productName="Casual Shoes" productImage={img1} productRating="3.9" productPrice="$56.00" statusColor="success" statusIdentity="In Stock" deliveryDate="Thu Jan 30" replaceTime="10" />
                                        <ProductCardListView productName="Biker's Jacket" productImage={img2} productRating="3.5" productPrice="$65.00" statusColor="danger" statusIdentity="Out of Stock" deliveryDate="Thu Jan 31" replaceTime="10" />
                                        <ProductCardListView productName="Knitted Shrug" productImage={img3} productRating="3.5" productPrice="$65.00" statusColor="warning" statusIdentity="Limited" deliveryDate="Thu Jan 22" replaceTime="20" />
                                        <ProductCardListView productName="Blue Handbag" productImage={img4} productRating="3.5" productPrice="$65.00" statusColor="success" statusIdentity="In Stock" deliveryDate="Thu Jan 25" replaceTime="15" />
                                        <ProductCardListView productName="Pink Triusers" productImage={img5} productRating="3.5" productPrice="$65.00" statusColor="success" statusIdentity="In Stock" deliveryDate="Thu Jan 26" replaceTime="10" />
                                        <ProductCardListView productName="Pink Handbag" productImage={img6} productRating="3.5" productPrice="$65.00" statusColor="success" statusIdentity="In Stock" deliveryDate="Thu Jan 25" replaceTime="05" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="mb-0">Offers</h4>
                            <Link to="/e-commerce/categories-list" className="h6">View All</Link>
                        </div>
                        <div className="mt-3">
                            <div className="iq-product-offers">
                                <OfferCard className="product-item1" header="Get Up TO 50%" subHeader="For The Holiday Session" link="Shop now" img={img7} />
                                <OfferCard className="product-item2" header="Get Up TO 50%" subHeader="For The Holiday Session" link="Shop now" img={img8} />
                                <OfferCard className="product-item3 mb-4" header="Get Up TO 50%" subHeader="For The Holiday Session" link="Shop now" img={img10} />
                                <OfferCard className="product-item4 mb-4" header="Get Up TO 50%" subHeader="For The Holiday Session" link="Shop now" img={img9} />
                            </div>
                        </div>
                    </Col>
                    <ProductSlider/>
                </Row>
            </div>
        </Fragment>
    )
})
Leftsidebar.displayName="Leftsidebar"
export default Leftsidebar
