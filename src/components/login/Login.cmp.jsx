import React, { useState } from 'react'
// import './Login/style.scss'


const Login = ({ loginUser }) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setUser=(e)=> {
        e.preventDefault()
        loginUser({
            email,
            password,
        })

    }



    return (
        <section className="section-signup">
            <div>
            </div>
            <div className="signup-container">
                <div className="signup-form">
                    <h2>Login</h2>
                    <form onSubmit={setUser}>
                        <div className="row">
                            <div className="col-25">
                                <label>Email</label>
                            </div>
                            <div className="col-75">
                                <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label>Password</label>
                            </div>
                            <div className="col-75">
                                <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className="row">
                            <button className="btn-signup">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default Login