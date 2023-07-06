import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useStateContext } from "../contexts/ContextProvider";

const KanbanColumn = ({ column, tasks }) => {
  const { currentColor } = useStateContext();
  return (
    <div className="py-4 px-2 bg-gray-100 dark:bg-main-dark-bg rounded-lg w-full md:w-[32.5%]">
      <h3 className="mb-8 dark:text-white">{column.title}</h3>

      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            className="flex flex-col gap-3"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <div
                    className="p-2 bg-white dark:bg-secondary-dark-bg rounded min-h-[70px] text-sm text-gray-600 dark:text-gray-100 border-2 border-dotted"
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}

                    // style={{
                    //   borderColor: draggableSnapshot.isDragging
                    //     ? currentColor
                    //     : "transparent",
                    // }}
                  >
                    <p>{task.content}</p>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default KanbanColumn;
