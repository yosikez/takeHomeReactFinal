import React, { useEffect, useState } from "react";
import { getDataBookMaster } from "../../services";
import { Button, Table, Modal, notification, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { deleteData } from "../../services";
import ModalFormBook from "../ModalFormBook/ModalFormBook";
import "./MasterDataPages.style.css";

const { Column } = Table;
const MasterDataPages = () => {
  const [masterBook, setMasterBook] = useState([]);
  let number = 1;

  useEffect(() => {
    getDataBookMaster(setMasterBook);
  }, []);

  const confirm = (id) => {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Delete data ?",
      okText: "Yes",
      cancelText: "No",
      onOk() {
        deleteData(id, "books");
      },
    });
  };

  const success = () => {
    notification.success({
      message: "Success",
      description: "Copy Success",
    });
  };

  return (
    <div className="outer-table">
      <div className="form-table">
        <h1>Master Data Book</h1>
        <ModalFormBook name="Add" />
      </div>
      <Table dataSource={masterBook} pagination={{ hideOnSinglePage: true }}>
        <Column title="#" render={() => number++} key="id" width={50} />
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="Genre" dataIndex="genre" key="genre" />
        <Column title="Author" dataIndex="author" key="author" />
        <Column
          title="Description"
          dataIndex="desc"
          key="desc"
          className="table-desc"
          ellipsis={true}
        />
        <Column
          title="Action"
          key="Action"
          render={(record) => (
            <>
              <Button type="primary" danger onClick={() => confirm(record.id)}>
                Delete
              </Button>
              <ModalFormBook type="update" id={record.id} name="Update" />
            </>
          )}
        />
      </Table>
    </div>
  );
};

export default MasterDataPages;
