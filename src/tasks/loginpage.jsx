import User from './user'
import Admin from './admin'
function Parent(props) {
  
    return props.login === "user"?<User/>:<Admin/>
}

export default Parent;