
function typeWriter() {
  if (i < txt.length) {
    document.querySelector(elementName).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
var i = 0;
var txt = 'Hi, I m Anay,'; /* The text */
elementName = '.typeWriter1'
$(elementName).text('')
$(elementName).css("visibility", 'visible')
typeWriter()
setTimeout(()=> {
elementName = '.typeWriter2'
i = 0   
txt = "A Programmer"
$(elementName).text('')
$(elementName).css("visibility", 'visible')
setTimeout(() => $('.viewSkills').css('visibility', 'visible'), 50 * txt.length)
typeWriter()
} , 150 * (txt.length + 2))

function openEmail(){
  window.location = "mailto:smog_snag.0s@icloud.com"
}