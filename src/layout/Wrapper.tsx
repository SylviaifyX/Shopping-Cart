import { ReactNode } from "react";

interface MainWrapperProps{
    children: ReactNode;
}
const MainWrapper = ({ children } : MainWrapperProps) => {
    return (
        <div className="px-5 md:px-10 lg:px-10 mx-auto container my-2  md:my-10">
            {children}
        </div>
    )
}
export default MainWrapper