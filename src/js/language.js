let english = document.getElementsByClassName("english");
for(i=0;i<english.length;i++){
  english[i].style.display = 'none';
}
document.getElementById('toogle').addEventListener("change", () => {
  let languageBoolean = document.getElementById('toogle').checked;
  let spanish = document.getElementsByClassName("spanish");
  if(languageBoolean === true) {
    for(i=0;i<english.length;i++){
      english[i].style.display = 'block';
    }
    for(i=0;i<spanish.length;i++){
      spanish[i].style.display = 'none';
    }
  } else {
    for(i=0;i<english.length;i++){
      english[i].style.display = 'none';
    }
    for(i=0;i<spanish.length;i++){
      spanish[i].style.display = 'block';
    }
  }
});
