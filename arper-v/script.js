var area_frame = document.getElementById("area");
var per_frame = document.getElementById("perimeter");
var vol_frame = document.getElementById("volume");
var per_shapes = document.getElementById("per_shapes");
var per_sq = document.getElementById("per_sq");
var per_rect = document.getElementById("per_rect");
var per_tri = document.getElementById("per_tri");
var per_oval = document.getElementById("per_oval");
var per_pent = document.getElementById("per_pent");
var per_hex = document.getElementById("per_hex");
var per_cir_full = document.getElementById("per_cir_full");
var per_cir_semi = document.getElementById("per_cir_semi");
var per_cir_quarter = document.getElementById("per_cir_quarter");
var per_cir_custom = document.getElementById("per_cir_custom");
var per_cube = document.getElementById("per_cube");
var per_cuboid = document.getElementById("per_cuboid");
var per_tetrahedron = document.getElementById("per_tetrahedron");
var per_pyramid = document.getElementById("per_pyramid");
var vol_cube = document.getElementById("vol_cube");
var vol_cuboid = document.getElementById("vol_cuboid");
var vol_tetra = document.getElementById("vol_tetra");
var vol_pyramid = document.getElementById("vol_pyramid");
var vol_ball = document.getElementById("vol_ball");
var vol_cylinder = document.getElementById("vol_cylinder");
var null_dialog = document.getElementById("null_dialogue");

var pi = 3.14;
var ids = [
    "ash_sq_len","ash_sq_ans",
    "ash_rect_len","ash_rect_bred","ash_rect_ans",
    "ash_tri_len","ash_tri_hei","ash_tri_ans",
    "ash_oval_r1","ash_oval_r2","ash_oval_ans",
    "ash_pent_len","ash_pent_ans",
    "ash_hex_len","ash_hex_ans",
    "ash_cir_full_r","ash_cir_full_ans",
    "ash_cir_semi_r","ash_cir_semi_ans",
    "ash_cir_quarter_r","ash_cir_quarter_ans",
    "ash_cir_custom_r","ash_cir_custom_ang","ash_cir_custom_ans",
    "aso_cube_len","aso_cube_ans",
    "aso_cuboid_len","aso_cuboid_bred","aso_cuboid_hei","aso_cuboid_ans",
    "aso_tetra_len","aso_tetra_ans",
    "aso_pyramid_len","aso_pyramid_hei","aso_pyramid_ans",
    "aso_ball_r","aso_ball_ans",
    "aso_cylinder_r","aso_cylinder_hei","aso_cylinder_ans",
    "psh_sq_len","psh_sq_ans",
    "psh_rect_len","psh_rect_bred","psh_rect_ans",
    "psh_tri_len","psh_tri_ans",
    "psh_oval_r1","psh_oval_r2","psh_oval_ans",
    "psh_pent_len","psh_pent_ans",
    "psh_hex_len","psh_hex_ans",
    "psh_cir_full_r","psh_cir_full_ans",
    "psh_cir_semi_r","psh_cir_semi_arc","psh_cir_semi_ans",
    "psh_cir_quarter_r","psh_cir_quarter_arc","psh_cir_quarter_ans",
    "psh_cir_custom_r","psh_cir_custom_ang","psh_cir_custom_arc","psh_cir_custom_ans",
    "pso_cube_len","pso_cube_ans",
    "pso_cuboid_len","pso_cuboid_bred","pso_cuboid_hei","pso_cuboid_ans",
    "pso_tetra_len","pso_tetra_ans",
    "pso_pyramid_len","pso_pyramid_hei","pso_pyramid_ans",
    "vol_cube_len","vol_cube_ans",
    "vol_cuboid_len","vol_cuboid_bred","vol_cuboid_hei","vol_cuboid_ans",
    "vol_tetra_len","vol_tetra_ans",
    "vol_pyramid_len","vol_pyramid_bred","vol_pyramid_hei","vol_pyramid_ans",
    "vol_ball_r","vol_ball_ans",
    "vol_cylinder_r","vol_cylinder_hei","vol_cylinder_ans",
    "nd_1","nd_2"
];

for (var idz=0;idz<ids.length;idz++) {
    document.getElementById(ids[idz])
};

