import React, { useContext } from "react";
import { GenresContext } from '../../contexts/genresContext';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UpdatedFilterControls = props => {
  const context = useContext(GenresContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <>
    <Form>
        <Row>
          <Col>
                <Form.Control placeholder="Title Search" onChange={handleTextChange} />
        </Col>
        <Col>
                
            </Col>
        </Row>
    </Form>
    <br/>
    </>
  );
};

export default UpdatedFilterControls;