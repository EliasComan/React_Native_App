export const UPDATED_FORM = 'UPDATED_FORM'
const formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


export const onInputChange = (name, value, dispatch, formState) => {
    const {hasError, error}= validateInput(name, value)
    let isFormValid = true

    for (const key in formState) {
        const item = formState[key]
        if (key === name && hasError) {
            isFormValid = false
            break
        }else if (key != name && item.hasError){
            isFormValid = false
            break
        }
    }
dispatch({
    type:UPDATED_FORM,
    data:{
        name, 
        value, 
        hasError, 
        error,
        touched:false, 
        isFormValid
    }
})
}

export const validateInput = (name, value) => {
    let hasError = false
    let error = ''
    switch (name) {
        case "email":
            if(value.trim() === ''){
              return{
                  hasError: true,
                  error : 'Email is required'
                } 
            }else if (!formatEmail.test(value)){
                return{
                    hasError: true,
                error : "Email is invalid"}
            }else{
                return{

                    hasError : false,
                    error : ''
                }
            }
            break;
        case 'password' : 
            if (value.trim() === '') {
               return{
                   hasError : true,
                   error : 'Password is required'
            }
            }else if (value.length < 6) {
               return{
                   error : 'Password must be at least 6 characters',
                   hasError : true
                }               }
            
            else{
                return{
                    hasError: false,
                     error : ""}}
        default:
            return value
    }
}

export const onFocusOut = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value);
  
    let isFormValid = true;
  
    for (const key in formState) {
      const item = formState[key];
      if (key === name && hasError) {
        isFormValid = false;
        break;
      } else if (key !== name && item.hasError) {
        isFormValid = false;
        break;
      }
    }
  
    dispatch({
      type: UPDATED_FORM,
      data: {
        name,
        value,
        hasError,
        error,
        touched: true,
        isFormValid,
      },
    });
  };