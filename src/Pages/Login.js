import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <>
      <title>Login to Shop!</title>
      <form>
            <h3 className='text-center'>Login Here</h3>
            <div className='form-group'>
                <fieldset>
                    <label htmlFor='username'>Username</label>
                    <input type='text' className='form-control' name='username' placeholder='Username' />
                </fieldset>
                <fieldset>
                    <label htmlFor='password'>Password</label>
                    <input type='password' className='form-control' name='password' placeholder='Password' />
                </fieldset>
                <input type='submit' className='btn btn-primary' value='Login' />
            </div>
        </form>
        </>
    )
  }
}
