const storage = typeof window !== 'undefined' ? window.localStorage : null;

const fakeAuth = {
  async me() {
    const userJson = storage?.getItem('fake_auth_user');
    if (!userJson) {
      throw new Error('No authenticated user');
    }
    return JSON.parse(userJson);
  },
  async loginViaEmailPassword(email, password) {
    throw new Error('Authentication is unavailable in this build.');
  },
  loginWithProvider(provider, redirectUrl) {
    window.location.href = redirectUrl || '/login';
  },
  async register({ email, password }) {
    throw new Error('Registration is unavailable in this build.');
  },
  async verifyOtp() {
    throw new Error('Verification is unavailable in this build.');
  },
  setToken() {
    return null;
  },
  async resendOtp() {
    throw new Error('OTP resend is unavailable in this build.');
  },
  async resetPasswordRequest() {
    throw new Error('Password reset is unavailable in this build.');
  },
  async resetPassword() {
    throw new Error('Password reset is unavailable in this build.');
  },
  logout() {
    storage?.removeItem('fake_auth_user');
  },
  redirectToLogin(redirectUrl) {
    window.location.href = redirectUrl || '/login';
  }
};

export const base44 = { auth: fakeAuth };
