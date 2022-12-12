class BlueBorderBox extends HTMLElement{

   constructor(){
    super();
   this.attachShadow({mode:'open'});
    const span=document.createElement('span');
    span.innerText=this.getAttribute('customMessage');
    //console.log(customMessage);
    span.style=this.getAttribute('style');
    this.shadowRoot.appendChild(span);

 
   }}
 customElements.define('blue-border-box',BlueBorderBox);

  
