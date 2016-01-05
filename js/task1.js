/**
 * Created by oleksandr on 04.01.16.
 */
$(function(){
    renderNewTable();
});

function renderNewTable(){
    var tableStart = '<table id="tableOne">';
    var tableRows = '';
    var tableEnd = '</table>';
    for (var i = 1; i <= 10; i++){
        tableRows += '<tr>';
        for (var k = 1; k <= 10; k++){
            var tdColour = '';
            var count = ((i-1)*10+k);
            if (count%3 == 0){
                tdColour = 'tdYellow';
            }
            else if (count%2 != 0){
                tdColour = 'tdRed';
            }
            tableRows += '<td class="' + tdColour + '">' + count + '</td>';
        }
    }
    var tableRender = tableStart + tableRows + tableEnd;
    $('#tableOne').html(tableRender);
}