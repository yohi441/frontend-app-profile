import '../output.css'
import { useState, useEffect } from 'react';

export const MyHeader = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://apps.local.overhang.io:8000/api/user/v1/me`)
        .then((response) => response.json())
        .then((actualData) => console.log(actualData))
        .catch((err) => {
         console.log(err.message);
        });
       }, []);
    return (
        <div className="tw-container tw-mx-auto tw-py-5">
            <div className='tw-wrapper tw-flex tw-justify-between'>
                <div className='tw-cursor-pointer tw-h-10 tw-flex tw-gap-5 tw-items-center'>
                    <img className='tw-w-full tw-h-full' src="http://local.overhang.io:8000/static/hackademy-theme/images/logo.png" alt="hackademy-logo" />
                    <div>
                        <a className='tw-text-primaryCrimson tw-no-underline hover:tw-text-red-600' href="">Course</a>
                    </div>
                </div>            
                <div className='tw-flex tw-items-center'>
                    <div>help</div>
                    <div>username</div>
                    <div>img</div>
                    <div>arrow</div>
                </div>
                
            </div>
        </div>
    )

}