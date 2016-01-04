/**
 * Created by oleksandr on 04.01.16.
 */
$(function(){
    renderNewTable();
});

function renderNewTable(){
    var tableStart = '<table id="tableOne">';
    var tableRows = '';
    var tableEnd = '</tr></table>';
    for (var i = 1; i < 101; i++){
        if (parseFloat((i-1)/10) == parseInt((i-1)/10)){
            tableRows += '<tr><td>' + i + '</td>';
        }
        else if (parseFloat(i/10) == parseInt(i/10)){
            tableRows += '<td>' + i + '</td></tr>';
        }
        else{
            tableRows += '<td>' + i + '</td>';
        }
    }
    var tableRender = tableStart + tableRows + tableEnd;
    $('#tableOne').html(tableRender);
}