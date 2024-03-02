import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { useDrag } from "react-dnd";
import { getBorderClass } from "../../utils/style-util";
import { ItemTypes } from "./CustomerDecisionTree";

export const NodeElement: FC<
  PropsWithChildren<{
    name: string;
    onClick?: () => void;
    root: boolean;
    isFirstChild: boolean;
    isLastChild: boolean;
    pid?: string;
    id: string;
    type: ItemTypes;
  }>
> = ({
  name,
  children,
  onClick,
  root,
  isFirstChild,
  isLastChild,
  id,
  type,
  pid,
}) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: type,
    item: { id, type, pid },
  }));

  return (
    <div className="flex flex-col items-center">
      <div className="w-full relative h-6">
        {!root && (
          <>
            {!isLastChild && (
              <div className="absolute h-0.5 w-1/2 left-1/2 top-0 bg-gray-500" />
            )}

            <div className="absolute w-0.5 h-full left-1/2 bg-gray-500" />
            {!isFirstChild && (
              <div className="absolute h-0.5 w-1/2 left-0 top-0 bg-gray-500" />
            )}
          </>
        )}
      </div>
      <div
        ref={drag}
        onClick={onClick}
        className="bg-white text-black px-4 w-44"
      >
        <div
          className={clsx(
            "border-2 border-solid border-gray-500 rounded-xl  h-12 flex justify-center items-center",
            getBorderClass(type)
          )}
        >
          {name}
        </div>
      </div>
      {children && (
        <div className="w-full relative h-6">
          <div className="absolute w-0.5 h-full left-1/2 bg-gray-500" />
        </div>
      )}
      <div className="flex">{children}</div>
    </div>
  );
};
