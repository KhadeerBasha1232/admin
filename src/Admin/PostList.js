import React from 'react'

import { List, Datagrid, TextField,EditButton, DeleteButton } from 'react-admin';


const MyBulkActionsToolbar = () => <div />;

export const PostList = (props) => (
    <List {...props}  pagination={false}  bulkActionButtons={<MyBulkActionsToolbar />}>
        <Datagrid hasBulkActions={false}>
            <TextField source="listing_id" />
            <TextField source="property_type" />
            <TextField source="price" />
            <TextField source="listing_status" />
            <TextField source="category" />
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);

