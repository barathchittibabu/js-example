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
  
  val2 = [];
  val1.forEach(function(item){
    if(item.logic_type==1 || item.logic_type==3)
      item.enable = true;
    else if((item.id==9 || item.id==10) && item.logic_type==2)
      item.enable = true;
    else
      item.enable = false;
    val2.push(item);
  });
  console.log(val2);