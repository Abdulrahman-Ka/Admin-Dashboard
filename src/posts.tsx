import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  Create,
  DeleteButton,
  useRecordContext,
} from "react-admin";

const postFilters = [
  <TextInput source="q" label="search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid>
      <ReferenceField source="userId" reference="users" link="show" />
      <TextField source="id" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" InputProps={{ disabled: true }} />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);
