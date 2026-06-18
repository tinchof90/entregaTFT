import { userLogin } from '../../Services/Service';
import UserForm from '../General/UserForm';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Card, Container, Col, Row } from "react-bootstrap";
import './Login.css';
import reducer from "../../store/reducer";

const store = createStore(reducer);

const Login = () => {
  return (
    <div>
      <Provider store={store}>
        <Container
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "100vh",
          }}
        >
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <UserForm requestedData={userLogin} buttonName="Login" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </Provider>
    </div>
  );
};

export default Login;