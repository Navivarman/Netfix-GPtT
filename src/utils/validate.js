export const CheckValidate = (email,password,name) =>{
    const isName = /([a-zA-Z0-9_\s]+)/.test(name)
    const  isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
   
    
    if(!isName || "") return `${name} is not Valid`
    if(!isEmail || "") return "Email is not Valid"
    if(!isPassword || "") return "Password is not Valid"

    return null;
}