import React, { useState } from "react";
import { postDataAuthor, updateAuthor } from "../../services";
import { Button, Form, Input, Modal } from "antd";
import { getDataAuthorById } from "../../services";
const { TextArea } = Input;

const CreateAuthor = ({
  open,
  onCreate,
  onCancel,
  confirmLoading,
  author,
  name,
}) => {
  const [form] = Form.useForm();

  form.setFieldsValue({
    value: author.value,
    biografi: author.biografi,
  });

  const oke = `${name} Author`;
  const title = `${name} Data Author`;

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
      <Form form={form} layout="vertical" name="addAuthor">
        <Form.Item
          name="value"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="biografi"
          label="Biografi"
          rules={[
            {
              required: true,
              message: "Isi Biografi",
            },
          ]}
        >
          <TextArea rows={2} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const ModalFormAuthor = ({ name, type, id }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [author, setAuthor] = useState([]);

  const onCreate = (values) => {
    setConfirmLoading(true);
    if (type === "update") {
      updateAuthor(id, values);
    } else {
      postDataAuthor(values);
    }
    setTimeout(() => {
      setConfirmLoading(false);
      setOpen(false);
    }, 3000);
  };

  const clickHandler = (id) => {
    setOpen(true);
    if (type == "update") {
      getDataAuthorById(id, setAuthor);
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

      <CreateAuthor
        open={open}
        onCreate={onCreate}
        confirmLoading={confirmLoading}
        author={author}
        name={name}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default ModalFormAuthor;
