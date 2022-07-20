console.log('hello from JS');

(async () => {
    const response = await fetch('http://localhost:5000/contacts', {
        method: 'GET',
    })

    const body = await response.json();
    
    const data = body.data;


         const tbl = document.createElement("table");
         const tblBody = document.createElement("tbody");
       
         for (const contact of data) {
           const row = document.createElement("tr");
       
           for (const key in contact) {
             const cell = document.createElement("td");
             const cellText = document.createTextNode(contact[key]);
             cell.appendChild(cellText);
             row.appendChild(cell);
           }
       
           // add the row to the end of the table body
           tblBody.appendChild(row);
         }
       
         // put the <tbody> in the <table>
         tbl.appendChild(tblBody);
         // appends <table> into <body>
         document.body.appendChild(tbl);
         // sets the border attribute of tbl to '2'
         tbl.setAttribute("border", "2");

       }
)();
