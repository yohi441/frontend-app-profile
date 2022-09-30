import '../output.css';
import { getConfig } from '@edx/frontend-platform';


export const MyFooter = () => {
    
    let urlLogo = getConfig().LOGO_URL;
    let lmsBaseUrl = getConfig().LMS_BASE_URL;
    const ingenuityDarkLogo = `${lmsBaseUrl}/static/hackademy-theme/images/ingenuity-dark-logo.png`
    const tesdaLogo = `${lmsBaseUrl}/static/hackademy-theme/images/tesda-logo.png`
    const icons8Logo = `${lmsBaseUrl}/static/hackademy-theme/images/icons8-logo.png`
    
    return (
        <div className="tw-bg-gray-100">
           
            <footer className="tw-py-20 tw-mx-auto tw-container tw-flex tw-flex-col lg:tw-flex-row tw-items-center lg:tw-items-start tw-px-5 tw-gap-5 lg:tw-justify-between">
                <div>
                    <div className='tw-w-30 tw-h-11'>
                        <img className='tw-w-full tw-h-full'
                            src={urlLogo}
                            alt="hackademy-logo" />
                    </div>
                </div>

                <div className='tw-mt-8 lg:tw-mt-0'>
                    <div className='tw-text-xl tw-font-semibold tw-text-primaryCrimson'>Courses Offered</div>
                    <div className="tw-flex tw-gap-20">
                        <div>
                            <ul className='tw-footer-link tw-list-none'>
                                <li><a href='#'>Artificial Intelligence</a></li>
                                <li><a href='#'>Advanced Algorithms</a></li>
                                <li><a href='#'>C/C++ Programming</a></li>
                                <li><a href='#'>Dev Ops</a></li>
                                <li><a href='#'>Database</a></li>
                                <li><a href='#'>Data Structures and Algorithms</a></li>
                                <li><a href='#'>Fundamentals of Programming</a></li>
                                <li><a href='#'>Machine Learning</a></li>
                            </ul>
                        </div>

                        <div>
                            <ul className='tw-footer-link tw-list-none'>
                                <li><a href='#'>Networks</a></li>
                                <li><a href='#'>Operating Systems</a></li>
                                <li><a href='#'>Product Design</a></li>
                                <li><a href='#'>Programming</a></li>
                                <li><a href='#'>Python Programming</a></li>
                                <li><a href='#'>Systems Analysis and Design</a></li>
                                <li><a href='#'>UI/UX Design</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                
                <div>
                    <div>
                        <div className='-tw-ml-28 lg:tw-ml-0'>
                            <div className='tw-text-xl tw-font-semibold tw-text-primaryCrimson'>Contact Us</div>
                            <ul className='tw-list-none'>
                                <li className='tw-text-sm tw-font-semibold -tw-ml-10'><img className="bi-envelope-fill" /> hello@hackademy.ph </li>
                                <li className='tw-text-sm tw-font-semibold -tw-ml-10'><img className="bi-telephone-fill" /> (082) 222 2222 </li>
                            </ul>
                        </div>

                        <div className="tw-flex tw-gap-3 tw-mt-20 tw-items-center">
                            <a href="https://ingenuity.ph" rel="noopener" target="_blank">
                                <img src={ingenuityDarkLogo} />
                            </a>
                            <a href="https://www.tesda.gov.ph" rel="noopener" target="_blank">
                                <img src={tesdaLogo} />
                            </a>
                            <a href="https://icons8.com" rel="noopener" target="_blank">
                                <img src={icons8Logo} />
                            </a>
          
                        </div>
                    </div>
                </div>
            </footer>  
            
        </div>
    )
}
