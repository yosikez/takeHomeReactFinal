import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import {
  getDataAuthor,
  getDataBookById,
  postDataBook,
  updateDataBook,
} from "../../services";
const { Option } = Select;
const { TextArea } = Input;

const CreateForm = ({
  open,
  onCreate,
  onCancel,
  confirmLoading,
  setOptVal,
  book,
  name,
}) => {
  const [form] = Form.useForm();
  const [author, setAuthor] = useState([]);

  const handleChange = async (value) => {
    const clickedOpt = author.find((author) => author.value === value);
    setOptVal(clickedOpt.id);
    console.log(clickedOpt.id);
  };
  const oke = `${name} Book`;
  const title = `${name} Data Book`;
  useEffect(() => {
    getDataAuthor(setAuthor);
  }, []);

  form.setFieldsValue({
    title: book.title,
    author: book.author,
    genre: book.genre,
    cover: book.cover,
    desc: book.desc,
  });

  return (
    <Modal
      open={open}
      title={title}
      okText={oke}
      cancelText="Cancel"
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onCreate(values);
            setTimeout(() => {
              form.resetFields();
            }, 3000);
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      {console.log(book.cover)}
      <Form form={form} layout="vertical" name="addBook">
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="author"
          label="Author"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Author" allowClear onChange={handleChange}>
            {author.map((aut) => (
              <Option key={aut.value} value={aut.value}>
                {aut.value}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="cover"
          label="Cover"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="genre"
          label="Genre"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Author" allowClear>
            <Option value="mistery">Mistery</Option>
            <Option value="horror">Horror</Option>
            <Option value="comedy">Comedy</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="desc"
          label="Description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea rows={2} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const ModalFormBook = ({ name, type, id }) => {
  const [optVal, setOptVal] = useState();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [book, setBook] = useState([]);

  const onCreate = (values) => {
    setConfirmLoading(true);
    if (type === "update") {
      updateDataBook(values, id, optVal);
    } else {
      postDataBook(values, optVal);
    }
    setTimeout(() => {
      setConfirmLoading(false);
      setOpen(false);
    }, 3000);
  };

  const clickHandler = (id) => {
    setOpen(true);
    if (type == "update") {
      getDataBookById(id, setBook);
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          clickHandler(id);
        }}
      >
        {name}
      </Button>

      <CreateForm
        open={open}
        onCreate={onCreate}
        confirmLoading={confirmLoading}
        setOptVal={setOptVal}
        book={book}
        name={name}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default ModalFormBook;
