const checkValidateData = (name, email, password ) => {
    const isName = /^[A-Za-z\s]+$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/.test(password);
   
    if(!isName){
        return { valid: false, message: "Name is required." };
    }
    if (!isEmailValid) {
     return { valid: false, message: "Invalid email format." };
    }
    if (!isPasswordValid) {
        return { valid: false, message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character." };
    }
   
   return { valid: true, message: "Validation successful." };
}

export default checkValidateData;