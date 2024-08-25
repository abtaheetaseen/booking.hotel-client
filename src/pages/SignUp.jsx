import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { SiHiltonhotelsandresorts } from 'react-icons/si'

const SignUp = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md text-white bg-black'>
        <div className='mb-8 text-center'>
        <div className='my-3 text-5xl text-blue-500 flex items-center justify-center'>
            <Link to="/">
            <SiHiltonhotelsandresorts />
            </Link>
          
          </div>
          <p className='text-sm'>Welcome to Booking.Hotel</p>
        </div>
        <form
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='text-blue-500 block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='w-full px-3 py-2  border-white bg-black border-[1px] text-white'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='text-blue-500 block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='text-blue-500 block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                className='w-full px-3 py-2  border-white bg-black border-[1px] text-white'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='text-blue-500 flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                className='w-full px-3 py-2  border-white bg-black border-[1px] text-white'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-400 w-full rounded-md py-3 text-white'
            >
              Continue
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-blue-500 text-white'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp