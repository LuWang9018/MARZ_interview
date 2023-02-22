import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import type { DraggableProvided } from 'react-beautiful-dnd';
import { Product } from '../interfaces';
import DraggableProductItem from './DraggableProductItem';

export default {
    title: 'Draggable Product Item',
    component: DraggableProductItem,
} as ComponentMeta<typeof DraggableProductItem>;

const Template: ComponentStory<typeof DraggableProductItem> = (args) => <DraggableProductItem {...args} />;

const draggableProvided: DraggableProvided = ({
    innerRef: () => {},
    draggableProps: {
        'data-rbd-draggable-context-id': '1',
        'data-rbd-draggable-id': '1',
    },
    dragHandleProps: null,
}); 

const getArgs = (ProductStatus: string) => (
    { 
        ProductID: 1, 
        ProductName: "Name",
        ProductPhotoURL: "https://media.gq.com/photos/61895877cd7f3b17165aa95b/master/w_2000,h_1333,c_limit/L.jpg", 
        ProductStatus: "Active",
        draggableProvided,
        removeProduct: (product: Product) => {},
    }
);

export const Active = Template.bind({});
Active.args = getArgs('Active');

export const Inactive = Template.bind({});
Inactive.args = getArgs('Inactive');