function showSection(sectionId, element) {
  let sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.remove("active-section"));

  document.getElementById(sectionId).classList.add("active-section");

  let items = document.querySelectorAll(".sidebar li");
  items.forEach(li => li.classList.remove("active"));

  element.classList.add("active");
}

function toggleCard(header){
    const body=header.nextElementSibling
    const border=document.querySelector(".formHeader")
    
    body.style.display = body.style.display === 'none' ? '' : 'none';
}

function toggleExpForm(form,isdisabled){
 form.querySelectorAll("input,textarea,select").forEach((elem=>
 (elem.disabled=isdisabled)
 ))

}
// contact input
let contactform = document.getElementById("contactform")

let firstname = document.querySelector("#firstname")
let lastname = document.querySelector("#lastname")
let email = document.querySelector("#email")
let phonenumber = document.querySelector("#phonenumber")
let portfolio = document.querySelector("#portfolio")
let github = document.querySelector("#github")
let address = document.querySelector("#address")
let linkedin = document.querySelector("#linkedin")
let nationality = document.querySelector("#nationality")
console.log(firstname)
let dob = document.querySelector("#dob")

let editcontactdetails =document.querySelector("#editcontactdetails")
editcontactdetails.addEventListener("click",function(){
    toggleExpForm(contactform,false)
})
// contact input end

// summaryform
let summaryform =document.getElementById("summaryform")

let professionaltitle=document.querySelector("#professionaltitle")
let summaryStatement=document.querySelector("#summaryStatement")
let keyStrengths=document.querySelector("#keyStrengths")
let languageSpoken=document.querySelector("#languageSpoken")

let summarybtn=document.querySelector(".summarybtn")
summarybtn.addEventListener("click",function(){
    toggleExpForm(summaryform,false)
})
// summaryform end

let resume={
    contactlist : {},
    summarylist:{},
    experience:[],
    education:[],
    honors:[],
    skills:[],
   
   
    contact : function(){
        contactform.addEventListener("submit",this.savecontactdetails.bind(this))
    },
    savecontactdetails: function(e){
    e.preventDefault();
    this.addcontact()

  },
  addcontact:function(){
    this.contactlist={
        firstname : firstname.value,
        lastname : lastname.value,
        email : email.value,
        phonenumber : phonenumber.value,
        portfolio : portfolio.value,
        github : github.value,
        address : address.value,
        linkedin : linkedin.value,
        nationality : nationality.value,
        dob : dob.value,
    }
    console.log(resume.contactlist)
    toggleExpForm(contactform,true)
  },

//   summary
    summary : function(){
        summaryform.addEventListener("submit",this.summaryformsave.bind(this))
    },
    summaryformsave:function(e){
        e.preventDefault();
        this.addsummary()
        
    },
    addsummary:function(){
        this.summarylist={
            professionaltitle:professionaltitle.value,
            summaryStatement:summaryStatement.value,
            keyStrengths:keyStrengths.value,
            languageSpoken:languageSpoken.value,

        }
         console.log(resume.summarylist)
        toggleExpForm(summaryform,true)

    }
  
}

resume.contact()
resume.summary()

let addmoreexp = document.querySelector("#addmoreexp")

