import React, { Component } from 'react'
import navbar from '../components/Navbar';

export default class Register extends Component {
  render() {
    return (
        <>
        <title>Register to Shop!</title>
      <form>
      <h3 className='text-center'> Register Here</h3>
                <div className='form-group'>
                    <fieldset>
                        <label htmlFor='username'>Username</label>
                        <input type='text' name='username' className='form-control' placeholder='Username' />
                    </fieldset>
                    <fieldset>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' className='form-control' placeholder='Email' />
                    </fieldset>
                    <fieldset>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' className='form-control' placeholder='Password' />
                    </fieldset>
                    <fieldset>
                        <label htmlFor='confirmPass'>Confirm Password</label>
                        <input type='password' name='confirmPass' className='form-control' placeholder='Confirm Password' />
                    </fieldset>
                    <input type='submit' className='btn btn-secondary' />
                </div>
            </form>
            </>
    )
  }
}
