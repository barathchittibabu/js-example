let val1=[
    {
      "id": 5,
      "logic_type": 1,
      "name": "Loading Charges"
    },
    {
      "id": 6,
      "logic_type": 1,
      "name": "Unloading Charges"
    },
    {
      "id": 7,
      "logic_type": 1,
      "name": "Loading Halting"
    },
    {
      "id": 8,
      "logic_type": 1,
      "name": "Unloading Halting"
    },
    {
      "id": 9,
      "logic_type": 2,
      "name": "Commission Fee"
    },
    {
      "id": 10,
      "logic_type": 2,
      "name": "Late Delivery Fee"
    },
    {
      "id": 11,
      "logic_type": 2,
      "name": "POD Late Fee"
    },
    {
      "id": 12,
      "logic_type": 2,
      "name": "POD Missing"
    },
    {
      "id": 14,
      "logic_type": 3,
      "name": "Price Difference"
    },
    {
      "id": 15,
      "logic_type": 2,
      "name": "On-Hold"
    }
  ];
  selectedList=[9,10]

  val3 = val1.map(item => { return {...item, enable:item.logic_type!=2 || selectedList.indexOf(item.id) !== -1}})
  console.log(val3)