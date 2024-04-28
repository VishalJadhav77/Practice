fruits=["apple","banana","mango","grapes","mango","apple"]
for(i=0;i<6;i++){
    console.log(i,fruits[i])
    if(fruits[i]=="apple"){
        document.getElementById("a").textContent+="apple "
    }else if (fruits[i]=="banana"){
        document.getElementById("b").textContent+="banana "
    }else{
        document.getElementById("c").textContent+="mango "
    }

}