function show(items) {
    items[0].style.width = "70vw";
    for (var x=1;x<items.length;x++) {
        items[x].style.visibility = "visible";
    };
};

function back(items) {
    items[0].style.width = "0vw";
    for (var x=1;x<items.length;x++) {
        items[x].style.visibility = "hidden";
    };
    var values = [
        ash_sq_ans,ash_sq_len,
        ash_rect_len,ash_rect_bred,ash_rect_ans,
        ash_tri_len,ash_tri_hei,ash_tri_ans,
        ash_oval_r1,ash_oval_r2,ash_oval_ans,
        ash_pent_len,ash_pent_ans,
        ash_hex_len,ash_hex_ans,
        ash_cir_full_r,ash_cir_full_ans,
        ash_cir_semi_r,ash_cir_semi_ans,
        ash_cir_quarter_r,ash_cir_quarter_ans,
        ash_cir_custom_r,ash_cir_custom_ang,ash_cir_custom_ans,
        aso_cube_len,aso_cube_ans,
        aso_cuboid_len,aso_cuboid_bred,aso_cuboid_hei,aso_cuboid_ans,
        aso_tetra_len,aso_tetra_ans,
        aso_pyramid_len,aso_pyramid_hei,aso_pyramid_ans,
        aso_ball_r,aso_ball_ans,
        aso_cylinder_r,aso_cylinder_hei,aso_cylinder_ans,
        psh_sq_len,psh_sq_ans,
        psh_rect_len,psh_rect_bred,psh_rect_ans,
        psh_tri_len,psh_tri_ans,
        psh_oval_r1,psh_oval_r2,psh_oval_ans,
        psh_pent_len,psh_pent_ans,
        psh_hex_len,psh_hex_ans,
        psh_cir_full_r,psh_cir_full_ans,
        psh_cir_semi_r,psh_cir_semi_arc,psh_cir_semi_ans,
        psh_cir_quarter_r,psh_cir_quarter_arc,psh_cir_quarter_ans,
        psh_cir_custom_r,psh_cir_custom_ang,psh_cir_custom_arc,psh_cir_custom_ans,
        pso_cube_len,pso_cube_ans,
        pso_cuboid_len,pso_cuboid_bred,pso_cuboid_hei,pso_cuboid_ans,
        pso_tetra_len,pso_tetra_ans,
        pso_pyramid_len,pso_pyramid_hei,pso_pyramid_ans,
        vol_cube_len,vol_cube_ans,
        vol_cuboid_len,vol_cuboid_bred,vol_cuboid_hei,vol_cuboid_ans,
        vol_tetra_len,vol_tetra_ans,
        vol_pyramid_len,vol_pyramid_bred,vol_pyramid_hei,vol_pyramid_ans,
        vol_ball_r,vol_ball_ans,
        vol_cylinder_r,vol_cylinder_hei,vol_cylinder_ans
    ];
    for (var y=0;y<values.length;y++) {
        values[y].value  = "";
    };
};

