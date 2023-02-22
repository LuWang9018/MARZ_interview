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
    listTitle: 'Test List',
    removeProduct: (product: Product) => {},
    items: [
        { ProductID: 1, ProductName: "A", ProductPhotoURL: "123456", ProductStatus },
        { ProductID: 2, ProductName: "B", ProductPhotoURL: "123456", ProductStatus },
        { ProductID: 3, ProductName: "C", ProductPhotoURL: "123456", ProductStatus },
    ],
});

export const Active = Template.bind({});
Active.args = getArgs('Active');

export const InActive = Template.bind({});
InActive.args = getArgs('InActive');