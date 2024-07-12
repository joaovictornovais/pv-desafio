var table = $("#verbas").DataTable();

$("#btn-limpar").click(function () {
    $("#acao").val("0");
    $("#data-prevista").val("");
    $("#investimento-previsto").val("");
})

$("#btn-adicionar").click(function () {
    var novaVerba = [
        $("#acao").val(),
        formatarData($("#data-prevista").val()),
        'R$ ' + Number($("#investimento-previsto").val()).toFixed(2).replace('.', ','),
        '<td style="text-align: center;" class="text-center"><i class="bi bi-pencil-fill text-primary"></i></td>',
        '<td style="text-align: center;" class="text-center"><i class="bi bi-x-lg text-danger"></i></td>'
    ];
    table.row.add(novaVerba).draw();
})

function formatarData(data) {
    let partes = data.split('-');
    let ano = partes[0];
    let mes = partes[1];
    let dia = partes[2];

    return dia + '/' + mes + '/' + ano
}