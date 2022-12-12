class Rectangle  extends HTMLElement{
 //specify which attributes are to be monitored so that attributeChangedCallback 
    static get observedAttributes(){

        return ['color','length','breadth'];
    }

 
    constructor(){

    super();
    const shadow =  this.attachShadow({mode:'open'});

    const div= document.createElement('div');

    const style =  document.createElement('style');

    shadow.appendChild(style);
    shadow.appendChild(div);



    }

    //life cycle call back
    //this will occur when element is added to the dom
    connectedCallback(){

        console.log('custom rectangle added to the page');
        updateRect(this);
    }

    disconnectedCallback(){

        console.log('custom rectangle removed from the page');

    }

    adoptedCallback(){
     console.log('rect moved to a new page')

    }
    attributeChangedCallback(name, oldValue,newValue){

      console.log('custom rect attributes changed');
      updateRect(this);
    }


}

customElements.define('custom-rect',Rectangle);

function updateRect(elem){

     const shadow = elem.shadowRoot;

     shadow.querySelector('style').textContent = `
     div{
      width:${elem.getAttribute('breadth')}px;
      height:${elem.getAttribute('length')}px;
      background-color:${elem.getAttribute('color')};
        
     }`;
     
}
const add =  document.querySelector('.add');
const update= document.querySelector('.update');
const remove= document.querySelector('.remove');

let rectangle;

update.disabled=true;
remove.disabled=true;

function random(min,max){

    return Math.floor(Math.random()*(max-min+1)*min);
}


add.onclick = function(){

rectangle= document.createElement('custom-rect');
rectangle.setAttribute('length',100);
rectangle.setAttribute('breadth',200);
rectangle.setAttribute('color','red');

document.body.appendChild(rectangle);

update.disabled=false;
remove.disabled=false;
add.disabled=true;

}

update.onclick = function(){
rectangle.setAttribute('length',random(50,300));
rectangle.setAttribute('breadth',random(50,400));
rectangle.setAttribute('color',`rgb(${random(0,255)},
 ${random(0,255)},
  ${random(0,255)})`);

}

remove.onclick=function(){
    document.body.removeChild(rectangle);

    update.disabled=true;
    remove.disabled=true;
    add.disabled =false;

}