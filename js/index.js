function situacao(p, a, s){
    s = Number(p) / (Number(a)**2);
    if(s < 18.5){
        s = "Magreza";
    }else if(s <= 24.9){
        s = "Normal";
    }else if(s <= 29.9){
        s = "Sobrepeso";
    }else if(s <= 34.9){
        s = "Obesidade I";
    }else if(s <= 39.9){
        s = "Obesidade II";
    }else if(s >= 40){
        s = "Obesidade III";
    }
    return s;
}

const addRow = document.getElementById("addRow");
const modal_add = document.getElementById("modal_add");
const closeModalAdd = document.getElementById("closeModalAdd");

function changeModalView(){
    modal_add.classList.toggle("inativo");
}

addRow.addEventListener("click", changeModalView);
closeModalAdd.addEventListener("click", changeModalView);



const tbody = document.querySelector("tbody#tabela");
const inp_tbl = document.querySelectorAll("input.inp_tbl");
const saveRow = document.getElementById("saveRow");
let inp_tbl_v = [];

const validations_inp = document.querySelectorAll("div.validation");

function validation(){

    inp_tbl.forEach((e,q)=>{ 
        if(e.value){
            inp_tbl_v[q] = e.value;
        } else{
            validations_inp[q].classList.remove("inativo");
        }
    });

    function createRow(){
        tbody.appendChild(document.createElement("tr"));

        inp_tbl_v.forEach((e)=>{
            tbody.lastElementChild.appendChild(document.createElement("td"));
            tbody.lastElementChild.lastElementChild.textContent = e;
        });

        tbody.lastElementChild.appendChild(document.createElement("td"));
        tbody.lastElementChild.lastElementChild.textContent = (Number(inp_tbl_v[1])/(Number(inp_tbl_v[2])**2)).toFixed(2);
        tbody.lastElementChild.appendChild(document.createElement("td"));
        tbody.lastElementChild.lastElementChild.textContent = situacao(Number(inp_tbl_v[1]), Number(inp_tbl_v[2]), undefined);
    }

    

    return true;
}

saveRow.addEventListener("click",()=>{
    validation();
});