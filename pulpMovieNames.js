const wordLists = {
    adjective: ['cannibal', 'vampire', 'zombie', 'killer', 'flesh-eating', 'man-eating', 'mutant', 'giant', 'radioactive'],
    creatures: ['hamsters', 'gerbils', 'leopards', 'chihuahuas', 'rodents', 'spiders', 'slugs', 'corpses', 'ghouls', 'latin teachers', 'dominatrixes'],
    origins: ['Uranus', 'Mars', 'beyond the grave', 'Venus', 'the 5th dimension', 'beyond time', 'Hell', 'the future']
}





/*const adjective = ['cannibal', 'vampire', 'zombie', 'killer', 'flesh-eating', 'man-eating', 'mutant', 'giant', 'radioactive'];
const creatures = ['hamsters', 'gerbils', 'leopards', 'chihuahuas', 'rodents', 'spiders', 'slugs', 'corpses', 'ghouls', 'latin teachers', 'dominatrixes'];
const origins = ['Uranus', 'Mars', 'beyond the grave', 'Venus', 'the 5th dimension', 'beyond time', 'Hell', 'the future'];
*/


const getRandomWord = array => {
    return array[Math.floor(Math.random()*array.length)]
    };
    
let movieName = `${getRandomWord(adjective)} ${getRandomWord(creatures)} from ${getRandomWord(origins)}.`;

console.log(movieName.toUpperCase());

