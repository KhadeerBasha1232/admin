import { Edit, SimpleForm, TextInput } from 'react-admin';

const OrderEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="email" />
            <TextInput source="listing_id" />
            <TextInput source="name" />
            <TextInput source="status" />
            <TextInput source="price" />
        </SimpleForm>
    </Edit>
);
export default OrderEdit