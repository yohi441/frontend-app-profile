const MobileDropDownRight = () => {
    return (
        <div className="md:tw-hidden tw-shadow-all tw-w-full">
            <div className="tw-cursor-pointer tw-py-2 hover:tw-bg-gray-200 tw-pl-5">Dashboard</div>
            <div className="tw-cursor-pointer tw-py-2 hover:tw-bg-gray-200 tw-pl-5">Profile</div>
            <div className="tw-cursor-pointer tw-py-2 hover:tw-bg-gray-200 tw-pl-5">Account</div>
            <div className="tw-cursor-pointer tw-py-2 hover:tw-bg-gray-200 tw-pl-5">Order History</div>
            <div className="tw-cursor-pointer tw-py-2 hover:tw-bg-gray-200 tw-pl-5">Logout</div>
        </div>
    )
}

export default MobileDropDownRight