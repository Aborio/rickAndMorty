import { useState } from "react";


const Form = ({login}) => {
    
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });



    const validate = () => {
        if (!/\S+@\S+\.\S+/.test(userData.email)) {
            setErrors({
                ...errors,
                email: "Email no válido",
            });
        } else {
            setErrors({
                ...errors,
                email: "",
            })
        }
        if (userData.password.length < 5) {
            setErrors({
                ...errors,
                password: "Password no válida",
            });
        } else {
            setErrors({
                ...errors,
                password: "",
            });
        }
    }

    

    const handleOnChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });

        validate();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    };

    return(
        
        <form onSubmit={handleSubmit} className="lform">
            
            <label htmlFor="email"> Email: </label>
            <input type="email" placeholder="Ingrese el email" name="email" value={userData.email} onChange={(e)=>handleOnChange(e)}/>
            {errors.email && <p className="bcard">{errors.email}</p>}
            <br />
            <br />
            <label htmlFor="password"> Password: </label>
            <input type="password" placeholder="Ingrese la password" name="password" value={userData.password} onChange={(e)=>handleOnChange(e)}/>
            {errors.password && <p className="bcard">{errors.password}</p>}
            <br />
            <button disabled={!userData.email || !userData.password || errors.email || errors.password}>Submit</button>

        </form>
    )
}
export default Form;