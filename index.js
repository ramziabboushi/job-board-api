var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(xhttp.responseText);
                var container = document.getElementById('container');
                data.slice(1).forEach(function(row, i) {
                    rowDiv = document.createElement('div');
                    rowDiv.classList.add('row')
                    rowDiv.innerHTML = `
                        <div class="logo-section">
                            <div class="logo">
                            <img src="${row.logo}" width=40px>
                            </div>
                        </div>
                        <div class="left-section">
                            <h5 class="company">${row.company}</h5>
                            <h4 class="position">${row.position}</h4>
                            <p class="location">${row.location}</p>
                        </div>
                        <div class="mid-section">
                            ${row.tags.map(function(tag) {
                                return `<div class="tag">${tag}</div>`
                            }).join('')}
                        </div>
                        <div class="mid-right-section">
                            <p class="date">${new Date(row.date).toLocaleString().slice(0,10)}</p>
                        </div>
                        <div class="right-section">
                            <a href="${row.url}">
                            <button class="apply">Apply</button>
                            </a>
                        </div>
                    `
                    container.appendChild(rowDiv)
                });
            }
        };

        xhttp.open("GET", "https://remoteok.io/api", true);
        xhttp.send();