const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let membersStr = [];
    for(let i = 0, j = 0; i < members.length; i++)
        if( typeof(members[i]) === typeof('') ) {
            membersStr[j] = members[i];
            j++;
        }
    if(membersStr === 0)
        return false;
    
    let membersMod = membersStr;
    for(let i = 0; i < membersMod.length; i++)
        membersMod[i] = membersMod[i].replace(/\s/g, '');

    let membersSort = membersMod.sort();
    let dreamTeam = [];
    
    for(let i = 0; i < membersSort.length; i++)
        if( typeof(membersSort[i]) === typeof('') )
            dreamTeam += membersSort[i][0].toUpperCase();

    return dreamTeam;
}

module.exports = {
  createDreamTeam
};
