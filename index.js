const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const newObject = driver[key];
  newObject.value.clear;
  return newObject;
}

function destructivelyDeleteFromDriverByKey(){
  
}
