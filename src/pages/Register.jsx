import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
//import axios from "./../api/axios";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { RegisterBox } from './../components/UI';

const Register = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  return <RegisterBox />;
};

export default Register;