addmoreexp.addEventListener("click",function(){

// 🔹 formcontainer
const formcontainer = document.createElement("div");
formcontainer.className = "formcontainer";

// ================= HEADER =================
const formHeader = document.createElement("div");
formHeader.className = "formHeader";
formHeader.setAttribute("onclick", "toggleCard(this)");


const heading = document.createElement("div");
heading.className = "heading";

const title = document.createElement("div");
title.className = "entry-title";
title.textContent = "Product Designer — Acme Corp";

const sub = document.createElement("div");
sub.className = "entry-sub";
sub.textContent = "Jan 2021 – Present · San Francisco, CA";

heading.appendChild(title);
heading.appendChild(sub);

const actions = document.createElement("div");
actions.className = "entry-actions";

const delBtn = document.createElement("button");
delBtn.className = "icon-btn del";
delBtn.title = "Delete";
delBtn.textContent = "✕";

const toggleBtn = document.createElement("button");
toggleBtn.className = "icon-btn";
toggleBtn.title = "Toggle";
toggleBtn.textContent = "▾";

actions.appendChild(delBtn);
actions.appendChild(toggleBtn);

formHeader.appendChild(heading);
formHeader.appendChild(actions);


// ================= FORM =================
const form = document.createElement("form");
form.className = "form-body";


// Job Title
let field1 = document.createElement("div");
field1.className = "feild";

let label1 = document.createElement("label");
label1.textContent = "Job Title";

let input1 = document.createElement("input");
input1.type = "text";
input1.placeholder = "Job Title";
input1.className = "jobTitle";

field1.append(label1, input1);


// Company
let field2 = document.createElement("div");
field2.className = "feild";

let label2 = document.createElement("label");
label2.textContent = "Company/Employer";

let input2 = document.createElement("input");
input2.type = "text";
input2.placeholder = "Company/Employer";
input2.className = "employer";

field2.append(label2, input2);


// Location
let field3 = document.createElement("div");
field3.className = "feild";

let label3 = document.createElement("label");
label3.textContent = "Location";

let input3 = document.createElement("input");
input3.type = "text";
input3.placeholder = "Location";
input3.className = "location";

field3.append(label3, input3);


// Start Date
let field4 = document.createElement("div");
field4.className="feild"


let label4 = document.createElement("label");
label4.textContent = "Start Date";

let input4 = document.createElement("input");
input4.className = "startDate";
input4.type = "month";

field4.append(label4, input4);


// End Date
let field5 = document.createElement("div");
field5.className = "feild";


let label5 = document.createElement("label");

label5.textContent = "End Date";

let input5 = document.createElement("input");
input5.className = "endDate";
input5.type = "month";


field5.append(label5, input5);


// Key Achievement
let field6 = document.createElement("div");
field6.className = "feild";


let label6 = document.createElement("label");
label6.textContent = "Key Achievement";

let input6 = document.createElement("input");
input6.type = "text";
input6.placeholder = "e.g. Increased conversion by 18% by redesigning onboarding";
input6.className = "keyAchievement";


field6.append(label6, input6);


// Employment Type
let field7 = document.createElement("div");
field7.className = "feild";


let label7 = document.createElement("label");
label7.textContent = "Employment Type";


let select = document.createElement("select");
select.className = "employmentType";


["Full-time","Part-time","Contract","Internship","Freelance"].forEach(opt=>{
  let option = document.createElement("option");
  option.textContent = opt;
  select.appendChild(option);
});

field7.append(label7, select);

// Description
let field8 = document.createElement("div");
field8.className="feild-full"

let label8 = document.createElement("label");
label8.textContent = "Description / Responsibilities";

let textarea = document.createElement("textarea");
textarea.placeholder = `• Led end-to-end design of core product features
• Collaborated with engineering to deliver pixel-perfect UI
• Increased user retention by 24% through redesign`;
textarea.className = "description";


field8.append(label8, textarea);


// Buttons
let btnflex = document.createElement("div");
btnflex.className = "btnflex";

let editBtn = document.createElement("button");
editBtn.type = "button";
editBtn.textContent = "edit";

let saveBtn = document.createElement("button");
saveBtn.type = "submit";
saveBtn.textContent = "Save";

btnflex.append(editBtn, saveBtn);


// Append all fields
form.append(
  field1,
  field2,
  field3,
  field4,
  field5,
  field6,
  field7,
  field8,
  btnflex
);

let allForms = document.querySelectorAll("#experience .form-body");
let formIndex = allForms.length; // includes first form

form.dataset.index = formIndex;
// FINAL APPEND
formcontainer.append(formHeader, form);
let exp=document.querySelector("#experience")


delBtn.addEventListener("click", function(){

  let i = Number(form.dataset.index);

  // remove from array
  resume.experience.splice(i, 1);

  // remove UI
  formcontainer.remove();

  // 🔁 re-index all forms
  let allForms = document.querySelectorAll(".form-body");

  allForms.forEach((f, index) => {
    f.dataset.index = index;
  });

  console.log("After delete:", resume.experience);
});


form.addEventListener("submit" ,function(e){
    e.preventDefault()
    let i = Number(form.dataset.index);
      let data={
        jobTitle: input1.value,
        employer: input2.value,
        location: input3.value,
        startdate:input4.value,
        enddate:input5.value,
        keyachievements:input6.value,
        employmenttype:select.value,
        textarea:textarea.value,
      }

      editBtn.addEventListener("click", function(){
        toggleExpForm(form, false); // 🔓 unlock
        });


    resume.experience[i] = data;
    console.log(form)

    console.log(resume.experience);
  console.log("Experience:", resume.experience);

  toggleExpForm(form,true)

})

exp.insertBefore(formcontainer,addmoreexp)
})


