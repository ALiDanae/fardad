import { useForm } from 'react-hook-form'
import { useState } from 'react'

const LoginForm = ({setInf}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState([]);

    const onSubmit = (data) => {
        setData(prev => [...prev, data])
    }

    if(data[0]){
       setInf(data[0]);
    }



    

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input

                    placeholder=""
                    {...register("name")} />
                <input

                    placeholder=""
                    {...register("phoneNumber")}
                />
                <input

                    placeholder=""
                    {...register("email", {
                        pattern: {
                            value: /^.*@gmail.com$/,
                            message: 'Email must end with FrontEndi.com'
                        }
                    })} />

                <button

                    type='submit'>
                    button
                </button>

            </form>
        </>
    )



}

export default LoginForm