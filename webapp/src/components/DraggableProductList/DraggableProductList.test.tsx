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
                { ProductID: 1, ProductName: "A", ProductPhotoURL: "123456", ProductStatus: "Active" },
                { ProductID: 2, ProductName: "B", ProductPhotoURL: "123457", ProductStatus: "InActive" },
                { ProductID: 3, ProductName: "C", ProductPhotoURL: "123458", ProductStatus: "Active" },
            ],
        };
        render(
            <DragDropContext onDragEnd={() => {}}>
                <DraggableProductList {...props} />
            </DragDropContext>
        );
        expect(screen.getByTestId(`droppable-container-${ID}`)).toBeInTheDocument();
        expect(screen.getByTestId(`droppable-title-${ID}`)).toBeInTheDocument();
        expect(screen.getByText(`123456`)).toBeInTheDocument();
        expect(screen.getByText(`123457`)).toBeInTheDocument();
        expect(screen.getByText(`123458`)).toBeInTheDocument();
    });
  });