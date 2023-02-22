import React from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import { create, ReactTestRenderer} from 'react-test-renderer';
import DraggableProductItem from './DraggableProductItem';

describe('DraggableItem', () => {
  let tree: ReactTestRenderer;
  const ID = '1';
  beforeEach(() => {
    const draggableProvided: DraggableProvided = ({
        innerRef: () => {},
        draggableProps: {
            'data-rbd-draggable-context-id': '1',
            'data-rbd-draggable-id': '1',
        },
        dragHandleProps: null,
    }); 
    const props = {
      ProductID : 1,
      ProductName: "A",
      ProductPhotoURL: "1234",
      ProductStatus: 'Active', 
      draggableProvided,
      removeProduct: () => {},
  };
    tree = create(<DraggableProductItem {...props} />);
  });
  afterEach(() => {
    tree.unmount();
  });
  it('rendersDraggableProductItem', async () => {
    const testInstance = tree.root;
    await testInstance.findByProps({ 'data-testid': `draggable-container-${ID}`});
    await testInstance.findByProps({ 'data-testid': `draggable-productPhotoUrl-${ID}`});
    await testInstance.findByProps({ 'data-testid': `draggable-productID-${ID}`});
    await testInstance.findByProps({ 'data-testid': `draggable-btn-${ID}`});
  });
});