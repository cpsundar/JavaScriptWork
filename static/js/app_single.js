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

    var inputElement = d3.select("#datetime");
    var inputvalue = inputElement.property("value");

    console.log(` input value --- ${inputvalue}`);

    var filterdate = data.filter(ufosighting => ufosighting.datetime === inputvalue);
    d3.select("tbody").html(null);
    filterdate.forEach(createtabledata);
});

// YOUR CODE HERE!