let firstexpform=document.querySelector(".first-form")
let firstEditBtn = firstexpform.querySelector(".firstFormBtn");
firstEditBtn.addEventListener("click", function(){
toggleExpForm(firstexpform, false); // 🔓 unlock
});

let firstDeleteBtn = document.querySelector(".firstform .del");

firstDeleteBtn.addEventListener("click", function(){

  let i = Number(firstexpform.dataset.index);

  resume.experience.splice(i, 1);

  document.querySelector(".firstform").remove();

  // re-index remaining 
  let allForms = document.querySelectorAll(".form-body");

  allForms.forEach((f, index) => {
    f.dataset.index = index;
  });

  console.log("After delete:", resume.experience);
});

firstexpform.dataset.index = 0;
firstexpform.addEventListener("submit",function(e){
    e.preventDefault()
    let jobTitle=document.querySelector(".jobTitle")
    let employer=document.querySelector(".employer")
    let location=document.querySelector(".location")
    let startDate=document.querySelector(".startDate")
    let endDate=document.querySelector(".endDate")
    let keyAchievement=document.querySelector(".keyAchievement")
    let employmentType=document.querySelector(".employmentType")
    let description=document.querySelector(".description")

    let data={
        jobTitle: jobTitle.value,
        employer: employer.value,
        location: location.value,
        startdate:startDate.value,
        enddate:endDate.value,
        keyachievements:keyAchievement.value,
        employmenttype:employmentType.value,
        textarea:description.value,
      }


    let i = Number(firstexpform.dataset.index);
    resume.experience[i] = data;
    console.log(resume.experience);
    toggleExpForm(firstexpform,true)
    console.log(firstexpform)
    



})  


// education

let addmoredu =  document.querySelector("#addmoredu")

