import { Edit, SimpleForm, TextInput } from 'react-admin';

const ContactEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="message" />
        </SimpleForm>
    </Edit>
);
export default ContactEdit