import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { DraggableProductItemProps } from '../interfaces';

const DraggableProductItem = (props: DraggableProductItemProps) => (
    <div
        ref={props.draggableProvided.innerRef}
        {...props.draggableProvided.draggableProps}
        {...props.draggableProvided.dragHandleProps}
        className='relative bg-neutral-300 items-center justify-between mt-1 p-3 rounded w-full aspect-[3/4] z-0'
        data-testid={`draggable-container-${props.ProductID}`}
    >
        <img 
            data-testid={`draggable-productPhotoUrl-${props.ProductID}`} 
            src={`${props.ProductPhotoURL}`} alt={`${props.ProductPhotoURL}`}
            className = 'w-[100%] max-w-[100%] object-contain aspect-[3/4]'
        >

        </img>
        <span 
            className = 'grid'
            data-testid={`draggable-productName-${props.ProductName}`}
        >
            Product Name : { props.ProductName }
        </span>
        <span 
            className = 'grid'
            data-testid={`draggable-productID-${props.ProductID}`}
        >
            Product ID: { props.ProductID }
        </span>
    </div>
);

export default DraggableProductItem;