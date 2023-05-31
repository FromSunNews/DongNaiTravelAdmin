import React,{useState,memo,Fragment} from 'react'

//React-bootstrap
import {Image} from 'react-bootstrap' 

//Router
import {Link} from 'react-router-dom'

//Fslightbox
import FsLightbox from 'fslightbox-react';

const Profileimages1 = memo((props) => {
    const [imageController, setImageController] = useState({
        toggler: false,
        slide: 1
    });
    
    function imageOnSlide(number) {
        setImageController({
        toggler: !imageController.toggler,
        slide: number
        }); 
    }
    return (
        <Fragment>
            <FsLightbox
                toggler={imageController.toggler}
                sources={[props.profileimagesimg]}
                slide={imageController.slide}
            />
            <div className="user-images position-relative overflow-hidden">
                <Link onClick={() => imageOnSlide()} to="#">
                    <Image src={props.profileimagesimg} className="img-fluid rounded" alt="Responsive image" loading="lazy" />
                </Link>
                <div className="image-hover-data">
                    <div className="product-elements-icon">
                        <ul className="d-flex align-items-center m-0 p-0 list-inline">
                            <li><Link to="#" className="ps-3 text-white d-flex justify-content-center align-items-center">
                                {props.profileimagesdetail1}
                                <svg width="20" className="ms-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M11.7761 21.8374C9.49311 20.4273 7.37081 18.7645 5.44807 16.8796C4.09069 15.5338 3.05404 13.8905 2.41735 12.0753C1.27971 8.53523 2.60399 4.48948 6.30129 3.2884C8.2528 2.67553 10.3752 3.05175 12.0072 4.29983C13.6398 3.05315 15.7616 2.67705 17.7132 3.2884C21.4105 4.48948 22.7436 8.53523 21.606 12.0753C20.9745 13.8888 19.944 15.5319 18.5931 16.8796C16.6686 18.7625 14.5465 20.4251 12.265 21.8374L12.0161 22L11.7761 21.8374Z" fill="currentColor"></path>
                                    <path d="M12.0109 22.0001L11.776 21.8375C9.49013 20.4275 7.36487 18.7648 5.43902 16.8797C4.0752 15.5357 3.03238 13.8923 2.39052 12.0754C1.26177 8.53532 2.58605 4.48957 6.28335 3.28849C8.23486 2.67562 10.3853 3.05213 12.0109 4.31067V22.0001Z" fill="currentColor"></path>
                                    <path d="M18.2304 9.99922C18.0296 9.98629 17.8425 9.8859 17.7131 9.72157C17.5836 9.55723 17.5232 9.3434 17.5459 9.13016C17.5677 8.4278 17.168 7.78851 16.5517 7.53977C16.1609 7.43309 15.9243 7.00987 16.022 6.59249C16.1148 6.18182 16.4993 5.92647 16.8858 6.0189C16.9346 6.027 16.9816 6.04468 17.0244 6.07105C18.2601 6.54658 19.0601 7.82641 18.9965 9.22576C18.9944 9.43785 18.9117 9.63998 18.7673 9.78581C18.6229 9.93164 18.4291 10.0087 18.2304 9.99922Z" fill="currentColor"></path>
                                </svg>
                            </Link>
                            </li>
                            <li>
                                <Link to="#" className="ps-3 text-white d-flex justify-content-center align-items-center">
                                    {props.profileimagesdetail2}
                                    <svg width="20" className="ms-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M12.02 2C6.21 2 2 6.74 2 12C2 13.68 2.49 15.41 3.35 16.99C3.51 17.25 3.53 17.58 3.42 17.89L2.75 20.13C2.6 20.67 3.06 21.07 3.57 20.91L5.59 20.31C6.14 20.13 6.57 20.36 7.081 20.67C8.541 21.53 10.36 21.97 12 21.97C16.96 21.97 22 18.14 22 11.97C22 6.65 17.7 2 12.02 2Z" fill="currentColor"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9807 13.2901C11.2707 13.2801 10.7007 12.7101 10.7007 12.0001C10.7007 11.3001 11.2807 10.7201 11.9807 10.7301C12.6907 10.7301 13.2607 11.3001 13.2607 12.0101C13.2607 12.7101 12.6907 13.2901 11.9807 13.2901ZM7.37033 13.2901C6.67033 13.2901 6.09033 12.7101 6.09033 12.0101C6.09033 11.3001 6.66033 10.7301 7.37033 10.7301C8.08033 10.7301 8.65033 11.3001 8.65033 12.0101C8.65033 12.7101 8.08033 13.2801 7.37033 13.2901ZM15.3105 12.0101C15.3105 12.7101 15.8805 13.2901 16.5905 13.2901C17.3005 13.2901 17.8705 12.7101 17.8705 12.0101C17.8705 11.3001 17.3005 10.7301 16.5905 10.7301C15.8805 10.7301 15.3105 11.3001 15.3105 12.0101Z" fill="currentColor"></path>
                                    </svg>
                                </Link>
                            </li>
                            <li><Link to="#" className="ps-3 text-white d-flex justify-content-center align-items-center">
                                {props.profileimagesdetail3}
                                <svg width="20" className="ms-1"  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M3.5 12.5645C6 7.56444 10.3333 6.73113 12.5 7.06447V13.0645C11 13.0645 7.6 13.3645 6 14.5645C4.70893 15.5328 2.89695 17.8684 2.24538 18.7343C2.18231 18.8181 2.04803 18.7632 2.06504 18.6597C2.26701 17.4306 2.90561 13.7532 3.5 12.5645Z" fill="currentcolor"/>
                                    <path d="M12.2947 16C12.4431 16 12.5893 15.9593 12.7186 15.88L21.1281 10.6625C21.3591 10.5185 21.5 10.2692 21.5 10C21.5 9.73086 21.3591 9.48151 21.1281 9.33754L12.7186 4.12003C12.4738 3.96876 12.1644 3.95937 11.9111 4.09813C11.6568 4.23584 11.5 4.49771 11.5 4.78252L11.5 15.2175C11.5 15.5024 11.6568 15.7642 11.9111 15.9019C12.0309 15.9677 12.1633 16 12.2947 16Z" fill="currentcolor"/>
                                </svg>
                            </Link></li>
                        </ul>
                    </div>
                </div>
                <Link to="#" className="image-edit-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit or Remove">
                    <svg width="15" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                        <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                        <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                    </svg>
                </Link>
            </div>
        </Fragment>
    )
})

Profileimages1.displayName="Profileimages1"
export default Profileimages1



