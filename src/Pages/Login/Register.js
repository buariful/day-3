import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/booking';

    const [updateProfile, updating] = useUpdateProfile(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleSubmit = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        const user = { name, email };
        fetch('http://localhost:4000/adduser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())

        navigate(from, { replace: true })
    }

    const googleSign = () => {
        signInWithGoogle()
            .then(() => {
                // navigate(from, { replace: true })
                navigate(from, { replace: true })
            })
    }
    const [dateuser] = useAuthState(auth);
    const navigate = useNavigate();
    if (dateuser) {
        navigate('/home')
    }
    return (
        <div>
            <div className='text-center text-sm text-accent'>
                <h1 className='text-3xl font-bold my-6 text-secondary'>Please Sign up first</h1>
                <div className='w-1/2 mx-auto bg-gray-900 py-5 rounded-lg mb-8'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" id="" placeholder='Enter your Name' className='text-black w-10/12 py-3 px-2 rounded-md mb-4' required /><br />

                        <input type="email" name="email" id="" placeholder='Enter a email' className='w-10/12 py-3 px-2 rounded-md mb-4 text-black' required /> <br />

                        <input type="password" name="password" required id="" placeholder='Your password' className='w-10/12 py-3 px-2 rounded-md mb-4 text-black' /> <br />

                        <input type="submit" value="Signup" className='py-3 w-1/2 bg-black hover:bg-orange-600 text-white cursor-pointer rounded-lg' required />
                    </form>
                </div>
                <p className='font-bold text-orange-600'></p>
                <p className='my-3 text-secondary'>Already have an account ? Then <Link to="/login" className='font-bold text-orange-600'>Login</Link></p>

                <button className="btn border-none bg-black hover:bg-orange-600 text-white" onClick={googleSign}>Continue with Google</button>
            </div>
        </div>
    );
};

export default Register;