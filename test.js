const sample = [
  {
    id: 1,
    first_name: "Tait",
    country_code: "DE",
  },
  {
    id: 2,
    first_name: "Tabby",
    country_code: "KZ",
  },
  {
    id: 3,
    first_name: "Shayne",
    country_code: "PG",
  },
  {
    id: 4,
    first_name: "Kathrine",
    country_code: "RO",
  },
  {
    id: 5,
    first_name: "Bobbie",
    country_code: "US",
  },
  {
    id: 6,
    first_name: "Ilse",
    country_code: "IT",
  },
  {
    id: 7,
    first_name: "Anissa",
    country_code: "ID",
  },
  {
    id: 8,
    first_name: "Jermaine",
    country_code: "PE",
  },
  {
    id: 9,
    first_name: "Annetta",
    country_code: "US",
  },
  {
    id: 10,
    first_name: "Sheppard",
    country_code: "BS",
  },
];

// id > 6

const mapVar = sample.filter((item) => {
  if (item.id > 6) {
    return item;
  }
});

console.log("mapVar", mapVar);
