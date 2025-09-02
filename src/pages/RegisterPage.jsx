import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import { RxEyeClosed } from "react-icons/rx";
import { TfiEye } from "react-icons/tfi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { backendUrlApi } from "../store";

export default function RegisterPage() {
    const [isClosed, setIsClosed] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate(); 
    
    const handleSubmit = async (values) => {
        setIsLoading(true);
        await axios.post(`${backendUrlApi}auth/local/register`, values).then(res => {
            toast.success('Registered Successfully..!', {
                duration: 1500,
                position: 'top-center'
            })
            setTimeout(() => {
                navigate('/login');
            }, 1200);
        }).catch(err => {
            toast.error(`${err.response?.data.error.message}`, {
                duration: 2000,
                position: 'top-center'
            });
        }).finally(() => {
            setIsLoading(false);
        })
    }
    
    const registerFormValidation = Yup.object({
        email: Yup.string().required('Email is required!').email('Email should be in valid form!'),
        username: Yup.string().required('Email is required!'),
        password: Yup.string().required('Password is required!')
    })

    return (
        <div className="w-full h-screen bg-[var(--MainBackGroundColor)]">
            <div className="flex flex-col items-center">
                <div className="mt-10 md:w-xl">
                    <Formik 
                        initialValues={{ email: '', username: '', password: '' }}
                        validationSchema={registerFormValidation}
                        onSubmit={handleSubmit}
                        >
                        <Form>
                            <div>
                                <label htmlFor="UserEmail" className="font-semibold text-lg capitalize">email</label>
                                <Field id="UserEmail" name="email" type="email" placeholder="example@gmail.com" 
                                    className="mt-2 rounded-lg border-2 border-[#22222233] p-4 w-full focus:outline-none focus:ring-2 focus:ring-[var(--MainColor)]" />
                                <ErrorMessage name="email" component={'p'} className="text-[var(--MainColor)]" />
                            </div>

                            <div className="mt-6">
                                <label htmlFor="UserName" className="font-semibold text-lg capitalize">username</label>
                                <Field id="UserName" name="username" type="text" placeholder="Enter your username" 
                                    className="mt-2 rounded-lg border-2 border-[#22222233] p-4 w-full focus:outline-none focus:ring-2 focus:ring-[var(--MainColor)]" />
                                <ErrorMessage name="username" component={'p'} className="text-[var(--MainColor)]" />
                            </div>
        
                            <div className="mt-6 relative">
                                <label htmlFor="UserPassword" className="font-semibold text-lg capitalize">password</label>
                                <Field id="UserPassword" name="password" type={ isClosed ? "password" : "text" } placeholder="Enter Password" 
                                    className="mt-2 rounded-lg border-2 border-[#22222233] p-4 w-full focus:outline-none focus:ring-2 focus:ring-[var(--MainColor)]" />
                                <ErrorMessage name="password" component={'p'} className="text-[var(--MainColor)]" />
                                <div className="eye-icon cursor-pointer w-fit absolute top-14 right-6 text-[#878A99] hover:text-[var(--MainColor)]" onClick={() => { setIsClosed(!isClosed) }}>
                                    {
                                        isClosed ? <RxEyeClosed size={20} /> : <TfiEye size={20} />
                                    }
                                </div>
                            </div>
        
                            <div className="mt-10">
                                <button type="submit" disabled={isLoading}
                                    className="flex items-center justify-center capitalize text-white bg-[var(--MainColor)] w-full py-3 px-4 rounded-lg hover:text-[var(--MainColor)] hover:bg-white hover:border-1 hover:border-[var(--MainColor)] disabled:text-white disabled:bg-[#ee3786] disabled:border-none">
                                        {
                                            isLoading ? (
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                            ) : null
                                        }
                                        sign up
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}