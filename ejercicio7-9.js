 //ejercicio 7

 var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
for(var i = 0; i<mySampleArray.length; i = i + 2)
{
console.log(`${mySampleArray[i]};${mySampleArray[i+1]}`);
}
//ejercicio 8
var people = [
    'Lebron','Aaliyah','Diamond','Dominique','Aliyah','Jazmin','Darnell','Hatfield','Hawkins','Hayden',
    'Hayes','Haynes','Hays','Head','Heath','Hebert','Henderson','Hendricks','Hendrix','Henry','Hensley','Henson','Herman','Hernandez','Herrera','Herring','Hess','Hester','Hewitt','Hickman','Hicks','Higgins','Hill','Hines','Hinton','Hobbs','Hodge','Hodges','Hoffman','Hogan','Holcomb','Holden','Holder','Holland','Holloway','Holman','Holmes','Holt','Hood','Hooper','Hoover','Hopkins','Hopper','Horn','Horne','Horton','House','Houston','Howard','Howe','Howell','Hubbard','Huber','Hudson','Huff','Waldo','Hughes','Hull','Humphrey','Hunt','Hunter','Hurley','Hurst','Hutchinson','Hyde','Ingram','Irwin','Jackson','Jacobs','Jacobson','James','Jarvis','Jefferson','Jenkins','Jennings','Jensen','Jimenez','Johns','Johnson','Johnston','Jones','Jordan','Joseph','Joyce','Joyner','Juarez','Justice','Kane','Kaufman','Keith','Keller','Kelley','Kelly','Kemp','Kennedy','Kent','Kerr','Key','Kidd','Kim','King','Kinney','Kirby','Kirk','Kirkland','Klein','Kline','Knapp','Knight','Knowles','Knox','Koch','Kramer','Lamb','Lambert','Lancaster','Landry','Lane','Lang','Langley','Lara','Larsen','Larson','Lawrence','Lawson','Le','Leach','Leblanc','Lee','Leon','Leonard','Lester','Levine','Levy','Lewis','Lindsay','Lindsey','Little','Livingston','Lloyd','Logan','Long','Lopez','Lott','Love','Lowe','Lowery','Lucas','Luna','Lynch','Lynn','Lyons','Macdonald','Macias','Mack','Madden','Maddox','Maldonado','Malone','Mann','Manning','Marks','Marquez','Marsh','Marshall','Martin','Martinez','Mason','Massey','Mathews','Mathis','Matthews','Maxwell'
    ,'May','Mayer','Maynard','Mayo','Mays','Mcbride','Mccall','Mccarthy','Mccarty','Mcclain','Mcclure','Mcconnell','Mccormick','Mccoy','Mccray','Waldo','Mcdaniel','Mcdonald','Mcdowell','Mcfadden','Mcfarland','Mcgee','Mcgowan','Mcguire','Mcintosh','Mcintyre','Mckay','Mckee','Mckenzie','Mckinney','Mcknight','Mclaughlin','Mclean','Mcleod','Mcmahon','Mcmillan','Mcneil','Mcpherson','Meadows','Medina','Mejia','Melendez','Melton','Mendez','Mendoza','Mercado','Mercer','Merrill','Merritt','Meyer','Meyers','Michael','Middleton','Miles','Miller','Mills','Miranda','Mitchell','Molina','Monroe','Lucas','Jake','Scott','Amy','Molly','Hannah','Lucas'] ;

let waldo = 0

for(let i=0; i<people.length;i++){
    if  (people [i]=== "Waldo"){
        waldo++
    }
    
}    
console.log(waldo);

//ejercicio 9

let par = "Lorem ipsum dolor sit amet. Est possimus doloremque eum exercitationem possimus non repudiandae quisquam? Aut beatae fugiat id quos dolores est commodi quibusdam aut laboriosam pariatur. Sed suscipit possimus ut deleniti inventore quas odit et nesciunt dolor quo nemo voluptates vel mollitia deleniti. Ut quidem aperiam nam minus blanditiis aut saepe laudantium."

let counts = {};
// your code here\
let textominuscula = par.toLowerCase()
let textodivididoa = textominuscula.split('a')
counts.a = textodivididoa.length
//repitiendo la siguiente porción del código para cada letra obtendremos la cantidad de veces que
//aparece c/u.
let textodivididob = textominuscula.split('b')
counts.b = textodivididoa.length

console.log(counts);

