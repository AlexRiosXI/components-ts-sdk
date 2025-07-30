import { Button, Card, CardBody, CardHeader, Input } from '@heroui/react';

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
};

const LoginForm = ({ onSubmit, registerLoginInput, loginLoading }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="bg-content1/80 dark:bg-content1/80 w-full max-w-md border-0 shadow-2xl backdrop-blur-sm">
      <CardHeader className="flex flex-col items-center justify-center pb-8 text-center">
        <div className="mt-6 flex items-center gap-2">
          <h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
            Spotlight
          </h1>
        </div>
        <p className="text-foreground-500 mt-2">Accede a tu cuenta</p>
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

          <Button type="submit" isLoading={loginLoading} fullWidth color="primary">
            {loginLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-foreground-500 text-sm">
            Olvidaste tu contraseña?{' '}
            <a
              href="#"
              className="text-primary hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Recuperala aquí
            </a>
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
