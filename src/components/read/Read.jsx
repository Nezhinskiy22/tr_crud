import React, { useEffect, useState } from "react";
import { Label, Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6256fb066ea7037005433908.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  const setData = (id, firstName, lastName) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  };

  const getData = () => {
    axios
      .get(`https://6256fb066ea7037005433908.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6256fb066ea7037005433908.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>First name</Table.HeaderCell>
          <Table.HeaderCell>Last name</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {apiData.map((data) => {
          return (
            <Table.Row key={data.id}>
              <Table.Cell>
                <Label ribbon>{data.id}</Label>
              </Table.Cell>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>
                <Link to="/update">
                  <Button
                    className="green"
                    onClick={() => {
                      setData(data.id, data.firstName, data.lastName);
                    }}
                  >
                    Update
                  </Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button className="red" onClick={() => onDelete(data.id)}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default Read;
