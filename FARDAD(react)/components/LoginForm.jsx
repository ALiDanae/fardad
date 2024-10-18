import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setInf }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    const onSubmit = (data) => {
        setData(prev => [...prev, data])


    }

    if (data[0]) {
        setInf(data[0])
        navigate("/products")
    }





    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input

                    placeholder="Name"
                    {...register("name")} />
                <input

                    placeholder="Phone Number"
                    {...register("phoneNumber")}
                />
                <input

                    placeholder="Email"
                    {...register("email", {
                        pattern: {
                            value: /^.*@gmail.com$/,
                            message: 'Email must end with FrontEndi.com'
                        }
                    })} />

                <button

                    type='submit'>
                    submit
                </button>

            </form>
        </>
    )



}

export default LoginForm