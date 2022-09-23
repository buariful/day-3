import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    // sign in form action
    const [
        signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/booking';

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
            .then(() => {
                // navigate(from, { replace: true })
                navigate(from, { replace: true })
            })
        if (user) {
            console.log(user)
        }
    }

    // google sign in
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const googleSign = () => {
        signInWithGoogle()
            .then(() => {
                // navigate(from, { replace: true })
                navigate(from, { replace: true })
            })
    }

    return (
        <div className='text-center text-sm text-accent'>
            <h1 className='text-3xl font-bold my-6 text-secondary'>Please Log In</h1>
            <div className='w-1/2 mx-auto bg-gray-900 py-5 rounded-lg mb-8'>
                <form onSubmit={handleSubmit}>

                    <input type="email" name="email" id="" placeholder='Enter a email' className='w-10/12 py-3 px-2 rounded-md mb-4 text-black' required /> <br />

                    <input type="password" name="password" required id="" placeholder='Your password' className='w-10/12 py-3 px-2 rounded-md mb-4 text-black' /> <br />

                    <input type="submit" value="Login" className='py-3 w-1/2 bg-black hover:bg-orange-600 text-white cursor-pointer rounded-lg' required />
                </form>
            </div>
            <p className='font-bold text-orange-600'></p>
            <p className='my-3 text-secondary'>Need to create an account ? Then <Link to="/register" className='font-bold text-orange-600'>Signup</Link></p>

            <button className="btn border-none bg-black hover:bg-orange-600 text-white" onClick={googleSign}>Continue with Google</button>
        </div>
    );
};

export default Login;