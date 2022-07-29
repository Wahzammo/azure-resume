window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://azureresumecounter.azurewebsites.net/api/GetResumeCounter?code=WjFdRSfJbnyWRhT2Q24m8J7m38KT_EeXDEe-zWF0Xw6RAzFupWiNfg==';
const localfunctionApi = "http://localhost:7071/api/GetResumeCounter";

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(Response => {
        return Response.json()
    }).then(Response => {
        console.log("Website called function API.");
        count = Response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}