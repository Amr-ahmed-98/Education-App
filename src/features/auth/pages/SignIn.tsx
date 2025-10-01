// http://localhost:3000/users
import useApi from '../hooks/useApi'
function SignIn() {
  const {data, isPending, isError} = useApi({url: 'http://localhost:3000/users' , method: 'get' , enabled: true})
  console.log(data, isPending, isError)
  return (
    <div>
      SignIn Page
    </div>
  )
}

export default SignIn