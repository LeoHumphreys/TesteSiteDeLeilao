$(".cpf, #cpf").mask("000.000.000-00");$(".cnpj, #cnpj").mask("00.000.000/0000-00");$(".cep, #cep").mask("00.000-000");$("input[type=tel], .telefone").mask("(00) 0000-00000");$('input.date').mask("00/00/0000");$('input.hora').mask("00:00");$("input.date").mask("00/00/0000").datepicker();$(".date").mask("00/00/0000");$(".placa").mask("SSS 0000");$(".cartao_numero").mask("0000 0000 0000 0000");$('.cartao_validade').mask("00/00")
$('.cartao_cvv').mask("000")
$(".preco").each(function(){$limit=$(this).attr('limit')?parseInt($(this).attr('limit')):'';$casas=$(this).attr('casas')?parseInt($(this).attr('casas')):2;$(this).priceFormat({prefix:'',centsSeparator:'.',thousandsSeparator:'',limit:$limit,centsLimit:$casas,});});$(".preco1").each(function(){$limit=$(this).attr('limit')?parseInt($(this).attr('limit')):8;$casas=$(this).attr('casas')?parseInt($(this).attr('casas')):2;$(this).priceFormat({prefix:'',centsSeparator:',',thousandsSeparator:'.',limit:$limit,centsLimit:$casas,});});