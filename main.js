// Task 2
// main.js de ele bir function qurunki parametr olaraq id ve array 
// qebul etsin gelen array e gore id ni tapa bilmiyende xeta versin
// eyni zamanda geriye hemen ide aid objecti geri qaytarsin
// qaytarilan objecti index.js de import edin daha sonra logda json stringfy 
// birdefede parse ile logda cixardin .



const getId = (array, id) => {

    try {
        let result = array.filter(item => item.id == id)

        if (result.length > 0 ) {

            let string = JSON.stringify(result);
            console.log(string);
            console.log(JSON.parse(string));
                    
          

        }
        else {
            console.log(result);
            
            throw new Error("Error");


        }
    } catch (error) {
        console.log(error.message);

    }


}




export default getId   