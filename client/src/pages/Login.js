// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const navigate = useNavigate();
//   const { setUser } = useAuth();

//   const handleLogin = () => {
//     // Fake login for demo, replace with real Google login logic later
//     const fakeUser = {
//       name: 'John Doe',
//       email: 'john@example.com',
//     };
//     setUser(fakeUser);
//     navigate('/dashboard');
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <button onClick={handleLogin}>Login with Google</button>
//     </div>
//   );
// };

// export default Login;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Container, Card, Button } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogin = () => {
    // Fake login for demo, replace with real Google login logic later
    const fakeUser = {
      name: 'John Doe',
      email: 'john@example.com',
    };
    setUser(fakeUser);
    navigate('/dashboard');
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Container className="d-flex align-items-center justify-content-center vh-100">
        <Card className="p-5 shadow text-center" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="mb-4 text-primary">Login Page</h2>
          <Button variant="danger" onClick={handleLogin} className="fw-semibold">
            <i className="bi bi-google me-2"></i> Login with Google
          </Button>
        </Card>
      </Container>
    </div>
  );
};

export default Login;


