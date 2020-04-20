const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 
  'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 
  'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 
  'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 
  'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 
  'Blair, Robert', 'Blair, Tony', 'Blake, William'];


  // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    //This method seperates wheat from chaff. It returns an array according to the specified condition.
 console.log("Hello world");
 let results= inventors.filter(function(inventors){
   return inventors.year >= 1500 && inventors.year <1600;
 });
 console.log(results);

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    //Array.map() modifies items in an Array

    let names=inventors.map(function(inventors){
       return inventors.first.concat(' ',inventors.last);
    });
    
    console.log(names);


    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    function compareTheYears(a,b){
      if(a.year > b.year){
        return 1;
      }
      else{
        return -1;
      }
    }
    
    let birthDates= inventors.sort(compareTheYears);
    console.log(birthDates);



    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    let yearsLivedTogether=inventors.reduce(function(total,inventors){
      return total + (inventors.passed-inventors.year);
    },0);

    console.log(yearsLivedTogether);

    // 5. Sort the inventors by years lived
    let yearLived=inventors.sort(function(a,b){
      aYrs=a.passed-a.year;
      bYrs=b.passed-b.year;
      if(aYrs<bYrs){
        return 1;
      }
      else{
        return -1;
      }
    });

    console.log(yearLived);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // 
    
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));



    // 7. sort Exercise
    // Sort the people alphabetically by last name
    let nameAlphabetic= people.sort((lastOne, nextOne) => {
      const [aFirst, aLast] = lastOne.split(', ');
      const [bFirst, bLast] = nextOne.split(', ');
      return aLast > bLast ? 1: -1;
    });

    console.log(nameAlphabetic);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});

    console.log(transportation);


    