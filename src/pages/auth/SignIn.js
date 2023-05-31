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

const SignIn = memo(() => {
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

  const handleSubmitSignIn = (data) => {
    toast.promise(dispatch(signInUserAPI(data)), { pending: 'Đang đăng nhập....' })
      .then(res => {
        console.log(res)
        if (!res.error) {
          navigate('/')
        }
      })
  }
   return (
      <Fragment>
         <section className="login-content">
            <Row className="m-0 align-items-center bg-white vh-100">
               <Col md="6">
                  <Row className="justify-content-center">
                     <Col md="10">
                        <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                           <Card.Body>
                           <Row>
                              <Col lg="12" className='d-flex  align-items-center justify-content-start'>
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
                              <h3 className="mb-2 mr text-center mt-5">Đăng Nhập</h3>
                              <p className="text-center mb-4">Đăng nhập để giữ kêt nối.</p>
                              <Form onSubmit={handleSubmit(handleSubmitSignIn)}>
                                 <Row>
                                    <Col lg="12">
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
                                    <Col lg="12" className="">
                                       <Form.Group className="form-group">
                                          <i className="fa fa-envelope"></i>
                                          <Form.Label htmlFor="password" className="">Mật khẩu</Form.Label>
                                          <Form.Control 
                                            type="password" 
                                            className="" 
                                            id="password" 
                                            autoComplete={false}
                                            autoSave='off'
                                            autoFocus='off'
                                            placeholder="Nhập mật khẩu..."
                                            {...register('password', {
                                              required: FIELD_REQUIRED_MESSAGE,
                                              pattern: {
                                                value: PASSWORD_RULE,
                                                message: PASSWORD_RULE_MESSAGE
                                              }
                                            })}
                                          />
                                          <div className='mt-1'>
                                            {errors.password && (
                                              <Form.Text className="text-danger text-error">
                                                {errors.password.message}
                                              </Form.Text>
                                            )}
                                          </div>
                                       </Form.Group>
                                    </Col>
                                    <Col lg="12" className="d-flex justify-content-between mt-2">
                                       <Form.Check className="form-check mb-3">
                                          <i className="fa fa-lock"></i>
                                          <Form.Check.Input type="checkbox" id="customCheck1" />
                                          <Form.Check.Label htmlFor="customCheck1">Lưu mật khẩu</Form.Check.Label>
                                       </Form.Check>
                                       <Link to="/send-email">Quên mật khẩu?</Link>
                                    </Col>
                                 </Row>
                                 <div className="d-flex justify-content-center mt-4">
                                    <Button type="submit" variant="btn btn-primary" className='promise-send-btn'>Đăng nhập</Button>
                                 </div> 
                              </Form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Col>
               <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden pe-none">
                  <Image src={randomImage} className="Image-fluid gradient-main animated-scaleX pe-none" alt="images" />
               </Col>
            </Row>
         </section>
      </Fragment>
   )
}
)

SignIn.displayName = "SignIn"
export default SignIn
