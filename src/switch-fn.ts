export enum AuthErrorCode {
  INCORRECT_PASSWORD = 'incorrect-password',
  USER_NOT_FOUND = 'user-not-found',
}

export const getAuthErrorDescription = (loginFailure: AuthErrorCode) => {
  switch (loginFailure) {
    case AuthErrorCode.USER_NOT_FOUND:
      return "Sorry, we didn't recognise that email address";
    case AuthErrorCode.INCORRECT_PASSWORD:
      return "Sorry, that's not the right password";
    default:
      return loginFailure;
  }
}
