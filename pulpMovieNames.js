const wordLists = {
    adjective: ['cannibal', 'vampire', 'zombie', 'killer', 'flesh-eating', 'man-eating', 'mutant', 'giant', 'radioactive'],
    creatures: ['hamsters', 'gerbils', 'leopards', 'chihuahuas', 'rodents', 'spiders', 'slugs', 'corpses', 'ghouls', 'latin teachers', 'dominatrixes'],
    origins: ['Uranus', 'Mars', 'beyond the grave', 'Venus', 'the 5th dimension', 'beyond time', 'Hell', 'the future']
}

const getRandomWord = array => {
    return array[Math.floor(Math.random()*array.length)]
    };
    

for (let i = 0; i < 10; i++) {
    let movieName = `${getRandomWord(wordLists.adjective)} ${getRandomWord(wordLists.creatures)} from ${getRandomWord(wordLists.origins)}.`;
    console.log(movieName.toUpperCase());
    };

