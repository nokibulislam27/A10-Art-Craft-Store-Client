

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Methods from "../Methods/Methods";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';
function Register() {
    const { EmailSingIn, ProfileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('')
    const [see, setSee] = useState(false);

    const handleRegistration = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photoURL = form.get('photoURL');
        const password = form.get('password');
        console.log(email, password, name, photoURL);
        const MIN_LENGTH = 6;

        // Error messages
        const ERR_LENGTH = "Password must be at least 6 characters long.";
        const ERR_LOWERCASE = "Password must contain at least one lowercase letter.";
        const ERR_UPPERCASE = "Password must contain at least one uppercase letter.";

        // Check password length
        if (password.length < MIN_LENGTH) {
            setError(ERR_LENGTH);
            return false;
        }

        // Check for lowercase letter
        if (!/[a-z]/.test(password)) {
            setError(ERR_LOWERCASE);
            return false;
        }

        // Check for uppercase letter
        if (!/[A-Z]/.test(password)) {
            setError(ERR_UPPERCASE);
            return false;
        }
        setError('')
        EmailSingIn(email, password, name, photoURL)


            .then(result => {
                toast.success('successfully logged in')
                ProfileUpdate(name, photoURL)
                    .then(() => {
                        if (result.user) {
                            navigate(location?.state || '/')
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        toast.error(error.message)
                    })
            })

    }


    return (
        <div className="w-full mx-auto mt-6 ">
            <Helmet>
                <title>CraftVista || Register</title>
            </Helmet>
            <Card color="transparent" className="mx-auto w-80 md:w-[440px] sm:p-6  md:p-8 bg-gray-100" >
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleRegistration}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            name="name"
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your PhotoURL
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="your image url"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            name="photoURL"
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            name="email"
                            required
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <div className="flex md:flex-col">
                            <Input
                                type={`${see ? 'text' : 'password'}`}
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                name="password"
                                required
                            >

                            </Input>
                            <span onClick={() => { setSee(!see) }} className={' relative top-3 md:-top-7 right-6 md:-right-[350px]'}>
                                {see ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                    <Toaster />
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6" fullWidth type="submit">
                        Sign Up
                    </Button>

                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <Link to={'/login'}>Log In</Link>
                    </Typography>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <Methods></Methods>
            </Card>
        </div>

    );
}
export default Register;