import './style.css';
import { Link } from 'react-router-dom';
import Login from './Login';

const Register = () => {
    return(
      <div id='register' class="container">
      <div class="form">
        <div id='jdl' class="btn">
          <Link to='/Register' class="signUpBtn">SIGN UP</Link>
          <Link to='/' class="loginBtn">LOG IN</Link>
        </div>
        <form class="pp"/>
        <div class="formGroup">
        <h4>Sign Up</h4>
          </div>
          <div class="formGroup">
            <input type="text" id="username" placeholder="Nama Pengguna" autocomplete="off"/>
          </div>
          <div class="formGroup">
            <input type="email" placeholder="Alamat Email" name="email" required autocomplete="off"/>
          </div>
          <div class="formGroup">
            <input type="password" id="password" placeholder="Kata Sandi" required autocomplete="off"/>
          </div>
          <div class="formGroup">
            <input type="password" id="confirmPassword" placeholder="Konfirmasi Kata Sandi" required autocomplete="off"/>
          </div>
          <div class="checkBox">
            <input type="checkbox" name="checkbox" id="checkbox"/>
            <span class="text">Saya menyetujui syarat & ketentuan</span>
          </div>
          <div class="formGroup">
            <button type="button" class="btn2">DAFTAR</button>
          </div>
          </div>
          </div>        
)
}

export default Register;