import '../output.css';
import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { useState, useEffect, useRef } from 'react';
import { DropDown } from './DropDown';


// close the dropdown menu if user click outside
let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let clickHandler = (event) => {
            if(!domNode.current.contains(event.target)){
                handler();
            }
        };

        document.addEventListener("mousedown", clickHandler);

        return () => {
            document.removeEventListener('mousedown', clickHandler)
        }
    })

    return domNode
}





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
    const handleClick = (event) => {
       setShow(!show)
    }

    let menuRef = useClickOutside(() => {
        setShow(false);
    });
    
    
    return (
        <div className="tw-container tw-mx-auto tw-py-5">
            <div className='tw-wrapper tw-flex tw-justify-between'>
                <a className='tw-no-underline' href={dashboardUrl}>
                    <div className='tw-cursor-pointer tw-h-10 tw-flex tw-gap-5 tw-items-center'>
                        <img className='tw-w-full tw-h-full' src={hackademyLogo} alt="hackademy-logo" />
                        <div className='tw-border-bottom'>
                            <a className="hover:tw-ring-primaryCrimson tw-no-underline tw-text-gray-700" href={dashboardUrl}>Course</a>
                        </div>
                    </div>  
                </a>          
                <div className='tw-flex tw-gap-4 tw-items-center'>
                    
                    <div className='tw-px-1 hover:tw-bg-gray-200'>
                        <a href="https://edx.readthedocs.io/projects/open-edx-learner-guide/en/open-release-maple.master/SFD_dashboard_profile_SectionHead.html">
                        <span class="tw-text-gray-700 fa fa-question-circle"></span>
                        </a>
                    </div>
                    <div className='tw-cursor-pointer hover:tw-bg-gray-200 tw-px-1'>
                        <a href={dashboardUrl} className='tw-text-primaryNavy tw-no-underline'>{username}</a>
                    </div>

                    {/* avatar */}
                    <div className='p-1 hover:tw-bg-gray-200'>
                        <div className='tw-cursor-pointer tw-h-12 tw-w-12 tw-rounded-full tw-shadow-all tw-overflow-hidden'>
                            <a href={dashboardUrl}>
                                <img className='tw-w-full tw-h-full tw-object-cover' src={profileImageObj.get('imageUrlSmall')} alt="" />
                            </a>
                        </div>
                    </div>

                    {/* dropdown button */}
                    <div ref={menuRef} onClick={handleClick} className='tw-relative hover:tw-bg-gray-200 tw-px-1 tw-cursor-pointer'>
                        <svg width="20px" height="20px" viewBox="0 0 16 16" version="1.1" role="img" aria-hidden="true" focusable="false">
                            <path d="M7,4 L7,8 L11,8 L11,10 L5,10 L5,4 L7,4 Z" fill="currentColor" transform="translate(8.000000, 7.000000) rotate(-45.000000) translate(-8.000000, -7.000000) "></path>
                        </svg>
                        <div ref={menuRef}>
                            {show ? <DropDown menuRef />: null }
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )

}