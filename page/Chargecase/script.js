function addTreatmentStep(){

const container =
document.getElementById(
"treatmentStepsContainer"
);

const input =
document.createElement("input");

input.type="text";

input.className=
"treatment-step";

input.placeholder=
"ขั้นตอนเพิ่มเติม";

container.appendChild(input);

}

function copyToClipboard(){

const text=
generateDocument();

navigator.clipboard.writeText(text)
.then(()=>{

const alertBox=
document.getElementById(
"copyAlert"
);

alertBox.style.display=
"block";

setTimeout(()=>{

alertBox.style.display=
"none";

},2000);

});

}

function generateDocument(){

const name =
document.getElementById(
"name"
).value;

const color =
document.getElementById(
"caseColor"
).value;

const symptoms =
document.getElementById(
"symptoms"
).value;

const steps =
Array.from(
document.querySelectorAll(
".treatment-step"
)
)

.map(s=>s.value)

.filter(s=>s);

const status =
document.getElementById(
"status"
).value;

const recovery =
document.getElementById(
"recovery"
).value;

const doctor =
document.getElementById(
"doctor"
).value;

const therapist =
document.getElementById(
"therapist"
).value;

const today=
new Date();

const dateStr=
`${today.getDate()}/${
today.getMonth()+1
}/${
(today.getFullYear()+543)
.toString().slice(2)
}`;

const bulletSteps=
steps.map(s=>
`• ${s}`
).join("\n");

return `เอกสารชาร์จ

ชื่อ : ${name} ${color}

ผู้รักษา : ${doctor}

ผู้บำบัด : ${therapist}

วันที่ : ${dateStr}

อาการ :
${symptoms}

การรักษา :
${bulletSteps}

สถานะ :
${status}

พักฟื้น :
${recovery}`;

}

document
.getElementById(
"chartForm"
)

.addEventListener(
"submit",

function(e){

e.preventDefault();

copyToClipboard();

});