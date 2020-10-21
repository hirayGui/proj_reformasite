$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.datepicker').datepicker({
        disableWeekends: true
    });
    $('select').material_select();
    $('.tabs').tabs();
    $('textarea').characterCounter();
});

function validaForm(frm) {
    if (frm.nome.value == "" || frm.nome.value == null || frm.nome.value.lenght < 3) {
        alert("Insira o seu nome!");
        frm.nome.focus();
        return false;
    } else

    if (frm.email.value.indexOf("@") == -1 || frm.email.valueOf.indexOf(".") == -1 || frm.email.value == null) {
        alert("Insira um email válido!");
        frm.email.focus();
        return false;
    } else

    if (frm.cidade.value == "" || frm.cidade.value == null || frm.cidade.value.lenght < 3) {
        alert("Insira uma cidade!");
        frm.cidade.focus();
        return false;
    }
}