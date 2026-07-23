const storage = typeof window !== 'undefined' ? window.localStorage : {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};

const createNoopPromise = (value) => Promise.resolve(value);

export const base44 = {
  entities: {
    JobApplication: {
      create: async (data) => createNoopPromise(data)
    },
    QuoteRequest: {
      create: async (data) => createNoopPromise(data)
    },
    Subcontractor: {
      create: async (data) => createNoopPromise(data)
    },
    Project: {
      filter: async () => createNoopPromise([]),
      list: async () => createNoopPromise([])
    },
    Testimonial: {
      list: async () => createNoopPromise([])
    }
  },
  integrations: {
    Core: {
      UploadFile: async ({ file }) => {
        const file_url = typeof window !== 'undefined' && file ? URL.createObjectURL(file) : '';
        return createNoopPromise({ file_url });
      }
    }
  },
  analytics: {
    track: () => {}
  },
  auth: {
    loginViaEmailPassword: async (email) => {
      storage.setItem('auth_token', 'dummy-token');
      storage.setItem('auth_email', email);
      return createNoopPromise({ email });
    },
    loginWithProvider: (_provider, redirectUrl) => {
      if (typeof window !== 'undefined' && redirectUrl) {
        window.location.href = redirectUrl;
      }
    },
    register: async ({ email }) => {
      storage.setItem('auth_registered_email', email);
      return createNoopPromise({ email });
    },
    verifyOtp: async () => {
      const token = 'dummy-token';
      storage.setItem('auth_token', token);
      return createNoopPromise({ access_token: token });
    },
    setToken: (token) => {
      storage.setItem('auth_token', token);
    },
    resendOtp: async (email) => createNoopPromise({ email }),
    resetPasswordRequest: async (email) => createNoopPromise({ email }),
    resetPassword: async () => createNoopPromise({ success: true }),
    me: async () => {
      const email = storage.getItem('auth_registered_email') || 'user@example.com';
      return createNoopPromise({ email, role: 'user' });
    },
    logout: (redirectUrl) => {
      storage.removeItem('auth_token');
      if (typeof window !== 'undefined' && redirectUrl) {
        window.location.href = redirectUrl;
      }
    },
    redirectToLogin: (redirectUrl) => {
      if (typeof window !== 'undefined' && redirectUrl) {
        window.location.href = redirectUrl;
      }
    }
  }
};
