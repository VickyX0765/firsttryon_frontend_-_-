function findSkills() {
    const map = new Map();

    map.set('1624', ["python", "sql"]);
    map.set('1628', ["python", "aws"]);
    map.set('1070', ["python"]);
    map.set('1080', ["python"]);
    var input, option, courses, skills, skillbox, remaining, des, toUpdate;
    skills = new Set();
    input = document.getElementById("multiselect_to");
    option = input.getElementsByTagName("option");
    if (option.length <= 0) {
        return;
    }

    for (var i=0; i<option.length; i++) {
        var courseVal = option[i].value;
        var courseSkill = map.get(courseVal);
        courseSkill.forEach(skills.add, skills);
    }
    skillbox = document.getElementById("multiselect2");
    remaining = skillbox.getElementsByTagName("option");
    toUpdate = []
    for (var i=0; i<remaining.length; i++){
        var skillName = remaining[i].value;
        if (skills.has(skillName)){
            toUpdate.push(remaining[i])
        }
    }

    toUpdate.forEach(update)
}
function update(item){
   $("#multiselect2_to").append(item);
}