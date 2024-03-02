import { FC, PropsWithChildren } from "react";
import { useDrag } from "react-dnd";

export const NodeElement: FC<
  PropsWithChildren<{
    name: string;
    onClick?: () => void;
    root: boolean;
    isFirstChild: boolean;
    isLastChild: boolean;
    pid?: string;
    id: string;
    type: string;
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
              <div className="absolute h-0.5 w-1/2 left-1/2 top-0 bg-black" />
            )}

            <div className="absolute w-0.5 h-full left-1/2 bg-black" />
            {!isFirstChild && (
              <div className="absolute h-0.5 w-1/2 left-0 top-0 bg-black" />
            )}
          </>
        )}
      </div>
      <div
        ref={drag}
        onClick={onClick}
        className="bg-white text-black px-4 w-52"
      >
        <div className="border border-solid border-black w-full text-center">
          {" "}
          {name}
        </div>
      </div>
      {children && (
        <div className="w-full relative h-6">
          <div className="absolute w-0.5 h-full left-1/2 bg-black" />
        </div>
      )}
      <div className="flex">{children}</div>
    </div>
  );
};