addmoredu.addEventListener("click",function(){
    // MAIN CONTAINER
const formcontainer = document.createElement("div");
formcontainer.className = "formcontainer educationFirstform";

// ================= HEADER =================
const formHeader = document.createElement("div");
formHeader.className = "formHeader";
formHeader.setAttribute("onclick", "toggleCard(this)");

// heading wrapper
const heading = document.createElement("div");
heading.className = "heading";

// title
const entryTitle = document.createElement("div");
entryTitle.className = "entry-title";
entryTitle.textContent = "Product Designer — Acme Corp";

// subtitle
const entrySub = document.createElement("div");
entrySub.className = "entry-sub";
entrySub.textContent = "Jan 2021 – Present · San Francisco, CA";

heading.append(entryTitle, entrySub);

// actions
const actions = document.createElement("div");
actions.className = "entry-actions";

const delBtn = document.createElement("button");
delBtn.className = "icon-btn del educDele";
delBtn.title = "Delete";
delBtn.textContent = "✕";


const toggleBtn = document.createElement("button");
toggleBtn.className = "icon-btn";
toggleBtn.title = "Toggle";
toggleBtn.textContent = "▾";

actions.append(delBtn, toggleBtn);

// header append
formHeader.append(heading, actions);

// ================= FORM =================
const form = document.createElement("form");
form.className = "form-body educationFirstformBody";

// Degree / Certification
let f1 = document.createElement("div");
f1.className = "feild";

let l1 = document.createElement("label");
l1.textContent = "Degree / Certification";

let select = document.createElement("select");
select.className = "certificationType";

[
  "Bachelor's Degree",
  "Master's Degree",
  "PhD / Doctorate",
  "Associate Degree",
  "High School Diploma",
  "Professional Certification",
  "Online Course",
  "Others"
].forEach(opt => {
  let option = document.createElement("option");
  option.textContent = opt;
  select.appendChild(option);
});

f1.append(l1, select);

// Field of Study
let f2 = document.createElement("div");
f2.className = "feild";

let l2 = document.createElement("label");
l2.textContent = "Field of Study / Major";

let input2 = document.createElement("input");
input2.type = "text";
input2.placeholder = "Computer Science";
input2.className = "study";

f2.append(l2, input2);

// Institution
let f3 = document.createElement("div");
f3.className = "feild";

let l3 = document.createElement("label");
l3.textContent = "Institution / School";

let input3 = document.createElement("input");
input3.type = "text";
input3.placeholder = "MIT";
input3.className = "institution";

f3.append(l3, input3);

// Location
let f4 = document.createElement("div");
f4.className = "feild";

let l4 = document.createElement("label");
l4.textContent = "Location";

let input4 = document.createElement("input");
input4.type = "text";
input4.placeholder = "Location";
input4.className = "location";

f4.append(l4, input4);

// GPA
let f5 = document.createElement("div");
f5.className = "feild";

let l5 = document.createElement("label");
l5.textContent = "GPA / Grade";

let input5 = document.createElement("input");
input5.type = "text";
input5.placeholder = "e.g. 3.9 / 4.0";
input5.className = "grade";

f5.append(l5, input5);

// Start Year
let f6 = document.createElement("div");
f6.className = "feild";

let l6 = document.createElement("label");
l6.textContent = "Start Year";

let input6 = document.createElement("input");
input6.type = "number"; // NOTE: no "year" type in HTML
input6.className = "startYear";
input6.value = "2016";

f6.append(l6, input6);

// End Year
let f7 = document.createElement("div");
f7.className = "feild";

let l7 = document.createElement("label");
l7.textContent = "End Year";

let input7 = document.createElement("input");
input7.type = "number";
input7.className = "endYear";
input7.value = "2020";

f7.append(l7, input7);

// Thesis
let f8 = document.createElement("div");
f8.className = "feild-full";

let l8 = document.createElement("label");
l8.textContent = "Relevant Coursework / Thesis optional";

let textarea = document.createElement("textarea");
textarea.className = "Thesis";
textarea.placeholder = "Algorithms, ML, Distributed Systems | Thesis: Neural Networks for NLP";

f8.append(l8, textarea);

// Buttons
let btnflex = document.createElement("div");
btnflex.className = "btnflex";

let editBtn = document.createElement("button");
editBtn.type = "button";
editBtn.id = "editEducation";
editBtn.textContent = "edit";

let saveBtn = document.createElement("button");
saveBtn.type = "submit";
saveBtn.id = "saveEducation";
saveBtn.textContent = "Save";

btnflex.append(editBtn, saveBtn);

// append all fields
form.append(f1, f2, f3, f4, f5, f6, f7, f8, btnflex);

// FINAL APPEND
formcontainer.append(formHeader, form);

// 👉 where to insert
let education = document.querySelector("#education")



let allForms = document.querySelectorAll("#education .form-body");
let index = allForms.length;
form.dataset.index = index;

form.addEventListener("submit",function(e){
    e.preventDefault()
    let i=Number(form.dataset.index)
    data={
        Certification: select.value,
        Study : input2.value,
        Institution : input3.value,
        Location :input4.value,
        Grade : input5.value,
        StartYear : input6.value,
        EndYear : input7.value,
        Coursework : textarea.value,
    }
    

    resume.education[i] = data

console.log(form)

    toggleExpForm(form,true)


})

editBtn.addEventListener("click",function(){
    toggleExpForm(form,false)
})

delBtn.addEventListener("click", function () {

    let i = Number(form.dataset.index); // ✅ correct form index

    // remove from array
    resume.education.splice(i, 1);

    // remove UI (correct container)
    formcontainer.remove();

    // ✅ re-index ALL education forms correctly
    let allForms = document.querySelectorAll("#education .form-body");

    allForms.forEach((f, index) => {
        f.dataset.index = index;
    });

    console.log("After delete:", resume.education);
});



    education.insertBefore(formcontainer,addmoredu)

})

console.log(resume.education)

let educationFirstformBody=document.querySelector(".educationFirstformBody")
educationFirstformBody.dataset.index=0

let editEducation=document.querySelector("#editEducation")
editEducation.addEventListener("click",function(){
    toggleExpForm(educationFirstformBody,false)
})


educationFirstformBody.addEventListener("submit",function(e){
    e.preventDefault()
   
    let select=document.querySelector(".certificationType")
    let Study=document.querySelector(".study")
    let Institution=document.querySelector(".institution")
    let Location=document.querySelector("#education .location")
    let Grade=document.querySelector(".grade")
    let StartYear=document.querySelector(".startYear")
    let EndYear=document.querySelector(".endYear")
    let Coursework=document.querySelector(".Thesis")

        data={
        Certification: select.value,
        Study : Study.value,
        Institution : Institution.value,
        Location : Location.value,
        Grade : Grade.value,
        StartYear : StartYear.value,
        EndYear : EndYear.value,
        Coursework : Coursework.value,
    }

    let i = Number(educationFirstformBody.dataset.index)

    resume.education[i]=data

    console.log(educationFirstformBody)

    console.log("first form" ,resume.education)

    toggleExpForm(educationFirstformBody,true)



})

