import React,{ useEffect,memo,Fragment } from 'react'

//siderbarlogo
import Sidebarlogo from '../../../../../components/partials/components/sidebar/sidebar-logo'

//sidebarprofile
import Sidebarprofilecard from '../../../../../components/partials/components/sidebar/sidebar-profile-card'

//mail-vartical-nav
import Mailverticalnav from './mail-vertical-nav'

//scrollbar
import Scrollbar from 'smooth-scrollbar'

// Import selectors & action from setting store
import * as SettingSelector from '../../../../../redux/settings/settingsSlice'

// Redux Selector / Action
import { useSelector } from 'react-redux';


const Mailsidebar = memo(() => {

    const appName = useSelector(SettingSelector.app_name)
    
    const sidebarColor = useSelector(SettingSelector.sidebar_color)
    const sidebarHide = useSelector(SettingSelector.sidebar_show); // array
    const sidebarType = useSelector(SettingSelector.sidebar_type) // array
    const sidebarMenuStyle = useSelector(SettingSelector.sidebar_menu_style)
    useEffect(
        () => {
            Scrollbar.init(document.querySelector('#my-scrollbar'))
        }
    )
    return (
        <Fragment>
            <aside className={`${sidebarColor} ${sidebarHide.join( " " ) ? 'sidebar-none' : 'sidebar'} ${sidebarType.join(" ")} ${sidebarMenuStyle} sidebar-base `}>
                <Sidebarlogo app_name={appName}/>
                <div className="sidebar-body pt-0 data-scrollbar" id="my-scrollbar">
                    <Sidebarprofilecard />
                    <hr className="hr-horizontal" />
                    <div className="sidebar-list">
                        <Mailverticalnav />
                    </div>
                </div>
                <div className="sidebar-footer"></div>
            </aside>
        </Fragment>
    )
}
)

Mailsidebar.displayName="Mailsidebar"
export default Mailsidebar
