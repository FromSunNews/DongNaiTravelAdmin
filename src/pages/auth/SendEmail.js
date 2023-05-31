import React,{ memo, Fragment, useState, useEffect } from 'react'

//react-bootstrap
import { Row, Col, Image, Form, Button } from 'react-bootstrap'

//router
import { Link, useNavigate } from 'react-router-dom'

//components
import Card from '../../components/bootstrap/card'

// img
import landscape1 from '../../assets/images/auth/landscape1.jpg'
import landscape2 from '../../assets/images/auth/landscape2.jpg'
import landscape3 from '../../assets/images/auth/landscape3.png'
import landscape4 from '../../assets/images/auth/landscape4.png'
import landscape5 from '../../assets/images/auth/landscape5.png'
import landscape6 from '../../assets/images/auth/landscape6.png'
import landscape7 from '../../assets/images/auth/landscape7.jpg'
import landscape8 from '../../assets/images/auth/landscape8.jpg'
import landscape9 from '../../assets/images/auth/landscape9.jpg'
import landscape10 from '../../assets/images/auth/landscape10.jpg'
// logo
import logo_light from '../../assets/logo/light.png'
import logo_dark from '../../assets/logo/dark.png'

// Import selectors & action from setting store
import * as SettingSelector from '../../redux/settings/settingsSlice'


// Redux Selector / Action
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { signInUserAPI } from '../../redux/user/userSlice'
import { useForm } from 'react-hook-form'
import { EMAIL_RULE, EMAIL_RULE_MESSAGE, FIELD_REQUIRED_MESSAGE, PASSWORD_RULE, PASSWORD_RULE_MESSAGE } from '../../utilities/validators'
import { sendEmailAPI } from '../../api'


const SendEmail = memo(() => {
  const themeScheme = useSelector(SettingSelector.theme_scheme)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const arrImage = [landscape1, landscape2, landscape3, landscape4, landscape5, landscape6, landscape7, landscape8, landscape9, landscape10]
  const [randomImage, setRandomImage] = useState(arrImage[Math.floor(Math.random() * arrImage.length)])

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomImage(arrImage[Math.floor(Math.random() * arrImage.length)]);
    }, 10000)
    
    return () => clearInterval(interval);
  }, [arrImage])

  const handleSubmitSendEmail = (data) => {
    toast.promise(sendEmailAPI(data), { pending: 'Đang gửi....' })
    .then((res) => {
      if (res.isSendEmail) {
        navigate('/sent-email', { state: { email: data.email} })
      }
    })
  }
   return (
      <Fragment>
         <section className="login-content">
            <Row className="m-0 align-items-center bg-white vh-100">
               <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                  <Image src={randomImage} className="img-fluid gradient-main animated-scaleX" alt="images" />
               </Col>
               <Col md="6" className="p-5">
                  <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
                     <Card.Body>
                     <Row>
                        <Col lg="12" className='d-flex align-items-center justify-content-start'>
                           <Link to="/">
                              <img src={themeScheme === 'light' ? logo_dark : logo_light} className="rounded me-2" alt="logo" loading="lazy" width={60} height={60}/>
                           </Link>
                           <div>
                              <h6 className="logo-title mb-0 fw-bold">DongNaiTravel</h6>
                              <div className="text-wrap mt-1 mb-0 logo-subtitle" style={{
                              fontSize: '12px',
                              fontWeight: '550'
                              }}>Mang đến sự tiện lợi</div>
                           </div>
                        </Col>
                     </Row>
                        <h2 className="mb-2 mt-4">Đặt lại mật khẩu</h2>
                        <p>Nhập vào email của bạn và sau đó chúng tôi sẽ gửi đến email của bạn với đường dẫn đặt lại mật khẩu</p>
                        <Form onSubmit={handleSubmit(handleSubmitSendEmail)}>
                           <Row>
                              <Col lg="12" className="col-lg-12">
                                 <Form.Group className="form-group">
                                    <Form.Label htmlFor="email" className="">Email</Form.Label>
                                    <Form.Control 
                                       type="email" 
                                       id="email" 
                                       placeholder="Nhập email..."
                                       autoComplete='off'
                                       autoFocus='off'
                                       {...register('email', {
                                       required: FIELD_REQUIRED_MESSAGE,
                                       pattern:{
                                          value: EMAIL_RULE,
                                          message: EMAIL_RULE_MESSAGE
                                       }
                                       })}
                                    />
                                    <div className='mt-1'>
                                       {errors.email && (
                                       <Form.Text className="text-danger text-error">
                                          {errors.email.message}
                                       </Form.Text>
                                       )}
                                    </div>
                                 </Form.Group>
                              </Col>
                           </Row>
                           <Button className="mt-4 promise-send-btn" type="submit" variant="primary">Gửi email</Button>
                        </Form>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </section>
      </Fragment>
   )
}
)
export default SendEmail
