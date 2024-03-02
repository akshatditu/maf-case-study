import { NodeElement } from "./customer-decision-tree/NodeElement";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { buildTree, buildTreeData, flattenData } from "../utils/utils";
import Sizes from "./customer-decision-tree/Sizes";

export enum ItemTypes {
  ORIGIN = "origin",
  BRAND = "brand",
  TYPE = "type",
  SIZE = "size",
}

export interface OriginData {
  type: string;
  id: string;
  label: string;
  data?: object;
  children?: OriginData[];
}

export type CustomerDescisionTreeDataProps = {
  data: OriginData[];
  root: boolean;
  sizes: any;
};

export default function CustomerDecisionTree(
  props: CustomerDescisionTreeDataProps
) {
  const [treeData, setTreeData] = useState<any>({});
  const [flatData, setFlatData] = useState<any>({});
  const [buildData, setBuildData] = useState([]);
  const [sizes, setSizes] = useState<any>(props.sizes);
  const { data } = props;
  useEffect(() => {
    const treeData = buildTree(data, "root", {});
    const flat = flattenData(data, {});
    setTreeData(treeData);
    setFlatData(flat);
    setBuildData(buildTreeData(treeData, flat, "root"));
  }, [data]);

  const handleAddNewSize = (dragId: number, newParentId: number) => {
    const tempTreeData = treeData;
    let tempFlatData = flatData;
    tempFlatData[dragId] = sizes[dragId];
    console.log(tempFlatData, "new flat data");
    setFlatData(tempFlatData);
    let tempSizes = sizes;
    delete tempSizes[dragId];
    console.log(tempFlatData, "new sizes");
    setSizes(tempSizes);
    if (tempTreeData[newParentId]) {
      tempTreeData[newParentId].push(dragId);
    } else {
      tempTreeData[newParentId] = [dragId];
    }
    console.log(tempFlatData, "new tree data");
    setTreeData(tempTreeData);
    console.log(tempFlatData, "new build data");
    setBuildData(buildTreeData(treeData, flatData, "root"));
  };

  const handleDrop = (
    dragId: number,
    dragParentId: number,
    newParentId: number,
    type?: ItemTypes
  ) => {
    const tempTreeData = treeData;
    if (!dragParentId && type === ItemTypes.SIZE) {
      handleAddNewSize(dragId, newParentId);
      return;
    }

    const parentNodes = tempTreeData[dragParentId];
    parentNodes.splice(parentNodes.indexOf(dragId), 1);
    tempTreeData[dragParentId] = parentNodes;
    if (tempTreeData[newParentId]) {
      tempTreeData[newParentId].push(dragId);
    } else {
      tempTreeData[newParentId] = [dragId];
    }
    setTreeData(tempTreeData);
    setBuildData(buildTreeData(treeData, flatData, "root"));
  };

  if (!buildData.length) {
    return null;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        {buildData.map((d: OriginData, index: number) => (
          <Node
            handleDrop={handleDrop}
            key={d.id}
            val={d}
            id={d.id}
            root={props.root}
            index={index}
            expandChild={index === 0}
            isFirstChild={index === 0}
            isLastChild={index === data.length - 1}
          >
            {d.children &&
              d.children?.map((brand, index) => {
                return (
                  <Node
                    handleDrop={handleDrop}
                    pid={d.id}
                    acceptedType={[ItemTypes.TYPE]}
                    canDrop={(item) => item.type === ItemTypes.TYPE}
                    key={brand.id}
                    val={brand}
                    id={brand.id}
                    root={false}
                    isFirstChild={index === 0}
                    index={index}
                    expandChild={true}
                    isLastChild={
                      index === (d.children && d.children.length - 1)
                    }
                  >
                    {brand.children &&
                      !!brand.children.length &&
                      brand.children?.map((type, index) => (
                        <Node
                          handleDrop={handleDrop}
                          pid={brand.id}
                          acceptedType={[ItemTypes.SIZE]}
                          canDrop={(item) => item.type === ItemTypes.SIZE}
                          key={type.id}
                          val={type}
                          id={type.id}
                          root={false}
                          isFirstChild={index === 0}
                          index={index}
                          expandChild={true}
                          isLastChild={
                            index ===
                            (brand.children && brand.children?.length - 1)
                          }
                        >
                          {type.children &&
                            !!type.children.length &&
                            type.children.map((size, index) => (
                              <Node
                                handleDrop={handleDrop}
                                pid={type.id}
                                key={size.id}
                                val={size}
                                id={size.id}
                                root={false}
                                index={index}
                                expandChild={true}
                                isFirstChild={index === 0}
                                isLastChild={
                                  index ===
                                  (type.children && type.children?.length - 1)
                                }
                              />
                            ))}
                        </Node>
                      ))}
                  </Node>
                );
              })}
          </Node>
        ))}
      </div>
      <Sizes sizes={sizes} />
    </DndProvider>
  );
}

const Node: FC<
  PropsWithChildren<{
    val: any;
    root: boolean;
    isFirstChild: boolean;
    isLastChild: boolean;
    id: string;
    index: number;
    acceptedType?: ItemTypes[];
    canDrop?: (item: any) => boolean;
    expandChild?: boolean;
    pid?: string;
    handleDrop: (
      dragId: number,
      dragParentId: number,
      newParentId: number,
      type: ItemTypes
    ) => void;
  }>
> = ({
  isFirstChild,
  isLastChild,
  val,
  root,
  children,
  acceptedType,
  canDrop,
  expandChild,
  pid,
  handleDrop,
}) => {
  const [expand, setExpand] = useState(expandChild);
  const [collectedProps, drop] = useDrop(() => ({
    accept: acceptedType ?? "",
    drop(_item: { id: number; pid: number; type: ItemTypes }, monitor) {
      handleDrop(_item.id, _item.pid, val.id, _item.type);
    },
    canDrop,
  }));
  return (
    <div ref={drop} id={val.label}>
      <NodeElement
        pid={pid}
        id={val.id}
        root={root}
        name={val.label}
        isFirstChild={isFirstChild}
        isLastChild={isLastChild}
        onClick={() => setExpand((prev) => !prev)}
        type={val.type}
      >
        {expand && children}
      </NodeElement>
    </div>
  );
};
