import {useDispatch} from 'react-redux';
import authSerivce from '../../appwrite/auth';
import {logout} from '../../store/authSlice';

export default function LogoutBtn(){
  const dispatch = useDispatch();
  const handleLogout = () => {
    authSerivce.logout().then(()=>{
      dispatch(logout());
    })
    
  };
  return (
    <button 
      onClick={handleLogout}
      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      >Logout</button>
  );
}
}