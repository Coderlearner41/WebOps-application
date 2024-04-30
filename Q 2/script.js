async function filterStudentsByGender(gender) {
    try{
      const response = await fetch("https://freetestapi.com/api/v1/students")
      const Data = await response.json()
      const API = Data.filter((Data) => Data.gender.toLowerCase() === gender)
      console.log(API)
    }catch(error){
      console.error('error fetching data',error)
    }
  }