let educDele=document.querySelector(".educDele")
let educationFirstform = document.querySelector(".educationFirstform")
educDele.addEventListener("click",function(){
    let i = Number(educationFirstformBody.dataset.index)
    resume.education.splice(i,1)
    educationFirstform.remove()

    let allForms = document.querySelectorAll("#education .form-body");

    allForms.forEach((f, index) => {
        f.dataset.index = index;
    });
})

// education end

// honors
let addmoreHonors = document.querySelector("#addmoreHonors");

addmoreHonors.addEventListener("click", function () {

  // MAIN CONTAINER
  const formcontainer = document.createElement("div");
  formcontainer.className = "formcontainer honorscont";

  // ================= HEADER =================
  const formHeader = document.createElement("div");
  formHeader.className = "formHeader";
  formHeader.setAttribute("onclick", "toggleCard(this)");

  const heading = document.createElement("div");
  heading.className = "heading";

  const title = document.createElement("div");
  title.className = "entry-title";
  title.textContent = "Product Designer — Acme Corp";

  const sub = document.createElement("div");
  sub.className = "entry-sub";
  sub.textContent = "Jan 2021 – Present · San Francisco, CA";

  heading.append(title, sub);

  const actions = document.createElement("div");
  actions.className = "entry-actions";

  const delBtn = document.createElement("button");
  delBtn.className = "icon-btn honorsdel";
  delBtn.title = "Delete";
  delBtn.textContent = "✕";

  const toggleBtn = document.createElement("button");
  toggleBtn.className = "icon-btn";
  toggleBtn.title = "Toggle";
  toggleBtn.textContent = "▾";

  actions.append(delBtn, toggleBtn);
  formHeader.append(heading, actions);

  // ================= FORM =================
  const form = document.createElement("form");
  form.className = "form-body honorsForm";

  // Category
  let f1 = document.createElement("div");
  f1.className = "feild";

  let l1 = document.createElement("label");
  l1.textContent = "Category";

  let select = document.createElement("select");
  select.className = "honorsCategory";

  [
    "Academic",
    "Professional",
    "Competition",
    "Publication",
    "Scholarship",
    "Volunteer",
    "Other"
  ].forEach(opt => {
    let option = document.createElement("option");
    option.textContent = opt;
    select.appendChild(option);
  });

  f1.append(l1, select);

  // Award Name
  let f2 = document.createElement("div");
  f2.className = "feild";

  let l2 = document.createElement("label");
  l2.textContent = "Award / Honor Name";

  let input2 = document.createElement("input");
  input2.type = "text";
  input2.placeholder = "Dean's List";
  input2.className = "awards";

  f2.append(l2, input2);

  // Organisation
  let f3 = document.createElement("div");
  f3.className = "feild";

  let l3 = document.createElement("label");
  l3.textContent = "Issuing Organisation";

  let input3 = document.createElement("input");
  input3.type = "text";
  input3.placeholder = "MIT";
  input3.className = "organisation";

  f3.append(l3, input3);

  // Year
  let f4 = document.createElement("div");
  f4.className = "feild";

  let l4 = document.createElement("label");
  l4.textContent = "Year";

  let input4 = document.createElement("input");
  input4.type = "number";
  input4.value = "2020";
  input4.className = "honorsYear";

  f4.append(l4, input4);

  // Description
  let f5 = document.createElement("div");
  f5.className = "feild-full";

  let l5 = document.createElement("label");
  l5.textContent = "Description";

  let textarea = document.createElement("textarea");
  textarea.className = "honorsDesc";
  textarea.placeholder =
    "Brief description of what this award recognises and why you received it.";

  f5.append(l5, textarea);

  // Certificate
  let f6 = document.createElement("div");
  f6.className = "feild";

  let l6 = document.createElement("label");
  l6.textContent = "Certificate / Link";

  let input6 = document.createElement("input");
  input6.type = "url";
  input6.className = "honorscerti";
  input6.placeholder = "https://credential-url.com";

  f6.append(l6, input6);

  // Buttons
  let btnflex = document.createElement("div");
  btnflex.className = "btnflex";

  let editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.className = "editHonors";
  editBtn.textContent = "edit";

  let saveBtn = document.createElement("button");
  saveBtn.type = "submit";
  saveBtn.className = "saveHonors";
  saveBtn.textContent = "Save";

  btnflex.append(editBtn, saveBtn);

  // Append everything
  form.append(f1, f2, f3, f4, f5, f6, btnflex);
  formcontainer.append(formHeader, form);

  // INSERT
  let honorsSection = document.querySelector("#honors");

editBtn.addEventListener("click",function () {
    toggleExpForm(form,false)
    
})

let allform=document.querySelectorAll("#honors form")
let ind=allform.length
form.dataset.index=ind

delBtn.addEventListener("click",function(){
    let i = Number(form.dataset.index)
    resume.honors.splice(i,1)

    formcontainer.remove()

    let resetindex=document.querySelectorAll("#honors form")
    resetindex.forEach(function(contform,index){
        contform.dataset.index=index

    })


})

form.addEventListener("submit",function(e){
    e.preventDefault()
let i =Number(form.dataset.index)
    data={
        Category:select.value,
        Award:input2.value,
        Organisation:input3.value,
        Year:input4.value,
        description:textarea.value,
        Certification:input6.value,
    
    }
    resume.honors[i]=data
    console.log(resume.honors)

    toggleExpForm(form,true)
})

  honorsSection.insertBefore(formcontainer, addmoreHonors);

});

