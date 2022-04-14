import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState(null);
  const history = useHistory();

  const sendDataToAPI = () => {
    axios
      .put(`https://6256fb066ea7037005433908.mockapi.io/Crud/${ID}`, {
        firstName,
        lastName,
      })
      .then(() => {
        history.push("/read");
      });
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input
          name="fname"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          name="lname"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Button type="submit" onClick={sendDataToAPI}>
        Update
      </Button>
    </Form>
  );
};

export default Update;
