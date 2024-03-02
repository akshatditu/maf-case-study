export const buildTree = (data: any, key: string, object: any) => {
  for (let i = 0; i < data.length; i++) {
    if (object[key]) {
      object[key] = [...object[key], data[i].id];
    } else {
      object[key] = [data[i].id];
    }
    if (data[i]?.children?.length) {
      buildTree(data[i].children, data[i].id, object);
    }
  }
  return object;
};

export const flattenData = (data: any, object: any) => {
  for (let i = 0; i < data.length; i++) {
    object[data[i].id] = { ...data[i], children: null };
    if (data[i]?.children?.length) {
      flattenData(data[i].children, object);
    }
  }
  return object;
};

export const buildTreeData = (
  treeData: any,
  flatData: any,
  rootKey: string
): any => {
  const data = [];
  const root = treeData[rootKey];
  if (root?.length) {
    for (let i = 0; i < root.length; i++) {
      data.push({
        ...flatData[root[i]],
        children: buildTreeData(treeData, flatData, root[i]),
      });
    }
    return data;
  }
  return [];
};
