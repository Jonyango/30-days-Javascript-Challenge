// ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    let currentYear= new Date().getFullYear();

    let someAreOlder = people.some((people)=>{
        let currentAge= currentYear - people.year;
        return currentAge >=19;
      });
    console.log(someAreOlder);

    // Array.prototype.every() // is everyone 19 or older?

    let everyIsOlder = people.every(() =>{
        let currentAge= currentYear - people.year;
        return currentAge >=19;
    });
    console.log(everyIsOlder);

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    let comment=comments.find((comments)=>comments.id === 823423);
    console.log(comment);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    let findIndex = comments.findIndex((comments)=>{
        return comments.id===823423;
    });
    console.log(findIndex);
    comments.splice(findIndex,1);
    console.log(comments)

    const newComments = [
        ...comments.slice(0, findIndex),
        ...comments.slice(findIndex + 1)
      ];

  