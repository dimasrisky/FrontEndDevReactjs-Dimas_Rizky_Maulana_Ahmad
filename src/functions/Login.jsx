import Cookies from 'js-cookie'

export function Login(username, password) {
    if(username === '' && password === '') alert('Harap isi form!')
    if(username === 'user' && password === 'user123'){
        Cookies.set('isLogin', true, { expires: 1/24 })
        return true
    }else{
        alert('Invalid credentials!')
        return false
    }
}
