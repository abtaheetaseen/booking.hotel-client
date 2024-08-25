import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { SiHiltonhotelsandresorts } from 'react-icons/si'

const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-black text-white'>
        <div className='mb-8 text-center'>
          <div className='my-3 text-5xl text-blue-500 flex items-center justify-center'>
          <Link to="/">
            <SiHiltonhotelsandresorts />
            </Link>
          </div>
          <p className='text-sm text-white'>
            Log in to access your account
          </p>
        </div>
        <form
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='text-blue-500 block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder=''
                className='w-full px-3 py-2  border-white bg-black border-[1px] text-white'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-blue-500 text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='current-password'
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
        <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-blue-500 text-gray-400'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-blue-500 text-white'
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login