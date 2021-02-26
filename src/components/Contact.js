import React from 'react';
import 'antd/dist/antd.css';
import { useForm } from 'react-hook-form';

let Form = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="container">
            <h2 style={{ marginTop: 10 }}>Contact</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Name</label>
                <input type="text" placeholder="Enter your name" name="name" ref={register({
                    required: "Please Enter Your Name",
                    minLength: { value: 3, message: "can you please enter min 3 letters" }
                })} />
                {errors.name && <div className="eror">{errors.name.message}</div>}

                <label>E-Mail</label>
                <input type="email" placeholder="Enter your e-mail" name="email" ref={register({
                    required: " E-mail required"
                })} />
                {errors.email && <div className="eror">{errors.email.message}</div>}

                <label>Subject</label>
                <input type="text" placeholder="Enter your subject" name="subject" ref={register({
                    required: "Enter your subject",
                    minLength: { value: 6, message: "Please enter your message" }
                })} />
                {errors.subject && <div className="eror">{errors.subject.message}</div>}

                <label>Message</label>
                <textarea rows="4" type="text" placeholder="Enter your message" name="message" ref={register({
                    required: "Enter your message",
                    minLength: { value: 10, message: "please enter your message" }
                })} />
                {errors.message && <div className="eror">{errors.message.message}</div>}

                <button type="submit">Send Message</button>

            </form>
        </div>
    );

}

export default Form;