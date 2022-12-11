import React, { useState, useEffect } from "react";
import { Button, Table, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { deleteData, getDataAuthor } from "../../services";
import ModalFormAuthor from "../ModalFormAuthor/ModalFormAuthor";

const { Column } = Table;

const TableAuthor = () => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    getDataAuthor(setAuthor);
    console.log(author);
  }, []);

  const confirm = (id) => {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Delete data ?",
      okText: "Yes",
      cancelText: "No",
      onOk() {
        deleteData(id, "author");
      },
    });
  };

  return (
    <div className="outer-table">
      <div className="form-table">
        <h1>Data Author</h1>
        <ModalFormAuthor name="Add" />
      </div>
      <Table dataSource={author} pagination={{ hideOnSinglePage: true }}>
        <Column title="#" dataIndex="id" key="id" width={50} />
        <Column title="Name" dataIndex="value" key="value" />
        <Column title="Biografi" dataIndex="biografi" />
        <Column
          title="Action"
          key="Action"
          render={(record) => (
            <>
              <Button type="primary" danger onClick={() => confirm(record.id)}>
                Delete
              </Button>
              <ModalFormAuthor name="Update" type="update" id={record.id} />
            </>
          )}
        />
      </Table>
    </div>
  );
};

export default TableAuthor;
