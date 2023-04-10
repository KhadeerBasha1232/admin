import { Edit, SimpleForm, TextInput } from 'react-admin';

const RentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="listing_id" />
            <TextInput source="property_type" />
            <TextInput source="price" />
            <TextInput source="category" />
            <TextInput source="listing_status" />
        </SimpleForm>
    </Edit>
);
export default RentEdit