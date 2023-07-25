import Meta from "@/helpers/Meta";

const AuthLayout =({
    children
}:{
    children : React.ReactNode
})=>{
    return (
        <div className="flex items-center justify-center h-full">
            <Meta title="Login | Logout"/>
            {children}
        </div>
    )
}
export default AuthLayout;