//static honor form

let honorsForm = document.querySelector(".honorsForm")
honorsForm.dataset.index=0

let editHonors=document.querySelector(".editHonors")
editHonors.addEventListener("click",function(e){
    toggleExpForm(honorsForm,false)
})

let honorsdel=document.querySelector(".honorsdel")
let honorscont=document.querySelector(".honorscont")
honorsdel.addEventListener("click",function(){
    let i=Number(editHonors.dataset.index)
    resume.honors.splice(i,1)
    honorscont.remove()

    let allforms=document.querySelectorAll("#honors .honorsForm")
    allforms.forEach(function(cont,index){
        cont.dataset.index=index
    })
    
})
honorsForm.addEventListener("submit",function(e){
    e.preventDefault()

    let honorsCategory =document.querySelector(".honorsCategory")
    let awards =document.querySelector(".awards")
    let organisation =document.querySelector(".organisation")
    let honorsYear =document.querySelector(".honorsYear")
    let honorsDesc =document.querySelector(".honorsDesc")
    let honorscerti =document.querySelector(".honorscerti")
    let i = Number(honorsForm.dataset.index)

    data={
        Category:honorsCategory.value,
        Award:awards.value,
        Organisation:organisation.value,
        Year:honorsYear.value,
        description:honorsDesc.value,
        Certification:honorscerti.value,
        }

        resume.honors[i]=data

        console.log(resume.honors)
         toggleExpForm(honorsForm,true)

})

// skills



let addmoreSkills = document.querySelector("#addmoreSkills");

