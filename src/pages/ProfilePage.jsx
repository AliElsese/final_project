import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { RxEyeClosed } from "react-icons/rx";
import { TfiEye } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function ProfilePage() {

    const loginFormValidation = Yup.object({
        email: Yup.string().required('Email is required!').email('Email should be in valid form!'),
        password: Yup.string().required('Password is required!'),
        rememberMe: Yup.boolean()
    })

    return (
        <div className="w-full h-screen bg-[var(--MainBackGroundColor)]">
            <div className="flex flex-col items-center">
                <p className="text-[var(--MainColor)] font-semibold mt-14">Welcome Back!</p>
                <div className="mt-10 md:w-xl">
                    <Formik 
                        initialValues={{ email: '', password: '', rememberMe: false }}
                        validationSchema={loginFormValidation}
                        onSubmit={handleSubmit}
                        >
                        <Form>
                            <div>
                                <label htmlFor="UserEmail" className="font-semibold text-lg capitalize">email</label>
                                <Field id="UserEmail" name="email" type="email" placeholder="example@gmail.com" 
                                    className="mt-2 rounded-lg border-2 border-[#22222233] p-4 w-full focus:outline-none focus:ring-2 focus:ring-[var(--MainColor)]" />
                                <ErrorMessage name="email" component={'p'} className="text-[var(--MainColor)]" />
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

                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center space-x-1 text-[14px]">
                                    <Field id="RememberMe" name="rememberMe" type="checkbox" />
                                    <label htmlFor="RememberMe">Remember me</label>
                                </div>

                                <Link to={'/home'} className="capitalize text-[var(--MainColor)] hover:text-[#700c38]">forget password ?</Link>
                            </div>

                            <div className="mt-10">
                                <button type="submit" className="capitalize text-white bg-[var(--MainColor)] w-full py-3 px-4 rounded-lg hover:text-[var(--MainColor)] hover:bg-white hover:border-1 hover:border-[var(--MainColor)]">login</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}