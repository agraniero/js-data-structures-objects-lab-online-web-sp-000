const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const newObject = Object.assign({}, driver);
  newObject[key].delete;
  return newObject;
}

function destructivelyDeleteFromDriverByKey(){
  
}
