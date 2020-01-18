export const CLEAR_ERROR = 'error:clearError';
export const clearError = () => ({
  type: CLEAR_ERROR
})

export const LOGIN_FAILED = 'error:loginFailed';
export const loginFailed = () => ({
  type: LOGIN_FAILED,
  payload: { message: 'Invalid Username or Password' }
})

export const REGISTER_FAILED = 'error:registerFailed';
export const registerFailed = () => ({
  type: REGISTER_FAILED,
  payload: { message: 'Something went wrong while registering your account' }
})

export const ACCOUNT_EXISTS = 'error:accountExists';
export const accountExists = () => ({
  type: ACCOUNT_EXISTS,
  payload: { message: 'Sorry, an account with that email already exists' }
})

export const LOAD_FAILED = 'error:loadFailed';
export const loadFailed = () => ({
  type: LOAD_FAILED,
  payload: { message: 'Sorry, something happened on our end. Please try again later.'}
})