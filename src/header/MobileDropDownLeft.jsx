import { useEffect, useRef } from "react";


const MobileDropDownLeft = (props) => {
    let menuLeftRef = useRef()

    useEffect(() => {
        let handler = (event) => {
            if (!menuLeftRef.current.contains(event.target)) {
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
        <div className="tw-absolute tw-inset-0">

            <div ref={menuLeftRef} className="md:tw-hidden tw-top-24 tw-absolute tw-shadow-all tw-w-full tw-py-4">
                <div className="tw-cursor-pointer tw-py-2 hover:tw-bg-gray-200 tw-pl-5">Course</div>
            </div>
        </div>
    )
}

export default MobileDropDownLeft