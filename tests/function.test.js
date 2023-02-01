import * as auth0 from '../client/index.js';

function authentication(user, password) {
    return auth0.authenticate(user, password);
}

describe('authentication', () => {
    it('returns a valid user', () => {
        const user = 'user_test';
        const password = 'password_test';

        const result = authentication(user, password);
        expect(result).toBe(user);
        expect(result.token).toBe(password);
    });
    it('throws an error when the authentication fails', () => {
        const username = 'invalid_user';
        const password = 'invalid_password';
    expect(() => authenticateUser(username, password)).toThrow();     
    });
});
