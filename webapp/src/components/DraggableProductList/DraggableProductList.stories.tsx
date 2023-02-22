import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DragDropContext } from 'react-beautiful-dnd';
import DraggableProductList from './DraggableProductList';
import { Product } from '../interfaces';

export default {
    title: 'Draggable Product List',
    component: DraggableProductList,
} as ComponentMeta<typeof DraggableProductList>;

const Template: ComponentStory<typeof DraggableProductList> = (args) => (
    <DragDropContext onDragEnd={() => {}}>
        <DraggableProductList {...args} />
    </DragDropContext>
);

const getArgs = (ProductStatus: string) => ({
    ID: '12345',
    listTitle: 'Test Product List',
    removeProduct: (product: Product) => {},
    items: [
        { ProductID: 1, ProductName: "A", ProductPhotoURL: "https://media.gq.com/photos/61895877cd7f3b17165aa95b/master/w_2000,h_1333,c_limit/L.jpg", ProductStatus: "Active" },
        { ProductID: 2, ProductName: "B", ProductPhotoURL: "https://media.gq.com/photos/61895877cd7f3b17165aa95b/master/w_2000,h_1333,c_limit/L.jpg", ProductStatus: "InActive" },
        { ProductID: 3, ProductName: "C", ProductPhotoURL: "https://media.gq.com/photos/61895877cd7f3b17165aa95b/master/w_2000,h_1333,c_limit/L.jpg", ProductStatus: "Active" },
    ],
});

export const Active = Template.bind({});
Active.args = getArgs('Active');

export const InActive = Template.bind({});
InActive.args = getArgs('InActive');