addmoreSkills.addEventListener("click", function () {

  // MAIN CONTAINER
  const formcontainer = document.createElement("div");
  formcontainer.className = "formcontainer skillscont";

  // ================= HEADER =================
  const formHeader = document.createElement("div");
  formHeader.className = "formHeader";
  formHeader.setAttribute("onclick", "toggleCard(this)");

  const heading = document.createElement("div");
  heading.className = "heading";

  const title = document.createElement("div");
  title.className = "entry-title";
  title.textContent = "Product Designer — Acme Corp";

  const sub = document.createElement("div");
  sub.className = "entry-sub";
  sub.textContent = "Jan 2021 – Present · San Francisco, CA";

  heading.append(title, sub);

  const actions = document.createElement("div");
  actions.className = "entry-actions";

  const delBtn = document.createElement("button");
  delBtn.className = "icon-btn skillsdel";
  delBtn.title = "Delete";
  delBtn.textContent = "✕";

  const toggleBtn = document.createElement("button");
  toggleBtn.className = "icon-btn";
  toggleBtn.title = "Toggle";
  toggleBtn.textContent = "▾";

  actions.append(delBtn, toggleBtn);
  formHeader.append(heading, actions);

  // ================= FORM =================
  const form = document.createElement("form");
  form.className = "form-body skillform";

  // Proficiency
  let f1 = document.createElement("div");
  f1.className = "feild";

  let l1 = document.createElement("label");
  l1.textContent = "Proficiency Level";

  let select = document.createElement("select");
  select.className = "proficiency";

  ["Beginner", "Intermediate", "Advanced", "Expert"].forEach(opt => {
    let option = document.createElement("option");
    option.textContent = opt;
    select.appendChild(option);
  });

  f1.append(l1, select);

  // Category Name
  let f2 = document.createElement("div");
  f2.className = "feild";

  let l2 = document.createElement("label");
  l2.textContent = "Category Name";

  let input2 = document.createElement("input");
  input2.type = "text";
  input2.placeholder = "Technical Skills";
  input2.className = "cate";

  f2.append(l2, input2);

  // Skills Input
  let f3 = document.createElement("div");
  f3.className = "feild";

  let l3 = document.createElement("label");
  l3.textContent = "Skills comma-separated";

  let input3 = document.createElement("input");
  input3.type = "text";
  input3.placeholder = "Figma, React, TypeScript, CSS";
  input3.className = "skills";

  f3.append(l3, input3);

  // Buttons
  let btnflex = document.createElement("div");
  btnflex.className = "btnflex";

  let editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.className = "editSkills";
  editBtn.textContent = "edit";

  let saveBtn = document.createElement("button");
  saveBtn.type = "submit";
  saveBtn.className = "saveSkills";
  saveBtn.textContent = "Save";

  btnflex.append(editBtn, saveBtn);

  // Append all
  form.append(f1, f2, f3, btnflex);
  formcontainer.append(formHeader, form);

  let allforms=document.querySelectorAll("#skills form")
  let ind=allforms.length
  form.dataset.index=ind
console.log(ind)
  // INSERT INTO DOM
  let skillsSection = document.querySelector("#skills");


  editBtn.addEventListener("click",function(){
    toggleExpForm(form,false)
  })

  delBtn.addEventListener("click",function(){
    let i = Number(form.dataset.index)
    resume.skills.splice(i,1)
    formcontainer.remove()
    
    let resetform= document.querySelectorAll("#skills form")
    resetform.forEach(function(con,index){
        con.dataset.index=index
    })


  })
  form.addEventListener("submit",function(e){
    e.preventDefault()
    let i = Number(form.dataset.index)
    data={
        Proficiency:select.value,
        Category:input2.value,
        skills:input3.value,
    }
    resume.skills[i]=data

    toggleExpForm(form,true)

  })
  skillsSection.insertBefore(formcontainer, addmoreSkills);
});

// static skill form
let skillform = document.querySelector(".skillform")
skillform.dataset.index = 0

let editSkills=document.querySelector(".editSkills")
editSkills.addEventListener("click",function(){
    toggleExpForm(skillform,false)
})

let skillsdel=document.querySelector(".skillsdel")
let skillscont =document.querySelector(".skillscont")
skillsdel.addEventListener("click",function(){
    let i =Number(skillform.dataset.index)
    resume.skills.splice(i,1)
    skillscont.remove()

    let allform=document.querySelectorAll("#skills form")
    allform.forEach(function(con,ind){
        con.dataset.index=ind
    })
})

skillform.addEventListener("submit",function(e){
    e.preventDefault()
    let proficiency=document.querySelector(".proficiency")
    let cate=document.querySelector(".cate")
    let skills=document.querySelector(".skills")
    let i = Number(skillform.dataset.index)

     data={
        Proficiency:proficiency.value,
        Category:cate.value,
        skills:skills.value,
    }
    resume.skills[i]=data

    toggleExpForm(skillform,true)

})

// reume mai show karna 

