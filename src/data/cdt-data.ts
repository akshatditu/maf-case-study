import { OriginData } from "../components/CustomerDecisionTree";

export const data: OriginData[] = [
  {
    type: "origin",
    id: "origin1",
    label: "Premium",
    data: {
      val: 45,
      vol: 30,
    },
    children: [
      {
        type: "brand",
        id: "brand1",
        label: "Local",
        data: {
          val: 45,
          vol: 30,
        },
        children: [
          {
            type: "type",
            id: "type1",
            label: "Brand 1",
            data: {
              val: 45,
              vol: 30,
            },
            children: [
              {
                id: "size1",
                label: "Size 1",
                type: "size",
              },
            ],
          },
        ],
      },
      {
        type: "brand",
        id: "brand2",
        label: "International",
        data: {
          val: 45,
          vol: 30,
        },
        children: [
          {
            type: "type",
            id: "type2",
            label: "Brand 2",
            data: {
              val: 45,
              vol: 30,
            },
          },
        ],
      },
      {
        type: "brand",
        id: "brand3",
        label: "Region",
        data: {
          val: 45,
          vol: 30,
        },
      },
    ],
  },
  {
    type: "origin",
    id: "origin2",
    label: "Main Stream",
    data: {
      val: 45,
      vol: 30,
    },
    children: [
      {
        type: "brand",
        id: "brand7",
        label: "Local",
        data: {
          val: 45,
          vol: 30,
        },
      },
      {
        type: "brand",
        id: "brand8",
        label: "International",
        data: {
          val: 45,
          vol: 30,
        },
      },
      {
        type: "brand",
        id: "brand9",
        label: "Region",
        data: {
          val: 45,
          vol: 30,
        },
      },
    ],
  },
  {
    type: "origin",
    id: "origin3",
    label: "Low Budget",
    data: {
      val: 45,
      vol: 30,
    },
    children: [
      {
        type: "brand",
        id: "brand10",
        label: "Local",
        data: {
          val: 45,
          vol: 30,
        },
      },
      {
        type: "brand",
        id: "brand11",
        label: "International",
        data: {
          val: 45,
          vol: 30,
        },
      },
      {
        type: "brand",
        id: "brand12",
        label: "Region",
        data: {
          val: 45,
          vol: 30,
        },
      },
    ],
  },
  {
    type: "origin",
    id: "origin4",
    label: "Entry",
    data: {
      val: 45,
      vol: 30,
    },
    children: [
      {
        type: "brand",
        id: "brand4",
        label: "Local",
        data: {
          val: 45,
          vol: 30,
        },
      },
      {
        type: "brand",
        id: "brand5",
        label: "International",
        data: {
          val: 45,
          vol: 30,
        },
      },
      {
        type: "brand",
        id: "brand6",
        label: "Region",
        data: {
          val: 45,
          vol: 30,
        },
      },
    ],
  },
];

export const componentData = {
  data,
  sizes: {
    size2: {
      id: "size2",
      label: "Size 2",
      type: "size",
      data: {
        val: 45,
        vol: 30,
      },
    },
    size3: {
      id: "size3",
      label: "Size 3",
      type: "size",
      data: {
        val: 45,
        vol: 30,
      },
    },
    size4: {
      id: "size4",
      label: "Size 4",
      type: "size",
      data: {
        val: 45,
        vol: 30,
      },
    },
    size5: {
      id: "size5",
      label: "Size 5",
      type: "size",
      data: {
        val: 45,
        vol: 30,
      },
    },
    size6: {
      id: "size6",
      label: "Size 6",
      type: "size",
      data: {
        val: 45,
        vol: 30,
      },
    },
  },
};
