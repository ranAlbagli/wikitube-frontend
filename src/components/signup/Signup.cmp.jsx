import React, { useState } from 'react'
import './Signup.style.scss'


const Signup = ({signNewUser}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const setNewUser=(e)=> {
        e.preventDefault()
        signNewUser({
            email,
            password,
            firstName,
            lastName,
            searchHistory:[],
        })

    }

    return (
        <section className="section-signup">
            <div>
            </div>
            <div className="signup-container">
                <div className="signup-form">
                    <h2>Signup</h2>
                    <form onSubmit={setNewUser}>
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
                            <div className="col-25">
                                <label>First Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" placeholder="First Name" required onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label>Last Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" placeholder="Last Name" required onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>

                        <div className="row">
                            <button className="btn-signup">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default Signup