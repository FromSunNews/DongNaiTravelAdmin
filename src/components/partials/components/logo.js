import React,{memo,Fragment} from 'react'
import logo from '../../../assets/logo/logo.png'
import logo_light from '../../../assets/logo/light.png'
import logo_dark from '../../../assets/logo/dark.png'
import { useSelector } from 'react-redux'
import * as SettingSelector from '../../../redux/settings/settingsSlice'

const Logo = memo((props ) => {
    // Sửa Logo
    const themeScheme = useSelector(SettingSelector.theme_scheme)
    return (
        <Fragment>
            <div className="logo-main">
                <div className="logo-normal">
                    <img src={themeScheme === 'light' ? logo_dark : logo_light} className="rounded ms-1" alt="logo" loading="lazy" width={50} height={50}/>
                </div>
                <div className="logo-mini">
                    <img src={themeScheme === 'light' ? logo_dark : logo_light} className="rounded" alt="logo" loading="lazy" width={30} height={30}/>
                </div>
            </div>
        </Fragment>
    )
})    

Logo.displayName="Logo"
export default Logo
