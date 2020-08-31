document.onkeypress = (e) => {
  let val;
  if (inp.value.length == 0) {
    val = e.key;
  } else {
    return false;
  }
  axisContain.innerHTML = val;
  return axisContain.innerHTML;
};
