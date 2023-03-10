import _ from 'lodash';

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

function customAction(v){
  return v + "JJJ";
}

function valueReplace(data, pathParam, repalceAction=(v)=>{return v}){
  

  function nestedLoop(payload, path) {
    if(!path.includes("[]")){
      let collected = _.get(payload, path);
      if (collected) {
        _.update(payload, path, repalceAction);
        return;
      }else{
        throw new Error(`Not found exactly match path param for given payload.`)
      }
    }
    let singlePath = path.split(".");
  
    if (singlePath[0] == "[]") {
      if(Array.isArray(payload)){
        for (let i = 0; i < payload.length; i++) {
          let newPath = [...singlePath]
          newPath.shift();
          let stringPath = newPath.join(".");
          nestedLoop(payload[i], stringPath);
        }
      }else{
        throw new Error(`Path Parameter Wrong. First Path Param show in '${singlePath}' is not array.`)
      }
      
    } else {
      if (singlePath.length == 1) {
        let collected = _.get(payload, singlePath[0]);
        console.log(payload, singlePath[0]);
        if (collected) {
          _.update(payload, singlePath[0], repalceAction)
        }else{
          throw new Error(`Not found exactly match path param for given payload.`)
        }
      } else {
        let newPath = [...singlePath]
        newPath.shift();
        let stringPath = newPath.join(".");
        nestedLoop(payload[singlePath[0]], stringPath);
      }
    }
  }

  nestedLoop(data, pathParam)
}



//valueReplace(data, "[].org_admin.[].userName", customAction);
valueReplace(data1, "org_admin.[].userName", customAction);

console.log(JSON.stringify(data1));
