let musicInfo = [
    ["Thu, Apr 20, 2023", 107, [
            ["Mariachi","Mariachi", 11],
            ["Hip-Hop", "Hip-Hop/Rap", 9],
            ["Dembow", "Dembow", 33],
            ["Salsa", "Salsa", 27],
            ["Reggaeton", "Reggaeton", 11],
            ["Bachata", "Bachata", 10],
            ["Cumbia", "Cumbia", 2],
            ["Pop", "Pop", 2]
        ]
    ],
    ["Fri, Apr 21, 2023", 25, [
            ["Hip-Hop", "Hip-Hop/Rap", 2],
            ["Bachata", "Bachata", 4],
            ["Reggaeton", "Reggaeton", 7],
            ["Dembow", "Dembow", 9],
            ["Mariachi", "Mariachi", 2],
            ["Salsa", "Salsa", 1]
        ]
    ],
    ["Sat, Apr 22, 2023", 46, [
            ["RB", "R&B/Soul", 5],
            ["Rock", "Rock and Roll", 2],
            ["Pop", "Pop", 3],
            ["Mariachi", "Mariachi", 30],
            ["Trap", "Trap", 9],
            ["Disco", "Disco", 1]
        ]
    ],
    ["Sun, Apr 23, 2023", 45, [
            ["Mariachi", "Mariachi", 42],
            ["Hip-Hop", "Hip-Hop/Rap", 2],
            ["Pop", "Pop", 1]
        ]
    ],
    ["Mon, Apr 24, 2023", 34, [
            ["Hip-Hop", "Hip-Hop/Rap", 26],
            ["RB", "R&B/Soul", 6],
            ["Afrobeats", "Afrobeats", 1],
            ["Pop", "Pop", 2]
        ]
    ],
    ["Tue, Apr 25, 2023", 64, [
            ["RB", "R&B/Soul", 9],
            ["Hip-Hop", "Hip-Hop/Rap", 29],
            ["Pop", "Pop", 8],
            ["Reggae", "Reggae", 2],
            ["Rock", "Rock and Roll", 1],
            ["Reggaeton", "Reggaeton", 5],
            ["Bachata", "Bachata", 1],
            ["Salsa", "Salsa", 4],
            ["Dembow", "Dembow", 5]
        ]
    ],
    ["Wed, Apr 26, 2023", 14, [
            ["Hip-Hop", "Hip-Hop/Rap", 13],
            ["RB", "R&B/Soul", 1]
        ]
    ]
];

const wrapper = document.getElementsByClassName("wrapper")[0];
for (let i = 0; i < musicInfo.length; i++) {
    let days = document.createElement("div");
    days.setAttribute("class", "day");
    wrapper.append(days);

    let dividers = document.createElement("div");
    dividers.setAttribute("class", "divider");
    days.append(dividers);

    let date = document.createElement("p");
    date.setAttribute("class", "date");
    date.textContent = musicInfo[i][0]
    dividers.append(date);

    let line = document.createElement("div");
    line.setAttribute("class", "line");
    dividers.append(line);

    let graph = document.createElement("div");
    graph.setAttribute("class", "graph");
    days.append(graph);

    for (let x = 0; x < musicInfo[i][2].length; x++) {
        let bars = document.createElement("div");
        bars.setAttribute("class", "bar");
        bars.setAttribute("id", musicInfo[i][2][x][0]);
        bars.style.height = ((musicInfo[i][2][x][2]/musicInfo[i][1]) * 100) + "%";
        graph.append(bars);

        let text = document.createElement("div");
        text.innerHTML = `<span></span><p class="text">${musicInfo[i][2][x][1]}</p><p class="text">${musicInfo[i][2][x][2]} songs</p>`;
        bars.append(text);
    }
}

let bars = document.querySelectorAll(".bar");
for(let i = 0; i < bars.length; i++) {
    bars[i].addEventListener("mouseenter", function(e){
        let text = e.target.querySelector(".bar div");
        console.dir(text)
        let tri = text.firstChild;
        
        let barRect = this.getBoundingClientRect();
        var textRect = text.getBoundingClientRect();
        
        let barRightX = barRect.x + barRect.width;
        let textRightX = textRect.x + textRect.width;
        
        if (textRightX > window.innerWidth) {
            console.log("yes")
            console.log(tri)
            tri.setAttribute("class", "right");
            text.style.left = `${(-textRect.width - 9.5)}px`;
        } else {
            console.log("no");
            console.log(tri)
            tri.setAttribute("class", "left");
        }

        if(textRightX < barRect.x) {
            tri.setAttribute("class", "right");
        }
    });
}