import { ReactNode } from "react";

interface MainWrapperProps{
    children: ReactNode;
}
const MainWrapper = ({ children } : MainWrapperProps) => {
    return (
        <div className="px-10 mx-auto container my-10 ">
            {children}
        </div>
    )
}
export default MainWrapper