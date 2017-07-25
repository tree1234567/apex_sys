
var customerInfo = [ { first_name: 'Rose', last_name: 'Tyler',   home: 'Earth' },
                   { first_name: 'Zoe',    last_name: 'Heriot',  home: 'Space Station W3'},
                   { first_name: 'Jo',     last_name: 'Grant',   home: 'Earth'},
                   { first_name: 'Leela',  last_name: null,      home: 'Unspecified'},
                   { first_name: 'Romana', last_name: null,      home: 'Gallifrey'},
                   { first_name: 'Clara',  last_name: 'Oswald',  home: 'Earth'},
                   { first_name: 'Adric',  last_name: null,      home: 'Alzarius'},
                   { first_name: 'Susan',  last_name: 'Foreman', home: 'Gallifrey'} 
                ];


$(document).ready(function()
{

    function createTable(customerInfo)
    {
        const table = document.getElementById("customerTable");

        customerInfo.forEach(function(customer) 
        {
            
            var tableRow = "<tr><td>"+customer.first_name + "</td>";

            customer.last_name ? tableRow += "<td>"+customer.last_name + "</td>" : tableRow += "<td> N/A </td>";

            customer.home === "Unspecified" ? tableRow+= "<td> N/A </td>" : tableRow += "<td>"+ customer.home + "</td></tr>"
        
            $("#customer-table").append(tableRow);
            
            

        });
    }
    createTable(customerInfo);


});
