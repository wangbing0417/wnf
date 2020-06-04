const translateInt64 = res => {
  const iterable = x => x instanceof Array || x instanceof Object;
  const isInt64 = ({ buffer, offset, ...rest }) =>
    buffer instanceof Buffer && typeof (offset) === 'number' && Object.keys(rest).length === 0;
      
  try {
    const v = iterable(res)
      ? Object.keys(res).reduce((a, c) => {
        if (iterable(res[c])) {
          if (isInt64(res[c])) {
            const num = res[c].toNumber();
              
            a[c] = isFinite(num) ? num : res[c].toString();
          } else {
            a[c] = translateInt64(res[c]);
          }
        } else {
          a[c] = res[c];
        }
        return a;
      }, res instanceof Array ? [] : {})
      : res;
  
    return v;
  } catch (e) {
    return res;
  }
};

module.exports = {
  translateInt64,
};