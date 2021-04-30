const druid = {
    age: 15,
    armor: 'bronze armour',
    killsOnBattleField: 100
}

function UpdateDruidAge(druid, newage) {
    const update = druid * newage
    console.log(update)
}

function checkUpgradeEligibility()