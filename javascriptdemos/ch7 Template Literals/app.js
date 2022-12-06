const name="Amit Sharma";
const age=30;
const job="Senior Analyst";
const city ="Pune";


let html;

//without template string (ES5 way)

html="<ul><li>Name"+name+"</li><li>Age:"+age+"</li><li>Job:"+job;


//with template string ES6 way

html =
`<ul>
<li>Name: ${name}</li>

<li>Age: ${age > 31 ? "Over 31" : "Under 31"}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>

</ul>`;

console.log(html);
document.body.innerHTML=html;

