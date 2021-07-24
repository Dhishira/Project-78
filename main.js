 var = names [
    "Father - Lakshmi Narasmiha Reddy","Mother - Sunitha","Daughter - Dhishira","Son - Yuva Charith"
    ];
    
  var images =[
       "father.jpg", "mother.jpg","sister.jpg","brother.jpg"
  ];

    var i=0;
    function nextslide(){
    document.getElementById("names").innerHTML=names[i];
    document.getElementById("images").src=images[i];
    i++;
    }