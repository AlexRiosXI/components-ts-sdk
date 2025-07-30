import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react"

import { EyeIcon, EyeSlashIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'


type LoginFormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    registerLoginInput: (name: string) => {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
        onBlur: () => void
        value: string
    }
    loginLoading: boolean
}

const LoginForm = ({onSubmit, registerLoginInput, loginLoading}: LoginFormProps) => {
    
    const [showPassword, setShowPassword] = useState(false)
    
    return (
    
            <Card className="w-full max-w-md backdrop-blur-sm bg-content1/80 dark:bg-content1/80 border-0 shadow-2xl">
                <CardHeader className="text-center pb-8 flex flex-col items-center justify-center">
                    <div className="flex gap-2 items-center mt-6 ">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Spotlight
                    </h1>
                    </div>
                    <p className="text-foreground-500 mt-2">
                        Accede a tu cuenta
                    </p>
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
                                    type={showPassword ? "text" : "password"}
                                    
                                    startContent={<LockClosedIcon className="h-5 w-5" />}
                                    
                                    endContent={
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-foreground-400 hover:text-foreground-600 transition-colors duration-200"
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
                        

                        <Button 
                            type="submit" 
                            isLoading={loginLoading}
                            fullWidth
                            color="primary"
                            
                        >
                            {loginLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                        </Button>
                    </form>
                    
                    <div className="mt-6 text-center">
                        <p className="text-sm text-foreground-500">
                            Olvidaste tu contraseña?{' '}
                            <a href="#" className="text-primary hover:text-primary-600 font-medium transition-colors duration-200">
                                Recuperala aquí
                            </a>
                        </p>
                    </div>
                </CardBody>
            </Card>
        
    );
}

export default LoginForm;