// from data.js
var tableData = data;
//console.log(data);

var tbody = d3.select("tbody");




function createtabledata(ufosighting) {
    

    var row = tbody.append("tr");
    

    row.append("td").text(ufosighting.datetime);
    row.append("td").text(ufosighting.city);
    row.append("td").text(ufosighting.state);
    row.append("td").text(ufosighting.country);
    row.append("td").text(ufosighting.shape);
    row.append("td").text(ufosighting.durationMinutes);
    row.append("td").text(ufosighting.comments);
}

// Populate the data in Table element
data.forEach(createtabledata);

// Populate the data based on filter

var btn = d3.select("#filter-btn");

btn.on("click", function() {
    d3.event.preventDefault();
    //datetime
    var inputElement = d3.select("#datetime");
    var inputDateTime = inputElement.property("value").trim();

    //datetime
    var elementCity = d3.select("#city");
    var inputCity = elementCity.property("value").trim();

   //datetime
   var elementState = d3.select("#state");
   var inputState = elementState.property("value").trim();
   
   //datetime
   var elementCountry = d3.select("#country");
   var inputCountry = elementCountry.property("value").trim();
   
   //datetime
   var elemenShape = d3.select("#shape");
   var inputShape = elemenShape.property("value").trim();
 
   console.log();
    //var inputCity = elementCity.property("value").trim();

   console.log(inputDateTime);
   console.log(inputState);
   console.log(inputCountry);
   console.log(inputShape);
   
    
    function isDateTime (ufosighting) {
    if  (inputDateTime === ""){return true} 
                       else if(ufosighting.datetime === inputDateTime) { return true}
                       else { return false}
    };

    function isCity (ufosighting) {
        if  (inputCity === ""){return true} 
                           else if(ufosighting.city === inputCity) { return true}
                           else { return false}
        };

    function isState (ufosighting) {
        if  (inputState === ""){return true} 
                            else if(ufosighting.state === inputState) { return true}
                            else { return false}
        };
            
    function isCountry (ufosighting) {
        if  (inputCountry === ""){return true} 
                            else if(ufosighting.country === inputCountry) { return true}
                            else { return false}
        };
                
    function isShape (ufosighting) {
        if  (inputShape === ""){return true} 
                            else if(ufosighting.shape === inputShape) { return true}
                            else { return false}
        };
                

    function isAllMatch (ufosighting) {
       if (isDateTime(ufosighting) && isCity(ufosighting) && isState(ufosighting) && isCountry(ufosighting) && isShape(ufosighting))
            return true;
        else {
            return false;
        }
        };
    


    // var filterdate = data.filter(ufosighting => ufosighting.datetime === inputvalue);
    var filterdate = data.filter(ufosighting => isAllMatch(ufosighting));

    d3.select("tbody").html(null);
    filterdate.forEach(createtabledata);
});

// Reset button
var resetbtn = d3.select("#resetfilter-btn");

resetbtn.on("click", function() {
    console.log("reset clicked");
    d3.select("tbody").html(null);
    data.forEach(createtabledata);

});
