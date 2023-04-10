import React from 'react'

import { List, Datagrid, TextField,EditButton, DeleteButton } from 'react-admin';

export const Orders = (props) => (
    <List {...props} pagination={false} bulkActions={false}>
        <Datagrid>
            <TextField source="email" />
            <TextField source="listing_id" />
            <TextField source="name" />
            <TextField source="status" />
            <TextField source="price" />
            <TextField source="date" />
            <TextField source="time" />
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);

