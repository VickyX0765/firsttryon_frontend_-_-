function findJobs() {

    var box, option, skills, regexFormat, table, tbody, tr, td, i, txtValue, txtValues, display;
    skills = []
    table = document.getElementById("table-container-table");
    tbody = table.getElementsByTagName("tbody")[0];
    tr = tbody.getElementsByTagName("tr");
    box = document.getElementById("multiselect2_to");
    option = box.getElementsByTagName("option")
    if (option.length <= 0) {
        return
    }

    for (var i=0; i<option.length; i++) {
        skills.push(option[i].value);
    }

    regexFormat = "^.*(" + skills.join("|") + ")+.*$"


    for (i = 0; i < tr.length; i++) {
      display = "none";
      td = tr[i].getElementsByTagName("td")[5];
      if (td) {
        txtValue = (td.textContent || td.innerText).toLowerCase();
        if (txtValue.match(regexFormat)){
            display = ""
        }
        tr[i].style.display = display;
        if (display == "none"){
            tr[i].style.color = "black";
            $(tr[i]).hide()
        }
      }
    }
    $(document).ready(()=>{
        $("#maxRows").val('1000');
    });
}

function clearFilter(){
    var table, tbody, tr;
    table = document.getElementById("table-container-table");
    tbody = table.getElementsByTagName("tbody")[0];
    tr = tbody.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        tr[i].style.display = "display";
        $(tr[i]).show()
     }
    $(document).ready(()=>{
        $("#maxRows").val('1000');
    });
}