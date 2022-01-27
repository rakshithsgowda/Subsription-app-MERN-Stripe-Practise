import { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'

import Button from '../components/Button'
import Input from '../components/Input'

const Register = () => {
  const [name, setName] = useState('india')
  const [email, setEmail] = useState('india@india.india')
  const [password, setPassword] = useState('india')

  const handleClick = async (e) => {
    // await console.log(name, email, password)
    // our end point will start with something like "http://localhost:8000/api/v1".
    try {
      e.preventDefault()
      const { data } = await axios.post(
        `${process.env.REACT_APP_PORT_FOR_BACKEND_CALL}/register`,
        {
          name,
          email,
          password,
        }
      )
      console.log(data)
      if (data.error) {
        return toast.error(data.error)
      }

      toast.success('Registration successful. Please login')
    } catch (error) {
      console.log('error')
      toast.error('something went wrong this time')
    }
  }

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
            <div className='d-grid'>
              <Button
                handleClick={handleClick}
                type='secondary'
                text='Register'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
