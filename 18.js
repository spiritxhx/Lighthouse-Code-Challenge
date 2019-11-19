const countTickets = (tickets) => {
  const ans={};
  tickets.map(ticket=>{
    ans[ticket]?ans[ticket]++:ans[ticket]=1;
  });
  ans.red?null:ans.red=0;
  ans.green?null:ans.green=0;
  ans.blue?null:ans.blue=0;
  return ans;
}

const bestOdds = (tickets, raffleEntries) => {
  const countObj=countTickets(tickets);
  let ans=tickets[0];
  Object.keys(raffleEntries).map(key=>{
    if ((countObj[key]/raffleEntries[key])>(countObj[ans]/raffleEntries[ans])){
      ans=key;
    }
  });
  return `You have the best odds of winning the ${ans} raffle.`
}