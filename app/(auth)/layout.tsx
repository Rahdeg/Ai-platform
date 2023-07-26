import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Rahdeg | Auth',
    description: 'AI Auth',
  }


const AuthLayout =({
    children
}:{
    children : React.ReactNode
})=>{
    return (
        <div className="flex items-center justify-center h-full">
            
            {children}
        </div>
    )
}
export default AuthLayout;