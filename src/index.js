function orderByProps(obj, order) {
  const sortedProps = [];
  const sortedByOrder = [];
  const sortedAlphabetically = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (order.includes(key)) {
        sortedByOrder.push({ key, value: obj[key] });
      } else {
        sortedAlphabetically.push({ key, value: obj[key] });
      }
    }
  }

  order.forEach((key) => {
    const prop = sortedByOrder.find((item) => item.key === key);
    sortedProps.push(prop);
  });

  return [...sortedProps, ...sortedAlphabetically.sort((a, b) => (a.key < b.key ? -1 : 1))];
}


function getSpecialAttacks({ special }) {
  if (!Array.isArray(special)) {
    return [];
  }

  return special.map(({
    id, name, icon, description = 'Описание недоступно'
  }) =>
  ({
    id,
    name,
    icon,
    description,
  }));
}

module.exports = {
  orderByProps,
  getSpecialAttacks,
};
