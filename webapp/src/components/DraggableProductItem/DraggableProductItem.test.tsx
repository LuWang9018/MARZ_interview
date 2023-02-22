import React from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import { create, ReactTestRenderer} from 'react-test-renderer';
import DraggableProductItem from './DraggableProductItem';

describe('DraggableProductItem', () => {
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
      ProductPhotoURL: "https://media.gq.com/photos/61895877cd7f3b17165aa95b/master/w_2000,h_1333,c_limit/L.jpg",
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