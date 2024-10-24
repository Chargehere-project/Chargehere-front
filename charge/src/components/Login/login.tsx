import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import './login.css'

const Login: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/login', {
        id,
        password
      });

      if (response.data.result) {
        // 토큰을 로컬 스토리지에 저장
        localStorage.setItem('token', response.data.response.token);
        
        // 로그인 성공 메시지
        alert(response.data.message);
        
        // 메인 페이지나 대시보드로 이동
        router.push('/');
      } else {
        // 로그인 실패 메시지
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="id">아이디:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
