import axios from 'axios';//ye ek command line project hai
import readline from 'readline';//used to take input and give output

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,//ye terminal se input lege and output bhi terminal me denge

})
rl.question('enter city name:',async(city)=>{
    const apikey = 'api key is here';
    const url = `https://_api.openweathermap.org/data/2.5/weather?Q=${city}&appid=${apikey}&units=metric`;
try{
    const res = await axios.get(url);
    console.log(`city name ${res.data.name}`);
    console.log(`current city temperatuture in ${city} ${res.data.main.temp}*c`);
    console.log(`weather description ${res.data.weather[0].description}`);

}catch(error) {
    console.error('error feching data',error.message);
}
finally{
    rl.close();
}
})