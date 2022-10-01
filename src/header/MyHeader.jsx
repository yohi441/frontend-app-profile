import '../output.css';
import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { useState, useEffect, useRef } from 'react';
import { DropDown } from './DropDown';
import { BurgerIcon } from '../components/BurgerIcon';
import MobileDropDownLeft from './MobileDropDownLeft';
import MobileDropDownRight from './MobileDropDownRight';




export const MyHeader = () => {
    let lmsBaseUrl = getConfig().LMS_BASE_URL;
    let dashboardUrl = `${lmsBaseUrl}/dashboard/`;
    let hackademyLogo = `${lmsBaseUrl}/static/hackademy-theme/images/logo.png`;
    let profileImage = getAuthenticatedUser().profileImage;
    let username = getAuthenticatedUser().username;

    // this code is use for getting the Avatar.url
    const profileImageObj = new Map();
    for (const key in profileImage) {
        profileImageObj.set(key, profileImage[key]);
    }

    // this code is use for toggling the dropdown menu
    const [show, setShow] = useState(false)
    const [showLeftDrop, setShowLeftDrop] = useState(false)
    const [showRightDrop, setShowRightDrop] = useState(false)

    const mainMenuDropdown = (event) => {
        setShow(!show)
    }
    const secondaryMenuDropdown = (event) => {
        setShowLeftDrop(!showLeftDrop)
        setShowRightDrop(false)
    }
    const secondaryMenuLeftDropdown = (event) => {
        setShowRightDrop(!showRightDrop)
        setShowLeftDrop(false)
    }


    return (
        <div className='tw-relative'>
            <div className="tw-container tw-mx-auto tw-py-5">
                <div className='tw-wrapper tw-items-center tw-flex tw-justify-between'>
                   
                    <div onClick={secondaryMenuDropdown} className='p-2 hover:tw-bg-gray-200 tw-cursor-pointer md:tw-hidden'>
                        <BurgerIcon />
                    </div>
                    
                    <a className='tw-no-underline' href={dashboardUrl}>
                        <div className='tw-cursor-pointer tw-h-10 tw-flex tw-gap-5 tw-items-center'>
                            <img className='tw-w-full tw-h-full' src={hackademyLogo} alt="hackademy-logo" />
                            <div className='tw-border-course tw-cursor-pointer tw-hidden md:tw-block tw-border-bottom'>
                                <a className="tw-no-underline tw-text-primaryNavy" href={dashboardUrl}>Course</a>
                            </div>
                        </div>  
                    </a>          
                    <div className='tw-flex tw-gap-4 tw-items-center'>
                        {/* help icon */}
                        <div className='tw-hidden md:tw-block tw-px-1 hover:tw-bg-gray-200'>
                            <a href="https://edx.readthedocs.io/projects/open-edx-learner-guide/en/open-release-maple.master/SFD_dashboard_profile_SectionHead.html">
                            <span class="tw-text-gray-700 fa fa-question-circle"></span>
                            </a>
                        </div>
                        {/* username */}
                        <div className='tw-hidden md:tw-block tw-cursor-pointer hover:tw-bg-gray-200 tw-px-1'>
                            <a href={dashboardUrl} className='tw-text-primaryNavy tw-no-underline'>{username}</a>
                        </div>

                        {/* mobile avatar dropdown*/}
                        <div onClick={secondaryMenuLeftDropdown} className='p-1 md:tw-hidden hover:tw-bg-gray-200'>
                            <div className='tw-cursor-pointer tw-h-12 tw-w-12 tw-rounded-full tw-shadow-all tw-overflow-hidden'>
                                <img className='tw-w-full tw-h-full tw-object-cover' src={profileImageObj.get('imageUrlSmall')} alt="" />  
                            </div>
                        </div>

                        {/* avatar */}
                        <div className='p-1 tw-hidden md:tw-block hover:tw-bg-gray-200'>
                            <div className='tw-cursor-pointer tw-h-12 tw-w-12 tw-rounded-full tw-shadow-all tw-overflow-hidden'>
                                <a href={dashboardUrl}>
                                    <img className='tw-w-full tw-h-full tw-object-cover' src={profileImageObj.get('imageUrlSmall')} alt="" />
                                </a>
                            </div>
                        </div>

                        {/* dropdown button */}
                        <div onClick={mainMenuDropdown} className='tw-hidden md:tw-block tw-relative hover:tw-bg-gray-200 tw-px-1 tw-cursor-pointer'>
                            <svg width="20px" height="20px" viewBox="0 0 16 16" version="1.1" role="img" aria-hidden="true" focusable="false">
                                <path d="M7,4 L7,8 L11,8 L11,10 L5,10 L5,4 L7,4 Z" fill="currentColor" transform="translate(8.000000, 7.000000) rotate(-45.000000) translate(-8.000000, -7.000000) "></path>
                            </svg>
                            <div>
                            {show && <div> <DropDown /></div>}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {showRightDrop ? <MobileDropDownRight/>:null}
            {showLeftDrop ? <MobileDropDownLeft/>:null}
            {/* {showRightDrop && <div ref={menuRightRef}> <MobileDropDownRight  /></div>}
            {showLeftDrop && <div ref={menuLeftRef}> <MobileDropDownLeft  /></div>} */}
        </div>
    )

}