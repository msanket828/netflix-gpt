export const checkValiData=(email,password)=> {
    if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)) {
        return 'Email is invalid'
    }
    if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(password)) {
        return 'Password is invalid'
    }
    return null;
}

export const checkValiDataWithName=(name, email,password)=> {
    if(!name || name.length<=2) {
        return 'Name should not be empty or should be greater than 2 character long'
    }
    if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)) {
        return 'Email is invalid'
    }
    if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(password)) {
        return 'Password is invalid'
    }
    return null;
}