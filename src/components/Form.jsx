import React, { useState } from 'react';
import './Form.css';
// making a form for the quote to initiate
export default function Form() {
    const [values, setValues] = useState({
        
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",

    });
    // here we are declaring a hook to show whether the submitting quote is successful or not
    // and using unary operator for submission if successful submission giving the message otherwise null
    const [submitted, setSubmitted] = useState(false);
    // this handlefunction is to accept the name entering of a user, we using the spread operator to spread the values
    const handleFullNameInputChange = (event) => {
        setValues({...values, fullName: event.target.value})
    }
    // setting it for email 
    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }
    // setting it for phone number
    const handlePhoneNumberInputChange = (event) => {
        setValues({...values, phoneNumber: event.target.value})
    }
    // setting it for address
    const handleAddressInputChange = (event) => {
        setValues( {...values, address: event.target.value})
    }
    // for the validation to happen setting up the hook
      const [valid, setValidation ] = useState(false);
    // setting up events for submit button
    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.fullName && values.email && values.phoneNumber && values.address){
            setValidation(true);
        }
        setSubmitted(true);

    }

    return (
        <div className="form-container">
             <div className="heading-color">
             <h1 className='heading-style'> Get A Free Quote Today </h1>
             <h3 className='heading-styling'>  Schdule A Free Consultation Now</h3>
             </div>
        <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message"> Success! Thank you for registering with us</div> :null}
         
        <input className="form-field"
               onChange={handleFullNameInputChange}
               placeholder="Full-name"
               name="fullName"
               value={values.fullName}

        />
        {submitted &&  !values.fullName ? <span> Please enter you full name</span> : null }
        
        <input className="form-field"
             onChange={handleEmailInputChange}
               placeholder="
               Email addres"
               name="email"
               value={values.email}
        />
        {submitted && !values.email ? <span> Please enter you email address</span> : null}
        
        <input className="form-field"
               onChange={handlePhoneNumberInputChange}
               placeholder="
               Phone Number"
               name="phoneNumber"
               value={values.phoneNumber}
        />
        {submitted && !values.email ? <span> Please enter you phonenumber address</span> : null}
        <input className="form-field"
               onChange={handleAddressInputChange}
               placeholder="
               address"
               name="address"
               value={values.address}
        />
        { submitted && !values.address ?<span> Please enter your address</span>: null}
        
        
        <button class="form-field" type="submit">
          GET MY FREE QUOTE
        </button>
        </form>
            
        </div>
    )
}