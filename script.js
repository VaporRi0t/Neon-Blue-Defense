        var enemy = document.getElementById("enemy");
        var line = document.getElementById("line");
        var step = 10;  // Speed of movement
    
        window.addEventListener("mousemove", function(event) {
            // Move line to cursor position
            line.style.left = event.pageX + "px";
            line.style.top = event.pageY + "px";
    
            // Move enemy towards line
            var diffX = line.offsetLeft - enemy.offsetLeft;
            var diffY = line.offsetTop - enemy.offsetTop;
            enemy.style.left = (enemy.offsetLeft + diffX * step) + "px";
            enemy.style.top = (enemy.offsetTop + diffY * step) + "px";
    
            // Check for collision
            if (isCollision(enemy, line)) {
                enemy.style.display = "none";
                line.style.display = "none";
                document.body.innerHTML = "<h1>Game Over</h1><button id='restart'>Restart</button>";
                document.getElementById("restart").addEventListener("click", restartGame);
            }
        });
    
        function isCollision(a, b) {
            var aRect = a.getBoundingClientRect();
            var bRect = b.getBoundingClientRect();
    
            return !(
                (aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right)
            );
        }
    
        function restartGame() {
            enemy.style.display = "block";
            enemy.style.left = "0px";
            enemy.style.top = "0px";
            line.style.display = "block";
            document.body.innerHTML = "<div id='enemy'></div><div id='line'></div>";
            enemy = document.getElementById("enemy");
            line = document.getElementById("line");
        }