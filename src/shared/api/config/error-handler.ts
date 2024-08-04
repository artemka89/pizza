const AUTH_ERROR_MESSAGES: Record<string, string> = {
  user_unauthorized: 'Пользователь не авторизован',
  user_invalid_credentials: 'Неверный логин или пароль',
  user_already_exists: 'Пользователь уже существует',
};

interface AppwriteError {
  message: string;
  type: string;
  code: number;
}

export function ErrorHandler(error: Error) {
  if (isAppwriteError(error)) {
    switch (error.code) {
      case 401:
        return AUTH_ERROR_MESSAGES[error.type] || 'Ошибка авторизации';
      case 409:
        return AUTH_ERROR_MESSAGES[error.type] || 'Ошибка авторизации';
      default:
        return 'Неизвестная ошибка';
    }
  }
  return error.message;
}

export function isAppwriteError(error: unknown): error is AppwriteError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as AppwriteError).message === 'string' &&
    'type' in error &&
    typeof (error as AppwriteError).type === 'string' &&
    'code' in error &&
    typeof (error as AppwriteError).code === 'number'
  );
}
