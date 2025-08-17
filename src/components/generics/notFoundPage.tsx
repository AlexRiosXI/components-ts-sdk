import { Button } from '@heroui/react';
import { HomeIcon } from '@heroicons/react/24/outline';

type NotFoundProps = {
  message?: string;
  title?: string;
  homeCallback?: () => void;
  backCallback?: () => void;
  homeLabel?: string;
  backLabel?: string;
  errorMessage?: string;
};

export const NotFoundPage = ({
  message = 'The page you are looking for does not exist or has been moved.',
  title = 'Not found',
  homeCallback,
  backCallback,
  homeLabel = 'Go to home',
  backLabel = 'Go back',
  errorMessage = 'If you think this is an error, contact support.',
}: NotFoundProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 select-none">404</h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600">{message}</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {homeCallback && (
            <Button
              color="primary"
              variant="solid"
              startContent={<HomeIcon className="h-5 w-5" />}
              onPress={homeCallback}
              className="w-full"
            >
              {homeLabel}
            </Button>
          )}

          {backCallback && (
            <Button color="default" variant="bordered" onPress={backCallback} className="w-full">
              {backLabel}
            </Button>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-sm text-gray-500">
          <p>{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};
