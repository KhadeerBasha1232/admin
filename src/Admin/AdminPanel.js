import React from 'react'
import { Admin, Resource } from 'react-admin';
import {dataProvider} from './dataProvider';
import { PostList } from './PostList';
import { Orders } from './Orders';
import { Contact } from './Contact';
import ContactEdit from './ContactEdit';
import { RentList } from './RentList';
import  BuyEdit  from './BuyEdit';
import  RentEdit  from './RentEdit';
import  OrderEdit  from './OrderEdit';

const AdminPanel = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="fetchBuy"  options={{ label: 'Property For Sale' }} edit={BuyEdit} list={PostList} />
            <Resource name="fetchRent" options={{ label: 'Property For Rent' }} edit = {RentEdit} list={RentList} />
            <Resource name="orders" options={{ label: 'Orders' }} edit = {OrderEdit} list={Orders} />
            <Resource name="contacts" options={{ label: 'Contacts' }} edit={ContactEdit} list={Contact} />
        </Admin>
    )
}

export default AdminPanel
