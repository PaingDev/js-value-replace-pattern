# js-value-replace-pattern

let data1 = {
  "org_admin": [{
    "userName": "MgMg",
    "password": "Password1",
  },
  {
    "userName": "AAA",
    "password": "Password2",
  },
  {
    "userName": "BBB",
    "password": "Password3",
  }
  ]
}

let data = [{
  "org_admin": [{
    "userName": "MgMg",
    "password": "Password1",
  },
  {
    "userName": "AAA",
    "password": "Password2",
  },
  {
    "userName": "BBB",
    "password": "Password3",
  }
  ]
},
{
  "org_admin": [{
    "userName": "Test1",
    "password": "Password1",
  },
  {
    "userName": "Test2",
    "password": "Password2",
  }
  ]
}
];


valueReplace(data, "[].org_admin.[].userName", customAction);
valueReplace(data1, "org_admin.[].userName", customAction);

customAction is a function to replace a value for the pattern. 
