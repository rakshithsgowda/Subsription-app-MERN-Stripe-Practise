import { useState } from 'react'
import Input from '../components/Input'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='d-flex justify-content-center' style={{ height: '60vh' }}>
      <div className='container d-flex align-item-center'>
        <div className='row col-md-6 offset-md-3 text-center'>
          <h1 className='pt-5 fw-bold'>Lets get started</h1>
          <p className='lead pb-4'>
            Sign up for free No Credit Card required..!!
          </p>

          <div className='form-group'>
            <Input label='Name' value={name} setValue={setName} />
            <Input
              label='Email'
              type='email'
              value={email}
              setValue={setEmail}
            />
            <Input
              label='Password'
              type='password'
              value={password}
              setValue={setPassword}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
