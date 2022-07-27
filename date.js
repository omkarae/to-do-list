module.exports.getDate = function() {

}

module.exports.getDay = function(){
  const today = new Date();
  const options = {
    weekday: "long"
  };
  return today.toLocaleString("en-US", options);
}
