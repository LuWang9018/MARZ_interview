import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsPage from "./ProductsPage";
import { GET_ALL_ACTIVE_PRODUCT_URL, UPDATE_PRODUCT_STATUS_URL } from "../ApiHelper";

export default {
    title: 'Product Page',
    component: ProductsPage,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
    mockData: [
        {
            url: GET_ALL_ACTIVE_PRODUCT_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [
                    {
                      "ProductID": 1,
                      "ProductName": "A",
                      "ProductPhotoURL": "https://media.gq.com/photos/61895877cd7f3b17165aa95b/master/w_2000,h_1333,c_limit/L.jpg",
                      "ProductStatus": 'Active'
                    },
                    {
                      "ProductID": 2,
                      "ProductName": "B",
                      "ProductPhotoURL": "https://media.gq.com/photos/61895877cd7f3b17165aa95b/master/w_2000,h_1333,c_limit/L.jpg",
                      "ProductStatus": 'Active'
                    },
                    {
                      "ProductID": 3,
                      "ProductName": "C",
                      "ProductPhotoURL": "https://media.gq.com/photos/61895877cd7f3b17165aa95b/master/w_2000,h_1333,c_limit/L.jpg",
                      "ProductStatus": 'InActive'
                    },
                    {
                      "ProductID": 4,
                      "ProductName": "D",
                      "ProductPhotoURL": "https://media.gq.com/photos/61895877cd7f3b17165aa95b/master/w_2000,h_1333,c_limit/L.jpg",
                      "ProductStatus": 'InActive'
                    },
                ],
                message: ""
            },
        },
        {
            url: UPDATE_PRODUCT_STATUS_URL,
            method: 'POST',
            status: 200,
            response: {
                data: {
                    message: 'Success',
                },
            },
        },
    ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
    mockData: [
        {
            url: GET_ALL_ACTIVE_PRODUCT_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [],
                message: ""
            },
        },
        {
            url: UPDATE_PRODUCT_STATUS_URL,
            method: 'POST',
            status: 200,
            response: {
                data: {
                    message: 'Success',
                },
            },
        },
    ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
    mockData: [
        {
            url: GET_ALL_ACTIVE_PRODUCT_URL,
            method: 'GET',
            status: 500,
            response: {
                data: [],
                message: "Error"
            }
        },
        {
            url: UPDATE_PRODUCT_STATUS_URL,
            method: 'POST',
            status: 200,
            response: {
                data: {
                    message: 'Success',
                },
            },
        },
    ],
};
