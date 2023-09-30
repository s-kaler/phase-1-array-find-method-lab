function superbowlWin(records) {
    let foundRecord = records.find(record => record.result === "W");
    if(foundRecord === undefined){
        return undefined;
    }
    else { 
        return foundRecord.year;
    }
}
