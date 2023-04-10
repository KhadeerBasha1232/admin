import React from 'react'

import { List, Datagrid, TextField,EditButton, DeleteButton } from 'react-admin';

export const RentList = (props) => (
    <List {...props}  pagination={false}>
        <Datagrid>
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