function ar_sq() {
    var length = ash_sq_len.value;
    if ((length==0) | (length=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = length*length;
        ash_sq_ans.value = area;
    }
};
function ar_rect() {
    var length = ash_rect_len.value;
    var breadth = ash_rect_bred.value;
    if ((length==0)|(length=="")|(breadth==0)|(breadth=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area =  length*breadth;
        ash_rect_ans.value = area;
    }
};
function ar_tri() {
    var length = ash_tri_len.value;
    var height = ash_tri_hei.value;
    if ((length==0)|(length=="")|(height==0)|(height=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = (length*height)/2;
        ash_tri_ans.value = area;
    }
};
function ar_oval() {
    var radius1 = ash_oval_r1.value;
    var radius2 = ash_oval_r2.value;
    if ((radius1==0)|(radius1=="")|(radius2==0)|(radius2=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = pi*radius1*radius2;
        ash_oval_ans.value = area;        
    }
};
function ar_pent() {
    var length = ash_pent_len.value;
    if ((length==0)|(length=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = (1/4)*((5*(5+2*(5**0.5)))**0.5)*(length**2);
        ash_pent_ans.value = area;        
    }
};
function ar_hex() {
    var length = ash_hex_len.value;
    if ((length==0)|(length=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = ((3*(3**0.5))/2)*(length**2);
        ash_hex_ans.value = area;
    }
};
function ar_cir_full() {
    var radius = ash_cir_full_r.value;
    if ((radius==0)|(radius=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = pi*radius*radius;
        ash_cir_full_ans.value = area;
    }
};
function ar_cir_semi() {
    var radius = ash_cir_semi_r.value;
    if ((radius==0)|(radius=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = (pi*radius*radius)/2;
        ash_cir_semi_ans.value = area;
    }
};
function ar_cir_quarter() {
    var radius = ash_cir_quarter_r.value;
    if ((radius==0)|(radius=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = (pi*radius*radius)/4;
        ash_cir_quarter_ans.value = area;
    }
};
function ar_cir_custom() {
    var radius = ash_cir_custom_r.value;
    var angle = ash_cir_custom_ang.value;
    if ((radius==0)|(radius=="")|(angle==0)|(angle=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        while (angle>360) {
            angle = angle-360;
            ash_cir_custom_ang.value = angle;
        }
        var area = (angle/360)*(pi*radius*radius);
        ash_cir_custom_ans.value = area;
    }
};
function ar_cube() {
    var length = aso_cube_len.value;
    if ((length==0)|(length=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = (length*length)*6;
        aso_cube_ans.value = area;
    }
};
function ar_cuboid() {
    var length = aso_cuboid_len.value;
    var breadth = aso_cuboid_bred.value;
    var height = aso_cuboid_hei.value;
    if ((length==0)|(length=="")|(breadth==0)|(breadth=="")|(height==0)|(height=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = ((length*breadth)+(length*height)+(breadth*height))*2;
        aso_cuboid_ans.value = area;
    }
};
function ar_tetra() {
    var length = aso_tetra_len.value;
    if ((length==0)|(length=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = ((length*((length**2)-((length/2)**2))**0.5)/2)*4;
        aso_tetra_ans.value = area;
    }
};
function ar_pyramid() {
    var length = aso_pyramid_len.value;
    var height = aso_pyramid_hei.value;
    if ((length==0)|(length=="")|(height==0)|(height=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = (length*length)+(2*length*((((length/2)*(length/2))+(height*height))**0.5));
        aso_pyramid_ans.value = area;        
    }
};
function ar_ball() {
    var radius = aso_ball_r.value;
    if ((radius==0)|(radius=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = 4*pi*(radius**2);
        aso_ball_ans.value = area;
    }
};
function ar_cylinder() {
    var radius = aso_cylinder_r.value;
    var height = aso_cylinder_hei.value;
    if ((radius==0)|(radius=="")|(height==0)|(height=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var area = (2*pi*(radius**2))+(2*pi*radius*height);
        aso_cylinder_ans.value = area;
    }
};

function per_sq_f() {
    var length = psh_sq_len.value;
    if ((length==0)|(length=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var perimeter = length*4;
        psh_sq_ans.value = perimeter;
    }
};
function per_rect_f() {
    var length = psh_rect_len.value;
    var breadth = psh_rect_bred.value;
    if ((length==0)|(length=="")|(breadth==0)|(breadth=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var perimeter = 2*length+2*breadth;
        psh_rect_ans.value = perimeter;
    }
};
function per_tri_f() {
    var length = psh_tri_len.value;
    if ((length==0)|(length=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var perimeter = length*3;
        psh_tri_ans.value = perimeter;
    }
};
function per_oval_f() {
    var radius1 = psh_oval_r1.value;
    var radius2 = psh_oval_r2.value;
    if ((radius1==0)|(radius1=="")|(radius2==0)|(radius2=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var perimeter = 2*pi*((((radius1**2)+(radius2**2))/2)**0.5);
        psh_oval_ans.value = perimeter;
    }
};
function per_pent_f() {
    var length = psh_pent_len.value;
    if ((length==0)|(length=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var perimeter = length*5;
        psh_pent_ans.value = perimeter;
    }
};
function per_hex_f() {
    var length = psh_hex_len.value;
    if ((length==0)|(length=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var perimeter = length*6;
        psh_hex_ans.value = perimeter;
    }
};
function per_cir_full_f() {
    var radius = psh_cir_full_r.value;
    if ((radius==0)|(radius=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var perimeter = 2*pi*radius;
        psh_cir_full_ans.value = perimeter;
    }
};
function per_cir_semi_f() {
    var radius = psh_cir_semi_r.value;
    if ((radius==0)|(radius=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var arc_length = (2*pi*radius)/2;
        psh_cir_semi_arc.value = arc_length;
        var perimeter = arc_length+(2*radius);
        psh_cir_semi_ans.value = perimeter;
    }
};
function per_cir_quarter_f() {
    var radius = psh_cir_quarter_r.value;
    if ((radius==0)|(radius=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var arc_length = (2*pi*radius)/4;
        psh_cir_quarter_arc.value = arc_length;
        var perimeter = arc_length+(2*radius);
        psh_cir_quarter_ans.value = perimeter;
    }
};
function per_cir_custom_f() {
    var radius = psh_cir_custom_r.value;
    var angle = psh_cir_custom_ang.value;
    if ((radius==0)|(radius=="")|(angle==0)|(angle=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        while (angle>360) {
            angle = angle-360;
            psh_cir_custom_ang.value = angle;
        }
        var arc_length = (angle/360)*(2*pi*radius);
        psh_cir_custom_arc.value = arc_length;
        var perimeter = arc_length+(2*radius);
        psh_cir_custom_ans.value = perimeter;
    }
};
function per_cube_f() {
    var length = pso_cube_len.value;
    if ((length==0)|(length=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var perimeter = length*12;
        pso_cube_ans.value = perimeter;
    }
};
function per_cuboid_f() {
    var length = pso_cuboid_len.value;
    var breadth = pso_cuboid_bred.value;
    var height = pso_cuboid_hei.value;
    if ((length==0)|(length=="")|(breadth==0)|(breadth=="")|(height==0)|(height=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var perimeter = (length*4)+(breadth*4)+(height*4);
        pso_cuboid_ans.value = perimeter;
    }
};
function per_tetra_f() {
    var length = pso_tetra_len.value;
    if ((length==0)|(length=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var perimeter = length*6;
        pso_tetra_ans.value = perimeter;
    }
};
function per_pyramid_f() {
    var length = pso_pyramid_len.value;
    var height = pso_pyramid_hei.value;
    if ((length==0)|(length=="")|(height==0)|(height=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var perimeter = (length*4)+(((((height**2)+(length/2)**2)**0.5)+(length/2)**2)**0.5)*4;
        pso_pyramid_ans.value = perimeter;
    }
};

function vol_cube_f() {
    var length = vol_cube_len.value;
    if ((length==0)|(length=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var volume = length**3;
        vol_cube_ans.value = volume;
    }
};
function vol_cuboid_f() {
    var length = vol_cuboid_len.value;
    var breadth = vol_cuboid_bred.value;
    var height = vol_cuboid_hei.value;
    if ((length==0)|(length=="")|(breadth==0)|(breadth=="")|(height==0)|(height=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var volume = length*breadth*height;
        vol_cuboid_ans.value = volume;
    }
};
function vol_tetra_f() {
    var length = vol_tetra_len.value;
    if ((length==0)|(length=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var volume = length**3/((2**0.5)*6);
        vol_tetra_ans.value = volume;
    }
};
function vol_pyramid_f() {
    var length = vol_pyramid_len.value;
    var breadth = vol_pyramid_bred.value;
    var height = vol_pyramid_hei.value;
    if ((length==0)|(length=="")|(breadth==0)|(breadth=="")|(height==0)|(height=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var volume = (1/3)*((length*breadth)*height)
        vol_pyramid_ans.value = volume;
    }
};
function vol_ball_f() {
    var radius = vol_ball_r.value;
    if ((radius==0)|(radius=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var volume = (4*pi*(radius**3))/3;
        vol_ball_ans.value = volume;
    }
};
function vol_cylinder_f() {
    var radius = vol_cylinder_r.value;
    var height = vol_cylinder_hei.value;
    if ((radius==0)|(radius=="")|(height==0)|(height=="")) {
        null_dialogue.style.height = "70vh";
        nd_1.style.visibility = "visible";
        nd_2.style.visibility = "visible";
    } else {
        var volume = pi*(radius**2)*height;
        vol_cylinder_ans.value = volume;
    }
};

function nd_back() {
    null_dialogue.style.height = "0vh";
    nd_1.style.visibility = "hidden";
    nd_2.style.visibility = "hidden";
};