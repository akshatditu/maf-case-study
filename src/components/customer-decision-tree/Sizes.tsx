import { ItemTypes } from "../CustomerDecisionTree";
import { useDrag } from "react-dnd";

function Sizes(props: { sizes: any }) {
  const { sizes } = props;
  return (
    <div className="flex flex-col mt-20">
      <div className="flex flex-row">
        {Object.keys(sizes).map((key) => {
          return (
            <Size
              key={sizes[key].id}
              id={sizes[key].id}
              name={sizes[key].label}
            />
          );
        })}
      </div>
    </div>
  );
}

const Size = ({ id, name }: { id: string; name: string }) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: ItemTypes.SIZE,
    item: { id, type: ItemTypes.SIZE },
  }));
  return (
    <div ref={drag} className="bg-white text-black px-4 w-52 ">
      <div className="border border-solid border-black"> {name}</div>
    </div>
  );
};

export default Sizes;
