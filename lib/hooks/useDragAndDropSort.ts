import { useState, Dispatch, SetStateAction } from "react";
import { isEmptyArray } from "shared-functions";
import type {
  DragAndDrop,
  HandleDragStart,
  HandleDragOver,
  HandleDrop,
  OnDragLeave,
  HandleManualMove
} from "@/types/DragAndDropTypes";

type UseDragAndDropSortProps<T> = {
  updateArray: Dispatch<SetStateAction<T[]>> | ((value: T[]) => void);
  callback: (value: T, index: number) => void;
};

const useDragAndDropSort = <T>({ updateArray, callback }: UseDragAndDropSortProps<T>) => {
  // * implemented drag and drop based off this: https://codepen.io/florantara/pen/jjyJrZ?editors=0100 -- 03/31/2026 JH

  const [dragAndDrop, setDragAndDrop] = useState<DragAndDrop<T>>({
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: []
  });

  const handleDragStart: HandleDragStart<T> = (event, originalArray) => {
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: originalArray
    });

    // event.dataTransfer.setData("text/html", "");
  };

  const handleDragOver: HandleDragOver = event => {
    event.preventDefault();

    if (dragAndDrop.originalOrder && dragAndDrop.draggedFrom !== null) {
      let newList: T[] = dragAndDrop.originalOrder;
      const draggedFrom: number = dragAndDrop.draggedFrom;
      const draggedTo: number = Number(event.currentTarget.dataset.position);

      const itemDragged: T = newList[draggedFrom]!;
      const remainingItems = newList.filter((item, index) => index !== draggedFrom);

      newList = [
        ...remainingItems.slice(0, draggedTo),
        itemDragged,
        ...remainingItems.slice(draggedTo)
      ];

      if (draggedTo !== dragAndDrop.draggedTo) {
        setDragAndDrop({
          ...dragAndDrop,
          updatedOrder: newList,
          draggedTo: draggedTo
        });
      }
    }
  };

  const handleDrop: HandleDrop = () => {
    updateArray(dragAndDrop.updatedOrder);

    if (!isEmptyArray(dragAndDrop.updatedOrder)) {
      dragAndDrop.updatedOrder.forEach((updatedItem, index) => {
        callback(updatedItem, index);
      });
    }

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false
    });
  };

  const onDragLeave: OnDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null
    });
  };

  const handleManualMove: HandleManualMove<T> = (index, direction, originalArray) => {
    const targetIndex = index + direction;

    if (targetIndex >= 0 && targetIndex < originalArray.length) {
      const reorderedArray = [...originalArray];

      const clickedSeminar: T = reorderedArray[index]!;
      const affectedSeminar: T = reorderedArray[targetIndex]!;

      reorderedArray[index] = affectedSeminar;
      reorderedArray[targetIndex] = clickedSeminar;

      updateArray(reorderedArray);

      callback(reorderedArray[index], index);
      callback(reorderedArray[targetIndex], targetIndex);
    }
  };

  return {
    dragAndDrop,
    handleDragStart,
    handleDragOver,
    handleDrop,
    onDragLeave,
    handleManualMove
  };
};

export default useDragAndDropSort;
