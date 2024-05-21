import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <Container className="user-profile mt-4">
      <Row>
        <Col md={4} className="text-center">
          <Image
            src="https://via.placeholder.com/150"
            roundedCircle
            className="profile-picture"
          />
        </Col>
        <Col md={8}>
          <Row className="align-items-center">
            <Col xs={8}>
              <h2 className="username">{user.name_user}</h2>
            </Col>
            <Col xs={4} className="text-right">
            </Col>
          </Row>
          <Row className="user-stats mt-3">
            <Col>{user.email}</Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <h5>Nombre Completo</h5>
              <p className="bio">
                xxxx
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
/* import React from 'react'

const Profile = ({ user }) => {
  return (
    <div className="my-account">
      <div className="profile-picture">
        <img src={user.profilePicture} alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>{user.name_user}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

export default Profile
 */
