import React from 'react'

import { List, Datagrid, TextField,EditButton, DeleteButton } from 'react-admin';

export const Contact = (props) => (
    <List {...props} pagination={false} bulkActions={false}>
        <Datagrid>
            <TextField source="email" />
            <TextField source="name" />
            <TextField source="message" />
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);

