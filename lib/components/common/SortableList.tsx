import { isEmpty, isEmptyArray, parse } from "shared-functions";
import type {
  DragAndDrop,
  HandleDragStart,
  HandleDragOver,
  HandleDrop,
  OnDragLeave,
  HandleManualMove
} from "@/types/DragAndDropTypes";

type SortableListProps<T extends Record<string, unknown>> = {
  list: T[];
  titleField: string;
  subtitleField: string;
  dragAndDrop: DragAndDrop<T>;
  handleDragStart: HandleDragStart<T>;
  handleDragOver: HandleDragOver;
  handleDrop: HandleDrop;
  onDragLeave: OnDragLeave;
  handleManualMove: HandleManualMove<T>;
};

const SortableList = <T extends Record<string, unknown>>({
  list = [],
  titleField = "",
  subtitleField = "",
  dragAndDrop = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: []
  },
  handleDragStart,
  handleDragOver,
  handleDrop,
  onDragLeave,
  handleManualMove
}: SortableListProps<T>) => {
  return (
    <>
      {!isEmptyArray(list) ? (
        <ul className="sortable-list">
          {list.map((listItem: T, index: number) => (
            <li key={index} className="sortable-list__item">
              <div className="sortable-list__item__order-number">{index + 1}</div>
              <div
                className={`sortable-list__item__drag-item ${dragAndDrop && dragAndDrop.draggedTo === Number(index) ? "dropArea" : ""}`}
                data-position={index}
                draggable
                onDragStart={event => handleDragStart(event, list)}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDragLeave={onDragLeave}
              >
                <div className="sortable-list__item__drag-item__title">
                  {parse(listItem[titleField])}
                </div>
                {!isEmpty(listItem[subtitleField]) ? (
                  <div className="sortable-list__item__drag-item__subtitle">
                    {parse(listItem[subtitleField])}
                  </div>
                ) : null}
              </div>
              <div className="sortable-list__item__buttons">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={index === 0}
                  onClick={() => handleManualMove(index, -1, list)}
                >
                  <i className="fa fa-chevron-up" />
                  <span className="sr-only">Move Up</span>
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={index + 1 >= list.length}
                  onClick={() => handleManualMove(index, 1, list)}
                >
                  <i className="fa fa-chevron-down" />
                  <span className="sr-only">Move Down</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default SortableList;
