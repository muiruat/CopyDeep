// 깊은 복사
function copyDeep(target) {
  var result = {};

  if (typeof target === 'object' && target !== null) {
    for (var prop in target) {
      result[prop] = copyDeep(target[prop]);
    }
  } else {
    result = target;
  }

  return result;
}
