let sentences = document.querySelectorAll('.int2');
          let characterCount = 0;

          for (let i = 0; i < sentences.length; i++) {
            let sentence = sentences[i];
            let newContent = '';

            // go through all characters of the sentence
            for (let j = 0; j < sentence.textContent.length; j++) {
              let substring = sentence.textContent.substr(j, 1);
              // if we have a character, wrap it
              if (substring !== " ") {
                newContent += `<span style="--animation-order: ${characterCount};">${substring}</span>`;
              } else {
                newContent += substring;
              }
              characterCount++;
            }
            sentence.innerHTML = newContent;
          }


          var row1 = document.getElementById("row1");
          var row2 = document.getElementById("row2");
          var row3 = document.getElementById("row3");
          var row4 = document.getElementById("row4");
          var row5 = document.getElementById("row5");
          var row6 = document.getElementById("row6");
          var row7 = document.getElementById("row7");
          var row8 = document.getElementById("row8");
          
          

          var cell1 = document.getElementById("cell1");
          var cell2 = document.getElementById("cell2");
          var cell3 = document.getElementById("cell3");
          var cell4 = document.getElementById("cell4");
          var cell5 = document.getElementById("cell5");
          var cell6 = document.getElementById("cell6");
          var cell7 = document.getElementById("cell7");
          var cell8 = document.getElementById("cell8");
          


          var linkInserted = false; 
          var linkOpened = false;
          var link;
          
          row1.addEventListener("mouseover", function() {
            if (!linkInserted && !linkOpened) {
              cell1.textContent = "(+)";
            }
          });

          row1.addEventListener("mouseout", function() {
            if (!linkInserted || linkOpened) {
              cell1.textContent = "Canada";
            }
          });

          // Create link when cell2 is clicked
            cell1.addEventListener("click", function(event) {
              if (!linkInserted) {
                var link = document.createElement("a");
                link.href = "https://smokesociety.ca/"; // Change this to your desired URL
                link.textContent = "(+)";
                link.target = "_blank"; // Opens the link in a new tab/window
                cell1.textContent = ''; // Clear existing content
                cell1.appendChild(link);
                linkInserted = true;
                link.click();
                location.reload();
              }
              // Open the link when clicked within cell2
              if (event.target === cell1 || cell1.contains(event.target)) {
                if (!linkOpened) {
                  linkOpened = true;
                } else {
                  window.open(link.href, '_blank');
                }
              }
            });

          row2.addEventListener("mouseover", function() {
            if (!linkInserted && !linkOpened) {
              cell2.textContent = "(+)";
            }
          });

          row2.addEventListener("mouseout", function() {
            if (!linkInserted || linkOpened) {
              cell2.textContent = "France";
            }
          });

          // Create link when cell2 is clicked
            cell2.addEventListener("click", function(event) {
              if (!linkInserted) {
                var link = document.createElement("a");
                link.href = "https://glose.com/what-is-glose"; // Change this to your desired URL
                link.textContent = "(+)";
                link.target = "_blank"; // Opens the link in a new tab/window
                cell2.textContent = ''; // Clear existing content
                cell2.appendChild(link);
                linkInserted = true;
                link.click();
                location.reload();
              }
             
            });

            

          row3.addEventListener("mouseover", function() {
            if (!linkInserted && !linkOpened) {
              cell3.textContent = "(+)";
            }
          });

          row3.addEventListener("mouseout", function() {
            if (!linkInserted || linkOpened) {
              cell3.textContent = "Canada";
            }
          });


          cell3.addEventListener("click", function(event) {
              if (!linkInserted) {
                var link = document.createElement("a");
                link.href = "https://www.eastindiaco.com/shop-merch/"; // Change this to your desired URL
                link.textContent = "(+)";
                link.target = "_blank"; // Opens the link in a new tab/window
                cell3.textContent = ''; // Clear existing content
                cell3.appendChild(link);
                linkInserted = true;
                link.click();
                location.reload();
              }
              
          });

          row4.addEventListener("mouseover", function() {
            if (!linkInserted && !linkOpened) {
              cell4.textContent = "(+)";
            }
          });

          row4.addEventListener("mouseout", function() {
            if (!linkInserted || linkOpened) {
              cell4.textContent = "Canada";
            }
          });


          cell4.addEventListener("click", function(event) {
              if (!linkInserted) {
                var link = document.createElement("a");
                link.href = "https://www.lerock.net//"; // Change this to your desired URL
                link.textContent = "(+)";
                link.target = "_blank"; // Opens the link in a new tab/window
                cell4.textContent = ''; // Clear existing content
                cell4.appendChild(link);
                linkInserted = true;
                link.click();
                location.reload();
              }
              
          });

          
          


          row5.addEventListener("mouseover", function() {
            if (!linkInserted && !linkOpened) {
              cell5.textContent = "(+)";
            }
          });

          row5.addEventListener("mouseout", function() {
            if (!linkInserted || linkOpened) {
              cell5.textContent = "United States";
            }
          });

          cell5.addEventListener("click", function(event) {
              if (!linkInserted) {
                var link = document.createElement("a");
                link.href = "https://tscglobaltrading.com/"; // Change this to your desired URL
                link.textContent = "(+)";
                link.target = "_blank"; // Opens the link in a new tab/window
                cell5.textContent = ''; // Clear existing content
                cell5.appendChild(link);
                linkInserted = true;
                link.click();
                location.reload();
              }
              
            });

          

          row6.addEventListener("mouseover", function() {
            if (!linkInserted && !linkOpened) {
              cell6.textContent = "(+)";
            }
          });

          row6.addEventListener("mouseout", function() {
            if (!linkInserted || linkOpened) {
              cell6.textContent = "Japan";
            }
          });

          cell6.addEventListener("click", function(event) {
              if (!linkInserted) {
                var link = document.createElement("a");
                link.href = "https://gbbofficial.com/"; // Change this to your desired URL
                link.textContent = "(+)";
                link.target = "_blank"; // Opens the link in a new tab/window
                cell6.textContent = ''; // Clear existing content
                cell6.appendChild(link);
                linkInserted = true;
                link.click();
                location.reload();
              }
              
            });

          row7.addEventListener("mouseover", function() {
            if (!linkInserted && !linkOpened) {
              cell7.textContent = "(+)";
            }
          });

          row7.addEventListener("mouseout", function() {
            if (!linkInserted || linkOpened) {
              cell7.textContent = "India";
            }
          });


          cell7.addEventListener("click", function(event) {
              if (!linkInserted) {
                var link = document.createElement("a");
                link.href = "https://shreeumiyaenterprise.in/"; // Change this to your desired URL
                link.textContent = "(+)";
                link.target = "_blank"; // Opens the link in a new tab/window
                cell7.textContent = ''; // Clear existing content
                cell7.appendChild(link);
                linkInserted = true;
                link.click();
                location.reload();
              }
              
            });

          row8.addEventListener("mouseover", function() {
            if (!linkInserted && !linkOpened) {
              cell8.textContent = "(+)";
            }
          });

          row8.addEventListener("mouseout", function() {
            if (!linkInserted || linkOpened) {
              cell8.textContent = "Japan";
            }
          });


          cell8.addEventListener("click", function(event) {
              if (!linkInserted) {
                var link = document.createElement("a");
                link.href = "https://next.junni.co.jp/"; // Change this to your desired URL
                link.textContent = "(+)";
                link.target = "_blank"; // Opens the link in a new tab/window
                cell8.textContent = ''; // Clear existing content
                cell8.appendChild(link);
                linkInserted = true;
                link.click();
                location.reload();
              }
              
            });