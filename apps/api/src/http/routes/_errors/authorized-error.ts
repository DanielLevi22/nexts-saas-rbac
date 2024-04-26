export class AuthorizedError extends Error {
  constructor(message?: string) {
    super(message ?? 'Authorized')
  }
}
