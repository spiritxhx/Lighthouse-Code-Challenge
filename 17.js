const judgeVegetable = (vegetables, metric) => {
  let judge = vegetables[0];
  vegetables.map(vegetable=>{
    if (vegetable[metric]>judge[metric])
      judge = vegetable;
  });
  return judge.submitter;
}