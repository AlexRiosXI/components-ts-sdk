import { Button, Card, CardBody, CardHeader, Divider, Input } from '@heroui/react';

import { EyeIcon, EyeSlashIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

type LoginFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  registerLoginInput: (name: string) => {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    value: string;
  };
  loginLoading: boolean;
  title: string;
  callToAction: string;
  forgotPasswordOnClick: () => void;
  noAccountOnClick: () => void;
  hideCreateAccount: boolean;
  submitButtonText: string;
  submitButtonColor:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | undefined;
  submitButtonLoadingText: string;
};

export const LoginForm = ({
  onSubmit,
  registerLoginInput,
  loginLoading,
  title = 'Access your account',
  callToAction = 'Access your account',
  forgotPasswordOnClick = () => {},
  noAccountOnClick = () => {},
  hideCreateAccount = false,
  submitButtonText = 'Sign in',
  submitButtonColor = 'primary',
  submitButtonLoadingText = 'Signing in...',
}: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="bg-content1/80 dark:bg-content1/80 w-full max-w-md border-0 shadow-2xl backdrop-blur-sm ">
      
      <CardHeader className="flex flex-col items-center justify-center pb-8 text-center">
        <div className="mt-6 flex items-center gap-2">
          <h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
            {title}
          </h1>
        </div>
        <p className="text-foreground-500 mt-2">{callToAction}</p>
      </CardHeader>

      <CardBody className="px-8 pb-8">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="space-y-4">
            <Input
              startContent={<EnvelopeIcon className="h-5 w-5" />}
              placeholder="Correo electrónico"
              {...registerLoginInput('email')}
            />

            <Input
              placeholder="Contraseña"
              {...registerLoginInput('password')}
              type={showPassword ? 'text' : 'password'}
              startContent={<LockClosedIcon className="h-5 w-5" />}
              endContent={
                <button
                  type="button"
                  className="text-foreground-400 hover:text-foreground-600 absolute inset-y-0 right-0 flex items-center pr-3 transition-colors duration-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              }
            />
          </div>

          <Button color={submitButtonColor} type="submit" isLoading={loginLoading} fullWidth>
            {loginLoading ? submitButtonLoadingText : submitButtonText}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-foreground-500 text-sm">
            Olvidaste tu contraseña?{' '}
            <a
              onClick={forgotPasswordOnClick}
              className="text-primary hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Recuperala aquí
            </a>
          </p>
        </div>

        {!hideCreateAccount && (
          <>
            <Divider />
            <div className="mt-6 text-center">
              <p className="text-foreground-500 text-sm">
                Aun no tienes una cuenta?{' '}
                <a
                  onClick={noAccountOnClick}
                  className="text-primary hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  Registrate aquí
                </a>
              </p>
            </div>
          </>
        )}
      </CardBody>
    </Card>
  );
};
