import React,{memo,Fragment} from 'react'

// Components
import Logo from '../../components/logo'

//React-router-dom
import {Link} from 'react-router-dom'

const Sidebarlogo = memo((props) => {

    const minisidebar =() =>{
        document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
        document.querySelectorAll('.subtitle')[0].classList.toggle('text-wrap');
    }

    return (
        <Fragment>
            <div className="sidebar-header d-flex align-items-center justify-content-start">
                <Link to="/dashboard" className="navbar-brand">
                    <Logo />
                    <div className='logo-title my-0 d-flex flex-column'>
                        <h5 className="logo-title ms-1 mb-0">{props.app_name}</h5>
                        <h6 className="text-wrap ms-1 mt-1 mb-0 fs-6 subtitle">Mang đến sự tiện lợi</h6>
                    </div>
                </Link>
                <div className="sidebar-toggle" data-toggle="sidebar" data-active="true" onClick={minisidebar}>
                    <i className="icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </i>
                </div>
            </div>
        </Fragment>
    )
})

Sidebarlogo.displayName="Sidebarlogo"
export default Sidebarlogo
