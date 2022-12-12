//extend HTMLElement to create your custom element
//one is you can extend HTMLElement -- autonomous element
//you can extend the functionality of any existing HTMLElement
//wordcount in p
//extend that particular class
//HTMLParagraphElement
//
class MyElement extends HTMLElement{
    constructor(img){
      //call the super class constructor
        super();
        //separate your element into shadow
        this.attachShadow({mode:'open'});
        //create span element
        let span = document.createElement('span');
        let style =this.getAttribute('style');
        let message= this.getAttribute('message');
        
        span.style=style;
        
        span.innerText =message;
         this.shadowRoot.appendChild(span);
         span.style="";
    }}
//to register the custom element with the dom
//window.customElements 
//window is the default object
//define method takes 2 args   --name of the element which we want to use in html
//other arg is the class name which is child class of HTMLElement 

let template= document.getElementById("mytemplate");
let content = template.content;
document.body.appendChild(content);

customElements.define('my-element',MyElement);

customElements.define("my-template1",
     class extends HTMLElement{

       constructor(){

        super();
        let template =  document.getElementById('mytemplate1');
        let content= template.content;

        const shadowRoot =this.attachShadow({mode:'open'});
        shadowRoot.appendChild(content.cloneNode(true));

       }
   

     }


)
