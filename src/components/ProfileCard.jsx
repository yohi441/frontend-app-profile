import ProfileAvatar from '../profile/forms/ProfileAvatar';
import HackademyCardLogo from './HackademyCardLogo';
import DateJoined from '../profile/DateJoined';
import { useState } from 'react';
import { useEffect } from 'react';
import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient as getHttpClient } from '@edx/frontend-platform/auth';


async function getEnrollment(){
    const { data } = await getHttpClient().get(`${getConfig().LMS_BASE_URL}/api/enrollment/v1/enrollment`);
    const enroll = await data.length
    return enroll;
}


function ProfileCard({props: {
    src, isDefault, 
    onSave, onDelete, 
    savePhotoState, isEditable,
    dateJoined, name, username
}}) {

    const [enrollCount, setEnrollCount] = useState([]);

    console.log(getEnrollment())

    useEffect(()=>{
        setEnrollCount(getEnrollment())
    },[])

    console.log(enrollCount)
    
    return ( 
        <div className='tw-relative tw-overflow-hidden tw-mb-20 tw-mt-30 tw-flex lg:tw-flex-row tw-flex-col tw-items-center tw-rounded-lg tw-px-10 tw-py-10 tw-w-full tw-shadow-all'>
                
                <div className='overflow-hidden tw-flex-none tw-rounded-full tw-shadow-all tw-relative tw-w-[176px] tw-h-[176px]'>
                  <ProfileAvatar
                        src={src}
                        isDefault={isDefault}
                        onSave={onSave}
                        onDelete={onDelete}
                        savePhotoState={savePhotoState}
                        isEditable={isEditable}
                      />
                </div>

            

                <div className='lg:tw-ml-8 tw-mt-2 lg:tw-mt-0'>
                  <h3 className='tw-text-primaryNavy tw-font-plexSerif'>{name}</h3>
                  <p>@{username}</p>
                </div>
                <div className='lg:tw-ml-28 tw-mt-8 lg:tw-mt-0'>
                  <h3 className='tw-uppercase tw-text-sm tw-text-gray-700'>member since</h3>
                  <p><DateJoined date={dateJoined} /></p>
                </div>
                <div className='lg:tw-ml-10 -tw-ml-10'>
                  <h3 className='tw-uppercase tw-text-sm tw-text-gray-700'>enrolled</h3>
                  <p>1</p>
                </div>
                <div className='lg:tw-ml-10 -tw-ml-10'>
                  <h3 className='tw-uppercase tw-text-sm tw-text-gray-700'>Lorem, ipsum.</h3>
                  <p>Lorem, ipsum.</p>
                </div>
                <div className='lg:tw-ml-10 -tw-ml-10'>
                  <h3 className='tw-uppercase tw-text-sm tw-text-gray-700'>Certificate</h3>
                  <p>Lorem, ipsum.</p>
                </div>

                <div className='tw-opacity-50 tw-absolute tw-bottom-40 tw-right-32 lg:tw-right-28 lg:tw-top-6'>
                  <HackademyCardLogo />
                </div>
                
               

          </div>
     );
}

export default ProfileCard;