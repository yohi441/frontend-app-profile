import '../output.css'
import { getConfig } from '@edx/frontend-platform'
import { getAuthenticatedUser } from '@edx/frontend-platform/auth'


export const DropDown = () => {
    const username = getAuthenticatedUser().username;
    const lmsBaseUrl = getConfig().LMS_BASE_URL
    const profileUrl = `${lmsBaseUrl}/u/${username}`
    const accountUrl = `${lmsBaseUrl}/account/settings`
    const lmsDashboardUrl = `${lmsBaseUrl}/dashboard/`
    const logoutUrl = getConfig().LOGOUT_URL;
    const orderHistoryUrl = getConfig().ORDER_HISTORY_URL;


    return (
        <div className='tw-bg-white tw-overflow-hidden tw-rounded-md tw-shadow-all tw-w-44 tw-z-50 tw-absolute tw-top-12 tw-right-0'> 
            <div className='tw-list-none tw-flex tw-flex-col tw-dropdown-link'>
                <a href={lmsDashboardUrl}><div>Dashboard</div></a>
                <a href={profileUrl}><div>Profile</div></a>
                <a href={accountUrl}><div>Account</div></a>
                <a href={orderHistoryUrl}><div>Order History</div></a>
                <a href={logoutUrl}><div>Logout</div></a>
            </div>
        </div>
    )
   
}