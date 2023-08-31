var contentList = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

grouped_list = [];
//go through each item in contentList
contentList.forEach((e) => {
  //add item to top level when the parent is 0
  if (e.parent === 0) {
    grouped_list.push({ id: e.id, name: e.name, children: [] });
  } else {
    //find the index of where the parent was added in grouped_list
    let parent_index = grouped_list.findIndex((g) => e.parent === g.id);
    // console.log(parent_index);
    //if the parent is found in grouped_list, add it under the parent
    if (parent_index >= 0) {
      grouped_list[parent_index].children.push({
        id: e.id,
        name: e.name,
        children: [],
      });
    } else {
      //if the parent is not found, check children for parent id
      grouped_list.forEach((o, index) => {
        let parent_index = o.children.findIndex((g) => e.parent === g.id);
        if (parent_index >= 0) {
          grouped_list[index].children[parent_index].children.push({
            id: e.id,
            name: e.name,
          });
        }
      });
    }
  }
});

console.log(grouped_list);
