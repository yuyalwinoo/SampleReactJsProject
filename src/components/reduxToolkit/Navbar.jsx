import { useDispatch, useSelector } from 'react-redux';
import './reduxToolkit.css'
import { authActions } from '../../store/authReducer';

const Navbar = () => {
    const isLogin = useSelector(state=>state.auth.isLogin);
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        dispatch(authActions.logout());
    }
  return (
    <nav>
        <h2>Counter</h2>
        {
            isLogin && (
                <ul>
                    <li>My Record</li>
                    <li>Profile</li>
                    <li>
                        <button className='welcome-btn' onClick={logoutHandler}>Logout</button>
                    </li>
                </ul>
            )
        }
    </nav>
  )
}

export default Navbar