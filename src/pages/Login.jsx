import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
//import axios from "./../api/axios";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { LoginBox } from './../components/UI';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(state => state.auth.loading);

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <LoginBox onSubmit={onSubmit} />
    </>
  );
};

export default Login;
