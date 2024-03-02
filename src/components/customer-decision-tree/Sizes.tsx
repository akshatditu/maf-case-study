import { ItemTypes } from "./CustomerDecisionTree";
import { useDrag } from "react-dnd";

function Sizes(props: { sizes: any }) {
  const { sizes } = props;
  return (
    <div className="flex flex-row items-center mt-20">
      <div className="text-xl font-semibold	 px-4">Sizes</div>
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
  const [, drag] = useDrag(() => ({
    type: ItemTypes.SIZE,
    item: { id, type: ItemTypes.SIZE },
  }));
  return (
    <div ref={drag} className="bg-white text-black px-4 w-40">
      <div className="border-2 border-solid border-gray-500 rounded-xl bg-gray-300 h-12 flex justify-center items-center">
        {name}
      </div>
    </div>
  );
};

export default Sizes;
