import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfileComponent from './UserProfileComponent'

import { Card, Container } from 'react-bootstrap'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <h1>User Profile</h1>
      <Card>

        <UserProfileComponent />

      </Card>

    </Container>

  </React.StrictMode >
);