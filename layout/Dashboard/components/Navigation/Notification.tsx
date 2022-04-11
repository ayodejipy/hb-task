import { NextPage } from "next";

const Notification: NextPage = () => {
    return (
        <div className="relative cursor-pointer p-2 rounded-full border border-slate-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <div className="h-2 w-2 bg-[#FA5F1C] rounded-full absolute top-2 left-5"></div>
        </div>
    )
}

export default Notification;