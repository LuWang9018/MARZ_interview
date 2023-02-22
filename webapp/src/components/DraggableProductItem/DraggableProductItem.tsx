import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { DraggableProductItemProps } from '../interfaces';

const DraggableProductItem = (props: DraggableProductItemProps) => (
    <div
        ref={props.draggableProvided.innerRef}
        {...props.draggableProvided.draggableProps}
        {...props.draggableProvided.dragHandleProps}
        className='bg-neutral-300 flex items-center justify-between mt-1 p-3 rounded w-full'
        data-testid={`draggable-container-${props.ProductID}`}
    >
        <span data-testid={`draggable-productPhotoUrl-${props.ProductID}`}>{ props.ProductPhotoURL }</span>
        <span data-testid={`draggable-productID-${props.ProductID}`}>{ props.ProductID }</span>
        {(() => {
            const { ProductID, ProductName, ProductPhotoURL, ProductStatus, removeProduct } = props;
            return (
                <button onClick={() => removeProduct({ ProductID, ProductName, ProductPhotoURL, ProductStatus })}>
                    <FontAwesomeIcon
                        icon={faSquareXmark}
                        className={`${'text-red-600'} fa-lg`}
                        data-testid={`draggable-btn-${props.ProductID}`}
                    />
                </button>
            );
        })()}
    </div>
);

export default DraggableProductItem;