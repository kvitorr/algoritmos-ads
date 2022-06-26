//Creating reusable functions
function bigger_number_from_propertie(object, propertie){

    let bigger = object[0][propertie]

    for (let i = 0; i < object.length; i++) {

        if(object[i][propertie] > bigger) bigger = object[i][propertie]

    }
    return bigger
}

function lower_number_from_propertie(object, propertie){

    let lower = object[0][propertie]

    for (let i = 0; i < object.length; i++) {

        if(object[i][propertie] < lower) lower = object[i][propertie]

    }
    return lower
}

const input = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];



  console.log(bigger_number_from_propertie(input, "age"), lower_number_from_propertie(input, "age"))

  const difference_between_ages = bigger_number_from_propertie(input, "age") - lower_number_from_propertie(input, "age")

  console.log('Difference between Bigger Age and Lower Age: ', difference_between_ages)






  //Using built-in functions