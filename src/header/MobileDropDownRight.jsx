import { useEffect, useRef } from "react";

const MobileDropDownRight = (props) => {
    let menuRightRef = useRef()

    useEffect(() => {
        let handler = (event) => {
            if (!menuRightRef.current.contains(event.target)) {
                props.closeDropDown()
                console.log("dropdown")
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })

    return (
        <div className="tw-inset-0 tw-absolute">
            <div ref={menuRightRef} className="md:tw-hidden tw-inset-x-0 tw-absolute tw-top-24 tw-bg-white tw-z-20 tw-shadow-all">
                <div className="tw-cursor-pointer tw-py-2 hover:tw-bg-gray-200 tw-pl-5">Dashboard</div>
                <div className="tw-cursor-pointer tw-py-2 hover:tw-bg-gray-200 tw-pl-5">Profile</div>
                <div className="tw-cursor-pointer tw-py-2 hover:tw-bg-gray-200 tw-pl-5">Account</div>
                <div className="tw-cursor-pointer tw-py-2 hover:tw-bg-gray-200 tw-pl-5">Order History</div>
                <div className="tw-cursor-pointer tw-py-2 hover:tw-bg-gray-200 tw-pl-5">Logout</div>
            </div>
        </div>
    )
}

export default MobileDropDownRight