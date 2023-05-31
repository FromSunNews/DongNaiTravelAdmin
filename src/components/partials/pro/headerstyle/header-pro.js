import React,{ useState, useEffect, memo } from 'react'

//react-bootstrap
import { Navbar, Container, Nav, Dropdown, Form, Image, Button, Collapse } from 'react-bootstrap'

//router
import { Link, useLocation } from 'react-router-dom'

//component
import CustomToggle from "../../../dropdowns"
import Card from "../../../bootstrap/card"
import Modalpopup from '../../../../views/modules/auth/components/modal-popup'

//img
import img1 from "../../../../assets/images/shapes/01.png"
import img2 from "../../../../assets/images/shapes/02.png"
import img3 from "../../../../assets/images/shapes/03.png"
import img4 from "../../../../assets/images/shapes/04.png"

// logo
import Logo from '../../components/logo'

// Redux Selector / Action
import { useDispatch, useSelector } from 'react-redux';


// Import selectors & action from setting store
import * as SettingSelector from '../../../../redux/settings/settingsSlice'
import { theme_scheme } from '../../../../redux/settings/actions';

import RadioBtn from '../../../setting/elements/radio-btn'
import { signOutUserAPI } from '../../../../redux/user/userSlice'

const Headerpro = memo((props) => {
    const dispatch = useDispatch()

    const navbarHide = useSelector(SettingSelector.navbar_show); // array
    const themeFontSize = useSelector(SettingSelector.theme_font_size)
    const headerNavbar = useSelector(SettingSelector.header_navbar)
    const themeScheme = useSelector(SettingSelector.theme_scheme)

    useEffect(() => {

        if (headerNavbar === 'navs-sticky' || headerNavbar === 'nav-glass') {
            window.onscroll = () => {
                if (document.documentElement.scrollTop > 50) {
                    document.getElementsByTagName('nav')[0].classList.add('menu-sticky')
                } else {
                    document.getElementsByTagName('nav')[0].classList.remove('menu-sticky')
                }
            }
        }

        document.getElementsByTagName('html')[0].classList.add(themeFontSize)


        //offcanvase code
        const result = window.matchMedia("(max-width: 1200px)");
        window.addEventListener('resize',
            () => {
                if (result.matches === true) {
                    if (show1 === true) {
                        document.documentElement.style.setProperty('overflow', 'hidden');
                    }
                    else {
                        document.documentElement.style.removeProperty('overflow')
                    }

                }
                else {
                    document.documentElement.style.removeProperty('overflow')
                }

            }
        )
        if (window.innerWidth <= '1200') {
            if (show1 === true) {
                document.documentElement.style.setProperty('overflow', 'hidden');
            }
            else {
                document.documentElement.style.removeProperty('overflow')
            }

        }
        else {
            document.documentElement.style.removeProperty('overflow')
        }

    })

    const [show, setShow] = useState(true)

    const [show1, setShow1] = useState(false);

    //collapse
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);
    const [open13, setOpen13] = useState(false);
    const [open14, setOpen14] = useState(false);
    const [open15, setOpen15] = useState(false);
    const [open16, setOpen16] = useState(false);
    const [open17, setOpen17] = useState(false);

    //fullscreen
    const fullscreen = () => {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen()
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen()
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen()
            }
        }
    }

    //change theme
    const handleChangeTheme = () => {
        if (themeScheme === 'light')
            dispatch(theme_scheme('dark'))
        else
            dispatch(theme_scheme('light'))
    }

    const minisidebar = () => {
        document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
        document.querySelectorAll('.subtitle')[0].classList.add('text-wrap');
    }

    let location = useLocation();

    const [show3, setShow3] = useState(false);

    const handleClose = () => setShow3(false);
    const handleShow = () => setShow3(true);

    const [show4, setShow4] = useState(false);

    const handleClose1 = () => setShow4(false);
    const handleShow1 = () => setShow4(true);

    const handleLogoutUser = () => {
        dispatch(signOutUserAPI(false))
    }

    return (
        <Navbar expand="xl" className={`nav iq-navbar header-hover-menu left-border ${headerNavbar} ${navbarHide.join(" ")}`}>
            <Container fluid className="navbar-inner">
            <Link to="/dashboard" className="navbar-brand">
                    <Logo color={true} />
                    <div className='logo-title my-0 d-flex flex-column'>
                        <h5 className="logo-title ms-1 mb-0">{props.app_name}</h5>
                        <h6 className="text-wrap ms-1 mt-1 mb-0 fs-6">Mang đến sự tiện lợi</h6>
                    </div>
                </Link>


                {/* Btn để mở side-bar ở chế độ điện thoại */}
                <div className="sidebar-toggle" data-toggle="sidebar" data-active="true" onClick={minisidebar}>
                    <i className="icon d-flex">
                        <svg width="20px" viewBox="0 0 24 24" className="icon-20" >
                            <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                        </svg>
                    </i>
                </div>

                <div className="d-flex align-items-center justify-content-between product-offcanvas">
                    {/* Small label ở góc bên trái */}
                    <div className="breadcrumb-title border-end me-3 pe-3 d-none d-xl-block">
                        <small className="mb-0 text-capitalize">{`${location.pathname === '/' ? 'TRANG CHỦ' : '' 
                        || (location.pathname.includes('/places/') 
                        || location.pathname.includes('/blogs/') 
                        || location.pathname.includes('/sliders/')
                        || location.pathname.includes('/users/')
                        || location.pathname.includes('/event/')
                        || location.pathname.includes('tracking-work')
                        || location.pathname.includes('document'))
                        ? 'QUẢN LÝ' : ''
                        || location.pathname === '/support' ? 'KHÁC' : ''}`}</small>
                    </div>

                    {/* Form Search */}
                    <Dropdown as="li" className="nav-item pe-5 d-none d-xl-block">
                        <div className="form-group input-group mb-0 search-input">
                            <Form.Control type="text" placeholder="Search..." />
                            <span className="input-group-text">
                                <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></circle>
                                    <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                </svg>
                            </span>
                        </div>
                    </Dropdown>
                    {/* <div className={`offcanvas offcanvas-end shadow-none iq-product-menu-responsive ${show1 === true ? 'show' : ''} `} tabIndex="-1" id="offcanvasBottom" style={{ visibility: `${show1 === true ? 'visible' : 'hidden'}` }}>
                        <div className="offcanvas-body">
                            <ul className="iq-nav-menu list-unstyled">
                                <Nav.Item as="li" className="active">
                                    <Nav.Link className="menu-arrow justify-content-start" onClick={() => setOpen(!open)} aria-controls="homeData" aria-expanded={open} role="button" >
                                        <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V20.7732C14.8562 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z" fill="currentColor" />
                                        </svg>
                                        <span className="nav-text ms-2">Home</span>
                                    </Nav.Link>
                                    <Collapse in={open}>
                                        <ul className="iq-header-sub-menu list-unstyled " id="homeData">
                                            <Nav.Item as="li">
                                                <Link className={`${location.pathname === '/dashboard' ? 'active' : ''} nav-link `} to="/dashboard">Default Dashboard</Link>
                                            </Nav.Item>

                                            <Nav.Item as="li">
                                                <Nav.Link className="menu-arrow" onClick={() => setOpen1(!open1)} aria-expanded={open1} role="button" aria-controls="menuStyles" >
                                                    Menu Style
                                                    <i className="right-icon">
                                                        <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </i>
                                                </Nav.Link>
                                                <Collapse in={open1}>
                                                    <ul className="iq-header-sub-menu left list-unstyled " id="menuStyles">
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/horizontal' ? 'active' : ''} nav-link `} to="/horizontal"> Horizontal Dashboard </Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dual-horizontal' ? 'active' : ''} nav-link `} to="/dual-horizontal"> Dual Horizontal Dashboard </Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dual-compact' ? 'active' : ''} nav-link `} to="/dual-compact">Dual Compact</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/boxed' ? 'active' : ''} nav-link `} to="/boxed"> Boxed Horizontal </Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/boxedFancy' ? 'active' : ''} nav-link `} to="/boxedFancy"> Boxed Fancy</Link></Nav.Item>
                                                    </ul>
                                                </Collapse>
                                            </Nav.Item>
                                            <Nav.Item as="li"><Link className={`${location.pathname === '/e-commerce/admin/admin-dashboard' ? 'active' : ''} nav-link `} to="/e-commerce/admin/admin-dashboard">Ecommerce</Link></Nav.Item>
                                            <Nav.Item as="li"><Link className={`${location.pathname === '/social/dashboard' ? 'active' : ''} nav-link`} to="/social/dashboard">Social App</Link></Nav.Item>
                                            <Nav.Item as="li"><Link className={`${location.pathname === '/blog' ? 'active' : ''} nav-link`} to="/blog">Blog</Link></Nav.Item>
                                            <Nav.Item as="li"><Link className={`${location.pathname === '/appointment/dashboard' ? 'active' : ''} nav-link`} to="/appointment/dashboard">Appointment</Link></Nav.Item>
                                            <Nav.Item as="li"><Link className={`${location.pathname === '/file-manager/dashboard' ? 'active' : ''} nav-link`} to="/file-manager/dashboard">File Manager</Link></Nav.Item>
                                            <Nav.Item as="li"><Link className={`${location.pathname === '/chat/chat' ? 'active' : ''} nav-link`} to="/chat/chat">Chat</Link></Nav.Item>
                                            <Nav.Item as="li"><Link className={`${location.pathname === '/mail/email' ? 'active' : ''} nav-link`} to="/mail/email">Mail</Link></Nav.Item>
                                        </ul>
                                    </Collapse>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link className="menu-arrow justify-content-start" onClick={() => setOpen2(!open2)} aria-expanded={open2} role="button" aria-controls="allPagesData">
                                        <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2" fill="currentColor" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.07999 6.64999V6.65999C7.64899 6.65999 7.29999 7.00999 7.29999 7.43999C7.29999 7.86999 7.64899 8.21999 8.07999 8.21999H11.069C11.5 8.21999 11.85 7.86999 11.85 7.42899C11.85 6.99999 11.5 6.64999 11.069 6.64999H8.07999ZM15.92 12.74H8.07999C7.64899 12.74 7.29999 12.39 7.29999 11.96C7.29999 11.53 7.64899 11.179 8.07999 11.179H15.92C16.35 11.179 16.7 11.53 16.7 11.96C16.7 12.39 16.35 12.74 15.92 12.74ZM15.92 17.31H8.07999C7.77999 17.35 7.48999 17.2 7.32999 16.95C7.16999 16.69 7.16999 16.36 7.32999 16.11C7.48999 15.85 7.77999 15.71 8.07999 15.74H15.92C16.319 15.78 16.62 16.12 16.62 16.53C16.62 16.929 16.319 17.27 15.92 17.31Z" fill="currentColor" />
                                        </svg>
                                        <span className="nav-text ms-2">Pages</span>
                                    </Nav.Link>
                                    <Collapse in={open2}>
                                        <ul className="iq-header-sub-menu list-unstyled " id="allPagesData">
                                            <Nav.Item as="li">
                                                <Nav.Link className="menu-arrow " onClick={() => setOpen3(!open3)} aria-expanded={open3} role="button" aria-controls="specialPages" >
                                                    Special Pages
                                                    <i className="right-icon">
                                                        <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </i>
                                                </Nav.Link>
                                                <Collapse in={open3}>
                                                    <ul className="iq-header-sub-menu left list-unstyled " id="specialPages">
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/special-pages/billing' ? 'active' : ''} nav-link`} to="/dashboard/special-pages/billing">Billing</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/special-pages/calender' ? 'active' : ''} nav-link`} to="/dashboard/special-pages/calender">Calender</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/special-pages/kanban' ? 'active' : ''} nav-link`} to="/dashboard/special-pages/kanban">Kanban</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/special-pages/pricing' ? 'active' : ''} nav-link`} to="/dashboard/special-pages/pricing">Pricing</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/special-pages/timeline' ? 'active' : ''} nav-link`} to="/dashboard/special-pages/timeline">Timeline</Link></Nav.Item>
                                                    </ul>
                                                </Collapse>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link className="menu-arrow" onClick={() => setOpen4(!open4)} aria-expanded={open4} role="button" aria-controls="authSkins">
                                                    Auth skins
                                                    <i className="right-icon">
                                                        <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </i>
                                                </Nav.Link>
                                                <Collapse in={open4}>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="authSkins">
                                                        <Nav.Item as="li">
                                                            <Nav.Link className="menu-arrow" onClick={() => setOpen5(!open5)} aria-expanded={open5} role="button" aria-controls="defaultAuth">
                                                                Defalut
                                                                <i className="right-icon">
                                                                    <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </i>
                                                            </Nav.Link>
                                                            <Collapse in={open5}>
                                                                <ul className="iq-header-sub-menu left list-unstyled" id="defaultAuth">
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/default/auth/sign-in' ? 'active' : ''} nav-link`} to="/default/auth/sign-in">Sign In</Link></Nav.Item>
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/default/auth/sign-up' ? 'active' : ''} nav-link`} to="/default/auth/sign-up">Sign Up</Link></Nav.Item>
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/default/auth/confirm-mail' ? 'active' : ''} nav-link`} to="/default/auth/confirm-mail">Email Verified</Link></Nav.Item>
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/default/auth/recoverpw' ? 'active' : ''} nav-link`} to="/default/auth/recoverpw">Reset Password</Link></Nav.Item>
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/default/auth/lock-screen' ? 'active' : ''} nav-link`} to="/default/auth/lock-screen">Lock Screen</Link></Nav.Item>
                                                                </ul>
                                                            </Collapse>
                                                        </Nav.Item>
                                                        <Nav.Item as="li">
                                                            <Nav.Link className="menu-arrow" onClick={() => setOpen6(!open6)} aria-expanded={open6} role="button" aria-controls="animatedAuth">
                                                                Animated
                                                                <i className="right-icon">
                                                                    <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </i>
                                                            </Nav.Link>
                                                            <Collapse in={open6}>
                                                                <ul className="iq-header-sub-menu left list-unstyled collapse" id="animatedAuth">
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/auth/sign-in' ? 'active' : ''} nav-link`} to="/auth/sign-in">Sign In</Link></Nav.Item>
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/auth/sign-up' ? 'active' : ''} nav-link`} to="/auth/sign-up">Sign Up</Link></Nav.Item>
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/auth/email' ? 'active' : ''} nav-link`} to="/auth/email">Email</Link></Nav.Item>
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/auth/lock-screen' ? 'active' : ''} nav-link`} to="/auth/lock-screen">Lock screen</Link></Nav.Item>
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/auth/reset-password' ? 'active' : ''} nav-link`} to="/auth/reset-password">Reset password</Link></Nav.Item>
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/auth/two-factor' ? 'active' : ''} nav-link`} to="/auth/two-factor">Two factor</Link></Nav.Item>
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/auth/account-deactivate' ? 'active' : ''} nav-link`} to="/auth/account-deactivate">Account deactivate</Link></Nav.Item>
                                                                </ul>
                                                            </Collapse>
                                                        </Nav.Item>
                                                        <Nav.Item as="li">
                                                            <Nav.Link className="menu-arrow" onClick={() => setOpen7(!open7)} aria-expanded={open7} role="button" aria-controls="popupAuth">
                                                                popup
                                                                <i className="right-icon">
                                                                    <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </i>
                                                            </Nav.Link>
                                                            <Collapse in={open7}>
                                                                <ul className="iq-header-sub-menu left list-unstyled" id="popupAuth">
                                                                    <Nav.Item as="li"><Nav.Link onClick={handleShow}>Sign In</Nav.Link></Nav.Item>
                                                                    <Nav.Item as="li"><Nav.Link onClick={handleShow1}>Sign Up</Nav.Link></Nav.Item>
                                                                </ul>
                                                            </Collapse>
                                                        </Nav.Item>
                                                        <Modalpopup sign="in" show={show3} handleclose={handleClose} />
                                                        <Modalpopup sign="up" show={show4} handleclose={handleClose1} />
                                                        <Nav.Item as="li">
                                                            <Nav.Link className="menu-arrow" onClick={() => setOpen8(!open8)} aria-expanded={open8} role="button" aria-controls="simpleAuth">
                                                                simple
                                                                <i className="right-icon">
                                                                    <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </i>
                                                            </Nav.Link>
                                                            <Collapse in={open8}>
                                                                <ul className="iq-header-sub-menu left list-unstyled " id="simpleAuth">
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/auth/simple/sign-in' ? 'active' : ''} nav-link`} to="/auth/simple/sign-in">Sign In</Link></Nav.Item>
                                                                    <Nav.Item as="li"><Link className={`${location.pathname === '/auth/simple/sign-up' ? 'active' : ''} nav-link`} to="/auth/simple/sign-up">Sign Up</Link></Nav.Item>
                                                                </ul>
                                                            </Collapse>
                                                        </Nav.Item>
                                                    </ul>
                                                </Collapse>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link className="menu-arrow" onClick={() => setOpen9(!open9)} aria-expanded={open9} role="button" aria-controls="authSkins">
                                                    User
                                                    <i className="right-icon">
                                                        <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </i>
                                                </Nav.Link>
                                                <Collapse in={open9}>
                                                    <ul className="iq-header-sub-menu left list-unstyled " id="userApps">
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/app/user-profile' ? 'active' : ''} nav-link`} to="/dashboard/app/user-profile">User Profile</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/app/user-add' ? 'active' : ''} nav-link`} to="/dashboard/app/user-add">User Add</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/app/user-list' ? 'active' : ''} nav-link`} to="/dashboard/app/user-list">User List</Link></Nav.Item>
                                                    </ul>
                                                </Collapse>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link className="menu-arrow" onClick={() => setOpen10(!open10)} aria-expanded={open10} role="button" aria-controls="utilities">
                                                    Utilities
                                                    <i className="right-icon">
                                                        <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </i>
                                                </Nav.Link>
                                                <Collapse in={open10}>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="utilities">
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/errors/maintenance' ? 'active' : ''} nav-link`} to="/errors/maintenance">Maintenance</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/errors/error404' ? 'active' : ''} nav-link`} to="/errors/error404">404</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/errors/error500' ? 'active' : ''} nav-link`} to="/errors/error500">505</Link></Nav.Item>
                                                    </ul>
                                                </Collapse>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link className="menu-arrow" onClick={() => setOpen11(!open11)} aria-expanded={open11} role="button" aria-controls="utilities">
                                                    Plugins
                                                    <i className="right-icon">
                                                        <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </i>
                                                </Nav.Link>
                                                <Collapse in={open11}>
                                                    <ul className="iq-header-sub-menu left list-unstyled " id="extraPlugins">
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/plugins/button-hover' ? 'active' : ''} nav-link`} to="/plugins/button-hover">Button Hover</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/plugins/choise-js' ? 'active' : ''} nav-link`} to="/plugins/choise-js">Choise JS</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/plugins/flatpickr' ? 'active' : ''} nav-link`} to="/plugins/flatpickr">Flatpickr</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/plugins/fslightbox' ? 'active' : ''} nav-link`} to="/plugins/fslightbox">FSlightbox</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/plugins/apexcharts' ? 'active' : ''}nav-link`} to="/plugins/apexcharts">Apexcharts</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/plugins/gallery-hover' ? 'active' : ''} nav-link`} to="/plugins/gallery-hover">Gallery Hover</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/plugins/image-copper' ? 'active' : ''} nav-link`} to="/plugins/image-copper">Image Copper</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/plugins/loader' ? 'active' : ''} nav-link`} to="/plugins/loader">Loader</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/plugins/select2' ? 'active' : ''} nav-link`} to="/plugins/select2">Select2</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/plugins/sweet-alert' ? 'active' : ''}nav-link`} to="/plugins/sweet-alert">Sweetalert</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/plugins/quill-editor' ? 'active' : ''}nav-link`} to="/plugins/quill-editor">Quill</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/plugins/uppy' ? 'active' : ''}nav-link`} to="/plugins/uppy">Uppy</Link></Nav.Item>
                                                    </ul>
                                                </Collapse>
                                            </Nav.Item>
                                        </ul>
                                    </Collapse>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link className="menu-arrow justify-content-start" onClick={() => setOpen12(!open12)} aria-expanded={open12} role="button" aria-controls="elementsData">
                                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M11.9912 18.6215L5.49945 21.8641C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7088C4 14.4284 4.40573 14.8726 5.47299 15.3701L11.9912 18.6215Z" fill="currentColor" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z" fill="currentColor" />
                                        </svg>
                                        <span className="nav-text ms-2">Elements </span>
                                    </Nav.Link>
                                    <Collapse in={open12}>
                                        <ul className="iq-header-sub-menu list-unstyled " id="elementsData">
                                            <Nav.Item as="li">
                                                <Link className="nav-link" to="/">Components</Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link className="menu-arrow" onClick={() => setOpen13(!open13)} aria-expanded={open13} aria-controls="widgetsPage">
                                                    Widgets
                                                    <i className="right-icon">
                                                        <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </i>
                                                </Nav.Link>
                                                <Collapse in={open13}>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="widgetsPage">
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/widget/widgetbasic' ? 'active' : ''} nav-link`} to="/dashboard/widget/widgetbasic">Widget Basic</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/widget/widgetchart' ? 'active' : ''} nav-link`} to="/dashboard/widget/widgetchart">Widget Chart</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/widget/widgetcard' ? 'active' : ''} nav-link`} to="/dashboard/widget/widgetcard">Widget Card</Link></Nav.Item>
                                                    </ul>
                                                </Collapse>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link className="menu-arrow" onClick={() => setOpen14(!open14)} aria-expanded={open14} aria-controls="mapPages">
                                                    Map
                                                    <i className="right-icon">
                                                        <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </i>
                                                </Nav.Link>
                                                <Collapse in={open14}>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="mapPages">
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/map/google' ? 'active' : ''} nav-link`} to="/dashboard/map/google">Google</Link></Nav.Item>
                                                    </ul>
                                                </Collapse>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link className="menu-arrow" onClick={() => setOpen15(!open15)} aria-expanded={open15} aria-controls="formsPages">
                                                    Form
                                                    <i className="right-icon">
                                                        <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </i>
                                                </Nav.Link>
                                                <Collapse in={open15}>
                                                    <ul className="iq-header-sub-menu left list-unstyled collapse" id="formsPages">
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/form/form-element' ? 'active' : ''} nav-link`} to="/dashboard/form/form-element">Element</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/form/form-wizard' ? 'active' : ''} nav-link`} to="/dashboard/form/form-wizard">Wizard</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/form/form-validation' ? 'active' : ''} nav-link`} to="/dashboard/form/form-validation">Validation</Link></Nav.Item>
                                                    </ul>
                                                </Collapse>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link className="menu-arrow" onClick={() => setOpen16(!open16)} aria-expanded={open16} aria-controls="tablesPages">
                                                    Table
                                                    <i className="right-icon">
                                                        <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </i>
                                                </Nav.Link>
                                                <Collapse in={open16}>
                                                    <ul className="iq-header-sub-menu left list-unstyled " id="tablesPages">
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/table/bootstrap-table' ? 'active' : ''} nav-link`} to="/dashboard/table/bootstrap-table">Bootstrap Table</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/table/table-data' ? 'active' : ''} nav-link`} to="/dashboard/table/table-data">Data Table</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/table/border-table' ? 'active' : ''} nav-link`} to="/dashboard/table/border-table">Border Table</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/table/fancy-table' ? 'active' : ''} nav-link`} to="/dashboard/table/fancy-table">Fancy Table</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/table/fixed-table' ? 'active' : ''} nav-link`} to="/dashboard/table/fixed-table">Fixed Table</Link></Nav.Item>
                                                    </ul>
                                                </Collapse>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link className="menu-arrow" onClick={() => setOpen17(!open17)} aria-expanded={open17} aria-controls="iconsPages">
                                                    Icons
                                                    <i className="right-icon">
                                                        <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </i>
                                                </Nav.Link>
                                                <Collapse in={open17}>
                                                    <ul className="iq-header-sub-menu left list-unstyled collapse" id="iconsPages">
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/icon/solid' ? 'active' : ''} nav-link`} to="/dashboard/icon/solid">Solid</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/icon/outline' ? 'active' : ''} nav-link`} to="/dashboard/icon/outline">Outlined</Link></Nav.Item>
                                                        <Nav.Item as="li"><Link className={`${location.pathname === '/dashboard/icon/dual-tone' ? 'active' : ''} nav-link`} to="/dashboard/icon/dual-tone">Dual Tone</Link></Nav.Item>
                                                    </ul>
                                                </Collapse>
                                            </Nav.Item>
                                        </ul>
                                    </Collapse>
                                </Nav.Item>
                            </ul>
                        </div>
                    </div> */}
                    <div className={`offcanvas-backdrop fade  ${show1 === true ? 'show d-block' : 'd-none'}`} onClick={() => setShow1(false)}></div>
                </div>

                {/* <div className="d-flex align-items-center">
                    <Button id="navbar-toggle" bsPrefix="navbar-toggler" type="button" aria-expanded={show1} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" onClick={() => setShow1(!show1)} >
                        <span className="navbar-toggler-icon">
                            <span className="mt-1 navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </span>
                    </Button>
                </div> */}

                <div className={` navbar-collapse ${show1 === true ? 'collapse show' : 'collapse'}`} id="navbarSupportedContent">
                    <ul className="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0">
                        {/* Chỉnh cỡ chữ */}
                        <li className="nav-item dropdown border-end pe-3 me-xl-3">
                            <div className="d-flex align-items-center mr-2 iq-font-style" role="group" aria-label="First group">
                                <RadioBtn btnName="theme_font_size" labelclassName="  border-0 btn-icon btn-sm" id="font-size-sm" defaultChecked={themeFontSize} value="theme-fs-sm" >
                                    <span className="mb-0 h6" style={{ color: "inherit" }} >A</span>
                                </RadioBtn>
                                <RadioBtn btnName="theme_font_size" labelclassName="  border-0 btn-icon" id="theme-fs-md" defaultChecked={themeFontSize} value="theme-fs-md" >
                                    <span className="mb-0 h4" style={{ color: 'inherit' }}  >A</span>
                                </RadioBtn>
                                <RadioBtn btnName="theme_font_size" labelclassName="  border-0 btn-icon" id="theme-fs-lg" defaultChecked={themeFontSize} value="theme-fs-lg" >
                                    <span className="mb-0 h2" style={{ color: 'inherit' }}  >A</span>
                                </RadioBtn>
                            </div>
                        </li>

                        {/* Chưa biết để làm gì */}
                        {/* <Dropdown as="li" className="nav-item  iq-responsive-menu border-end d-block d-xl-none">
                            <Dropdown.Toggle as={CustomToggle} className="btn btn-sm bg-body" >
                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                    <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="end" aria-labelledby="navbarDropdown-search-11" style={{ width: '25rem' }}>
                                <div className="px-3 py-0">
                                    <div className="form-group input-group mb-0">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <span className="input-group-text">
                                            <svg className="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                                <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown> */}

                        {/* Chỉnh Darkmode */}
                        <Nav.Item className=" iq-full-screen d-none d-xl-block">
                            <Nav.Link id="btnFullscreen" onClick={handleChangeTheme}>
                                <div className="btn btn-primary btn-icon btn-sm rounded-pill" >
                                    <span className="btn-inner">
                                        {
                                            themeScheme === 'light' 
                                            ? 
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 2C8.395 2 7.8066 2.05312 7.2348 2.15553C6.84951 2.22454 6.83164 2.75293 7.1873 2.9164C10.6208 4.49447 13 7.95185 13 12C13 16.0481 10.6208 19.5055 7.1873 21.0836C6.83164 21.2471 6.84951 21.7755 7.2348 21.8445C7.8066 21.9469 8.395 22 9 22C10.3132 22 11.6136 21.7413 12.8268 21.2388C14.0401 20.7362 15.1425 19.9997 16.0711 19.0711C16.9997 18.1425 17.7362 17.0401 18.2388 15.8268C18.7413 14.6136 19 13.3132 19 12C19 10.6868 18.7413 9.38642 18.2388 8.17317C17.7362 6.95991 16.9997 5.85752 16.0711 4.92893C15.1425 4.00035 14.0401 3.26375 12.8268 2.7612C11.6136 2.25866 10.3132 2 9 2Z" fill="currentColor" />
                                            </svg>
                                            :
                                            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"></path></svg>
                                        }
                                    </span>
                                </div>
                            </Nav.Link>
                        </Nav.Item>

                        {/* Chỉnh fullscreen */}
                        <Nav.Item className=" iq-full-screen d-none d-xl-block" onClick={() => setShow(!show)}>
                            <Nav.Link id="btnFullscreen" onClick={fullscreen}>
                                <div className="btn btn-primary btn-icon btn-sm rounded-pill" >
                                    <span className="btn-inner"  >
                                        <svg className={`normal-screen ${show === true ? '' : 'd-none'} icon-24`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.5528 5.99656L13.8595 10.8961" stroke="white" strokeWidth="1.5" strokeLinejoin="round"></path>
                                            <path d="M14.8016 5.97618L18.5524 5.99629L18.5176 9.96906" stroke="white" strokeWidth="1.5" strokeLinejoin="round"></path>
                                            <path d="M5.8574 18.896L10.5507 13.9964" stroke="white" strokeWidth="1.5" strokeLinejoin="round" ></path>
                                            <path d="M9.60852 18.9164L5.85775 18.8963L5.89258 14.9235" stroke="white" strokeWidth="1.5" strokeLinejoin="round"></path>
                                        </svg>
                                        <svg className={`full-normal-screen ${show === false ? '' : 'd-none'} icon-24`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.7542 10.1932L18.1867 5.79319" stroke="white" strokeWidth="1.5" strokeLinejoin="round"></path>
                                            <path d="M17.2976 10.212L13.7547 10.1934L13.7871 6.62518" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                            <path d="M10.4224 13.5726L5.82149 18.1398" stroke="white" strokeWidth="1.5" strokeLinejoin="round"></path>
                                            <path d="M6.74391 13.5535L10.4209 13.5723L10.3867 17.2755" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                </div>
                            </Nav.Link>
                        </Nav.Item>

                        {/* Chỉnh profile */}
                        <Dropdown as="li" className="nav-item iq-tour ps-3 ps-lg-0">
                            <Dropdown.Toggle as={CustomToggle} variant="py-0  d-flex align-items-center nav-link"  >
                                <div className="btn btn-primary btn-icon btn-sm rounded-pill">
                                    <span className="btn-inner">
                                        <svg width="32" className="icon-32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z" fill="currentColor"></path>
                                            <path opacity="0.4" d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="end">
                                <Dropdown.Item href="/dashboard/app/user-profile">Profile</Dropdown.Item>
                                <Dropdown.Item href="/dashboard/app/user-privacy-setting">Privacy Setting</Dropdown.Item>
                                <hr className="dropdown-divider" />
                                <Dropdown.Item onClick={() => handleLogoutUser()}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </ul>
                </div>
            </Container>
        </Navbar>
    )
})

Headerpro.displayName = "Headerpro"
export default Headerpro