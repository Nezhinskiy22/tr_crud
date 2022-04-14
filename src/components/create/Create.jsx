import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

const Create = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const sendDataToAPI = () => {
    axios
      .post(`https://6256fb066ea7037005433908.mockapi.io/Crud`, {
        firstName,
        lastName,
      })
      .then(() => {
        history.push("/read");
      });
  };
  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input
          name="fname"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          name="lname"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Button type="submit" onClick={sendDataToAPI}>
        Submit
      </Button>
    </Form>
  );
};

export default Create;
