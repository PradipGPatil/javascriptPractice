
let studName="pradip";

//find character occuren

let result={}
for(let i=0;i<studName.length;i++){
let char=studName.charAt(i);
if(!result[char]){
//we can access properity of object by sing square bracket
result[char]=1;
}
else{
    result[char]+=1;
}
}
console.log(result);

let a="pradip";
let rev={};

for(let i=0;i<a.length;i++){
let b=a.charAt(i);
if(!rev[b]){
rev[b]=1;
}else{
    rev[b]+=1;
}

}console.log(rev);