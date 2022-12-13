class MyTable extends HTMLElement {
    // Specify observed attributes so that
    // attributeChangedCallback will work
    static get observedAttributes() {
      return ['rows', 'cols'];
    }
  
    constructor() {
      // Always call super first in constructor
      super();
      let tr,td;
      const shadow = this.attachShadow({mode: 'open'});
  
       const table=document.createElement('table');
       let rows =  `${this.getAttribute('rows')}`;
       let cols =  `${this.getAttribute('cols')}`;
       console.log(rows,cols);
       
       for(let i=0;i<`${this.getAttribute('rows')}`;i++){
        tr = document.createElement('tr');
          for(let j=0;j<`${this.getAttribute('cols')}`;j++)
{
    td=document.createElement('td');
    td.textContent=j;
    tr.appendChild(td);
}       }
       table.appendChild(tr);
      shadow.appendChild(table);

    }
  
    connectedCallback() {
      console.log('Custom table created');
      updateTable(this);
    }
  
    disconnectedCallback() {
      console.log('Custom table element removed from page.');
    }
  
    adoptedCallback() {
      console.log('Custom table element moved to new page.');
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      console.log('Custom table element attributes changed.');
      updateTable(this);
    }
  }
  
  customElements.define('custom-table', MyTable);
  
  function updateTable(elem) {
    const shadow = elem.shadowRoot;

    

    
    for (let i=0;i<`${elem.getAttribute('rows')}`;i++){
        elem.innerHTML='<tr><td>1</td></tr>';
    }
    shadow.appendChild(elem);
    
   
  }
  const add=document.querySelector('.add');

  add.onclick = function() {
    // Create a custom table element
   let  table = document.createElement('custom-table');
    table.setAttribute('rows', '5');
    table.setAttribute('cols', '5');
    document.body.appendChild(table);
  
    
  };
  
 
