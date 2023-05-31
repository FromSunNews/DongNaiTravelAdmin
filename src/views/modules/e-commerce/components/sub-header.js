import  React,{memo,Fragment} from 'react'

//Components
import Card from '../../../../components/bootstrap/card'

const SubHeader = memo((props) => {
    return(
        <Fragment>
            <Card className="bg-transparent shadow-none">
                <Card.Body className="p-0">
                    <div className="d-flex justify-content-between align-items-center flex-wrap ">
                        <div className="d-flex flex-column mb-4 mb-md-0">
                            <h3>Store Overview</h3>
                            <small>Welcome back to Dashboard</small>
                        </div>
                        <div className="d-flex justify-content-between align-items-center p-3 gap-4 rounded pb-0">
                            <div>
                                <h5>27&deg;</h5>
                                <h6 className="mb-0">Mumbai, India</h6>
                            </div>
                            <div className=" iq-product-weather d-flex gap-2">
                                <div className=" d-flex flex-column align-items-center">
                                    <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 44 44" fill="none">
                                        <path d="M21.9997 7.33337C27.1644 7.33337 30.0936 10.5397 30.5189 14.41H30.6488C33.9719 14.41 36.6663 16.9299 36.6663 20.0384C36.6663 23.1469 33.9719 25.6667 30.6488 25.6667L29.1759 25.6647V25.6667C25.2806 25.6667 18.4961 25.6667 13.3505 25.6667C10.0275 25.6667 7.33301 23.1469 7.33301 20.0384C7.33301 17.0439 9.83053 14.5974 12.9839 14.4202L13.4804 14.41C13.91 10.5132 16.8349 7.33337 21.9997 7.33337Z" fill="currentColor"></path>
                                        <path d="M25.6663 32.5926V36.6667M18.333 18.3334V22.4074V18.3334ZM18.333 28.5186V32.5926V28.5186ZM25.6663 22.4074V26.4815V22.4074Z" stroke="#EBEEFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <h6 className="mt-1 mb-0">48%</h6>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 44 44" fill="none">
                                        <path d="M9.1665 14.6667H24.7498C25.6013 14.6829 26.4405 14.4617 27.1732 14.0277C27.9059 13.5937 28.5033 12.9642 28.8982 12.2097C29.2931 11.4552 29.4701 10.6056 29.4091 9.75613C29.3482 8.9067 29.0517 8.09105 28.5531 7.40066C28.0545 6.71028 27.3734 6.17246 26.5862 5.84754C25.799 5.52262 24.9369 5.42344 24.0965 5.56113C23.2561 5.69882 22.4706 6.06794 21.8283 6.62707C21.1859 7.18621 20.7121 7.91325 20.4598 8.72665" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M5.5 22H33.9167C34.7681 21.9837 35.6073 22.2049 36.34 22.6389C37.0728 23.0729 37.6701 23.7025 38.065 24.457C38.46 25.2115 38.6369 26.0611 38.5759 26.9105C38.515 27.7599 38.2186 28.5756 37.72 29.266C37.2214 29.9564 36.5403 30.4942 35.7531 30.8191C34.9659 31.144 34.1037 31.2432 33.2633 31.1055C32.4229 30.9678 31.6375 30.5987 30.9951 30.0396C30.3528 29.4804 29.8789 28.7534 29.6267 27.94" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M7.3335 29.3333H17.4168C18.2683 29.317 19.1074 29.5383 19.8402 29.9723C20.5729 30.4063 21.1703 31.0358 21.5652 31.7903C21.9601 32.5448 22.137 33.3944 22.0761 34.2439C22.0151 35.0933 21.7187 35.9089 21.2201 36.5993C20.7215 37.2897 20.0404 37.8275 19.2532 38.1524C18.466 38.4774 17.6039 38.5765 16.7635 38.4389C15.9231 38.3012 15.1376 37.932 14.4953 37.3729C13.8529 36.8138 13.3791 36.0867 13.1268 35.2733" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <h6 className="mt-1 mb-0">12 km/h</h6>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 44 44" fill="none">
                                        <path d="M12.4664 20.1667C11.5023 21.839 10.9952 23.7355 10.9961 25.6659C10.997 27.5962 11.5058 29.4923 12.4715 31.1637C13.4372 32.8351 14.8257 34.223 16.4976 35.1879C18.1694 36.1528 20.0658 36.6608 21.9961 36.6608C23.9264 36.6608 25.8228 36.1528 27.4946 35.1879C29.1665 34.223 30.555 32.8351 31.5207 31.1637C32.4864 29.4923 32.9952 27.5962 32.9961 25.6659C32.997 23.7355 32.4899 21.839 31.5258 20.1667L21.9979 5.5L12.4646 20.1667H12.4664Z" fill="currentColor"></path>
                                        <path d="M26.6091 31.2369V31.2369C26.5668 31.0401 26.6123 30.8327 26.7351 30.6634C26.8579 30.494 27.0471 30.3775 27.2585 30.3412V30.3412C27.9401 30.1705 28.4461 29.6116 28.5173 28.9509C28.5133 28.5458 28.8559 28.2027 29.2841 28.1828C29.7045 28.16 30.0551 28.4603 30.0716 28.8574C30.0772 28.9066 30.073 28.9566 30.0593 29.0049C29.9389 30.3235 28.9259 31.4423 27.5622 31.7628C27.3576 31.8188 27.1406 31.7943 26.9609 31.6952C26.7812 31.596 26.6543 31.4306 26.6091 31.2369Z" fill="white"></path>
                                    </svg>
                                    <h6 className="mt-1 mb-0">50</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

SubHeader.displayName="SubHeader"
export default SubHeader