function fillResume(resume) {
  //contact
  let fullName = resume.contactlist.firstname + " " + resume.contactlist.lastname;

  let contact = resume.contactlist.phonenumber 
  let showemail=resume.contactlist.email 
  let showaddress=resume.contactlist.address 
  let showportfolio= resume.contactlist.portfolio 
  let showlinkedin=resume.contactlist.linkedin  
  let showgithub = resume.contactlist.github 
  let shownationality = resume.contactlist.nationality  
  let showdob= resume.contactlist.dob 

  // summary 

  let showprofessionaltitle = resume.summarylist.professionaltitle
  let showkeyStrengths = resume.summarylist.keyStrengths
  let showlanguageSpoken = resume.summarylist.languageSpoken
  let showsummaryStatement = resume.summarylist.summaryStatement


  // inner text contact
  document.querySelector("#resumeModal #name").innerText = fullName || "Your Name";
  document.querySelector("#resumeModal #r-phone").innerText=contact || "123-456-7890"
  document.querySelector("#resumeModal #r-address").innerText= showaddress || "abc@gmail.com"
  document.querySelector("#resumeModal #r-email").innerText=showemail || "123 Anywhere St., Any City"
  document.querySelector("#resumeModal #r-linkedin").innerText=showlinkedin || "https://www.linkedin.com/in/nehanshu"
  document.querySelector("#resumeModal #r-github").innerText=showgithub  || "https://github.com/yourusername"

  // inner text summary

  document.querySelector("#resumeModal #r_summary").innerText = showsummaryStatement || "Write a short professional summary about yourself.";
  document.querySelector("#resumeModal #r_role").innerText = showprofessionaltitle || "Web Developer";

  //experience

  let exp=document.querySelector("#r_experience-list")
  exp.innerHTML=""

  resume.experience.forEach(function(res){

    let div =document.createElement("div")
    div.className="res-item"

    div.innerHTML=` <div class="res-flex">
      <strong>${res.employer || "Company Name"} <span> (${res.location || "Company Location"}) </span> </strong>
      <span>${res.startdate || "Start"} – ${res.enddate || "End"}</span>
    </div>
    <p class="sub">${res.jobTitle || "Job Role"}</p>
    <ul>
      <li>${res.keyachievements || "Key achievement here"}</li>
      <li>${res.textarea || "Responsibilities here"}</li>
    </ul>`

  exp.appendChild(div);
    })
  //education
    let R_edu=document.querySelector("#r_education_list")
    R_edu.innerHTML=""

    resume.education.forEach(function(edu){
      let div=document.createElement("div")
      div.className="res-item"

      div.innerHTML=`<div class="res-flex">
        <strong>${edu.Institution || "Borcelle University"} ${edu.Location || "location "} </strong>
        <span>${edu.StartYear} - ${edu.EndYear}</span>
      </div>
      <p class="sub">${edu.Certification || "Bachelor of Science in Business Administration"} | ${edu.Study || "Study"} </p>
      <p class="edu-desc">
      ${edu.Coursework || "Relevant Coursework: Project Management, Operations, Data Analysis, Leadership"}
        
      </p>
       <p class="edu-desc">
      ${edu.Grade || "Grade"}
        
      </p>
      `
      R_edu.appendChild(div)
    })

    //skills

    let skillbox =document.querySelector("#r_skills")
    skillbox.innerHTML=""

    resume.skills.forEach(function(re){

      let div=document.createElement("div")
      div.className="skill-block"

      let skillsarr=re.skills.split(",")
      let listarr=skillsarr.map(function(sk){
       return `<li>${sk}</li>`
      })
     let finalList = listarr.join("")

      div.innerHTML=`      
      <p class="skill-title">${re.Category} <span>${re.Proficiency}</span></p>
      <ul>
       ${finalList}
      </ul>`

      skillbox.append(div)

    })

    //honors

    let showhonors=document.querySelector("#r_honor")
    showhonors.innerHTML=""

    resume.honors.forEach((h)=> 
     {let div=document.createElement("div")
      div.className="honor-item";
      div.innerHTML=
      `
          <div class="honor-flex">
            <span class="honor-title">${h.Award}</span>
            <span class="honor-year">${h.Year}</span>
          </div>

          <div class="honor-org">
            ${h.Organisation} • ${h.Category}
          </div>

          <div class="honor-desc">
            ${h.description}
          </div>
          <div class="honor-desc">
            ${h.Certification}
          </div>
    `

        showhonors.append(div)

  }

  )


}




let viewBtn = document.querySelector(".download-btn");
let modal = document.getElementById("resumeModal");
let closeBtn = document.getElementById("closeResume");
let container = document.querySelector(".container");


// OPEN
viewBtn.addEventListener("click", function () {
    fillResume(resume); 
  modal.classList.add("active");
  container.classList.add("blur");

//   fillResume(); // 🔥 data show karega
});

// CLOSE
closeBtn.addEventListener("click", function () {
  modal.classList.remove("active");
  container.classList.remove("blur");
});
console.log(resume.contactlist)

console.log(resume.skills)