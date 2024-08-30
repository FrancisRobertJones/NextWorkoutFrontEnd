import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Interface } from 'readline';

interface GoogleLoginButtonProps {
    style: string;
}


const GoogleLoginButton = ({ style }: GoogleLoginButtonProps) => {
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            try {
                const response = await axios.post('http://localhost:8080/api/auth/google', {
                    token: tokenResponse.access_token,
                });
                console.log('Login Success:', response.data);
            } catch (error) {
                console.error('Login Failed:', error);
            }
        },
        onError: () => {
            console.error('Login Failed');
        }
    });

        return (
        style === "full" ? (
            <Button className="w-full bg-background text-primary hover:bg-background/90" size="lg" onClick={() => login()}>
                Sign Up with Google
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button> ) : (
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => login()}>
                Sign Up with Google
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>  
        ))
    
};

export default GoogleLoginButton;