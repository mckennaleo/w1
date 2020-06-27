const joinList = (arr) => {
  let stringArr = arr.toString();
  stringArr = stringArr.replace(/[^a-z0-9- -]/g, ", ");
  return stringArr.trim();
};