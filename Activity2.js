
const druid = { 
    age: 15,
    armor: 'silver armour',
    killsOnBattleField: 100
  };
  ​
  ​
  if(druid.age >= 20) {
    druid.armour = 'titanuim armour';
    } else if(druid.age >= 15 && druid.killsOnBattleField > 90) {
        druid.armour = 'silver armour upgrade';
    }else if(druid.age >= 15){
        druid.armour= 'silver armour;'
    }else if(druid.age >= 10){
        druid.armour= 'bronze armour';
    }
   
    console.log(druid);

