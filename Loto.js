console.log("Lancement du script")

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

class Carton {
    constructor(){
        this.tab = [];
        for (var i=0; i<15; i++)
        {
            var val2insert;
            val2insert = getRandomArbitrary(1, 90);
            while(val2insert in this.tab)
            {
                val2insert = getRandomArbitrary(1, 90);
            }
            this.tab.push(val2insert);
        }
    }
}

test =  new Carton();

for (var i=0; i<15; i++)
        {
            console.log(test.tab[i]);
        }

var carton = document.getElementById('carton2');

function carton2HTMLtable(objCarton)
{
    ret = "</br><table class='tab' id='tableau'>";

    var elem = 0;

    for (var i=0; i<3; i++)
    {
        ret = ret + "<tr>";
        for (var j=0; j<9; j++)
        {
            if ((i+j)%2 == 0)
            {
                ret = ret + "<td>" + objCarton.tab[elem] + "</td>";
                elem ++ ;
            } else {
                ret = ret + "<td></td>";
            }
        }
        ret = ret + "</tr>";
    }

    ret =  ret + "<td>" + objCarton.tab[0] + "</td>";

    return ret + "</table>";
}

carton.innerHTML = carton2HTMLtable(test);

function genererNombresAleatoires() {
    alert("Lancement de la partie");
    var nombresAleatoires = [];
    var table = document.getElementById("tableau");
    
    // Générer 5 nombres aléatoires
    for (var i = 0; i < 5; i++) {
      var nombre = Math.floor(Math.random() * 100) + 1;
      nombresAleatoires.push(nombre);
      var numbers = document.getElementById('numbers');
      numbers.innerHTML += nombre + " ";

    }
    
    // Parcourir les cellules de la table
    for (var j = 0; j < table.rows.length; j++) {
      var cells = table.rows[j].cells;
      for (var k = 0; k < cells.length; k++) {
        var cellValue = parseInt(cells[k].innerText);
        
        // Vérifier si le nombre aléatoire se trouve dans la table
        if (nombresAleatoires.includes(cellValue)) {
          cells[k].style.backgroundColor = "yellow"; // Mettre en évidence la cellule
        }
      }
    }
  }
  
  
  
  
  
  
