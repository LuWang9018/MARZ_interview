import React from 'react';
import { render, screen } from '@testing-library/react'
import { DragDropContext } from 'react-beautiful-dnd';
import DraggableProductList from './DraggableProductList';
import { Product } from '../interfaces';

describe('DraggableProductList', () => {
    it('rendersDraggableProductList', async () => {
        const ID = '1234';
        const props = {
            ID,
            listTitle: 'Test Product List',
            removeProduct: (product: Product) => {},
            items: [
                { ProductID: 1, ProductName: "A", ProductPhotoURL: "https://media.gq.com/photos/61895877cd7f3b17165aa95b/master/w_2000,h_1333,c_limit/L.jpg", ProductStatus: "Active" },
                { ProductID: 2, ProductName: "B", ProductPhotoURL: "https://media.gq.com/photos/61895877cd7f3b17165aa95b/master/w_2000,h_1333,c_limit/L.jpg", ProductStatus: "InActive" },
                { ProductID: 3, ProductName: "C", ProductPhotoURL: "https://media.gq.com/photos/61895877cd7f3b17165aa95b/master/w_2000,h_1333,c_limit/L.jpg", ProductStatus: "Active" },
            ],
        };
        render(
            <DragDropContext onDragEnd={() => {}}>
                <DraggableProductList {...props} />
            </DragDropContext>
        );
        expect(screen.getByTestId(`droppable-container-${ID}`)).toBeInTheDocument();
        expect(screen.getByTestId(`droppable-title-${ID}`)).toBeInTheDocument();
        expect(screen.getByText("Product Name : A")).toBeInTheDocument();
        expect(screen.getByText("Product Name : B")).toBeInTheDocument();
        expect(screen.getByText("Product Name : C")).toBeInTheDocument();
    });
  });