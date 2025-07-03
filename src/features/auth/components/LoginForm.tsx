import { useState } from 'react';
import Button from '@shared/components/Button';
import Input from '@shared/components/Input';
import Card from '@shared/components/Card';
import { isValidEmail } from '@shared/utils/validationUtils';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  isLoading: boolean;
}

function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(email, password);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={errors.email}
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={errors.password}
            required
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Forgot your password?
              </a>
            </div>
          </div>

          <Button type="submit" fullWidth isLoading={isLoading}>
            Sign In
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default LoginForm;
