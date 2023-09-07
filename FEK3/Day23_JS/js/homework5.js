var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

var options = [];

categories.forEach((e) => {
  const level = "--|";
  options.push(e.name);
  if (e.children) {
    e.children.forEach((c) => {
      options.push(level + c.name);
      if (c.children) {
        c.children.forEach((d) => {
          options.push(level + level + d.name);
        });
      }
    });
  }
});

var optionsMenu = document.getElementById("categories");

options.forEach((e) => {
  var option = document.createElement("option");
  option.value = e;
  option.innerHTML = e;
  optionsMenu.appendChild(option);
});
