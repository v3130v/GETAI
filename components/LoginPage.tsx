/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, {useState} from 'react';
import {GETAILogoIcon, GoogleIcon, XMarkIcon} from './icons';

interface LoginPageProps {
  onLogin: (email: string) => void;
  onCancel: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({onLogin, onCancel}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onLogin(email);
    }
  };

  const handleGoogleLogin = () => {
    // In a real app, this would trigger the Google OAuth flow.
    // For this demo, we'll just use the email from the input if present,
    // or a default non-admin email.
    const loginEmail = email || 'user@example.com';
    onLogin(loginEmail);
  };

  return (
    <div className="login-page-container animate-fade-in">
      <div className="login-card">
        <button
          onClick={onCancel}
          className="modal-close-button"
          aria-label="Close login">
          <XMarkIcon className="w-6 h-6" />
        </button>
        <GETAILogoIcon className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
        <p className="text-gray-400 mb-8">
          Sign in to manage your content studio.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input text-center"
              placeholder="Enter your email"
              required
              aria-label="Email Address"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input text-center"
              placeholder="Enter your password"
              aria-label="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Sign In
          </button>
        </form>

        <div className="login-divider">or</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-secondary login-google-btn">
          <GoogleIcon className="w-5 h-5" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};