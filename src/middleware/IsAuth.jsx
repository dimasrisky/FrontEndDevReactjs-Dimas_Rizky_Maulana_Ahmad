import Cookies from "js-cookie"
import { Outlet, Navigate } from "react-router-dom"

export function IsAuth() {
    if(Cookies.get('isLogin')){
        return <Outlet />
    }else{
        return <Navigate to={'/'} />
    }
}
