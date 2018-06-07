$(document).foundation()

$('[data-toggle-dia]').click(function (ev){
	const panel = $(this).data('toggleDia')
	$('#lineup-tabs').foundation('selectTab', panel)
})
const $sticky = $('#sticky')
const $offcanvas = $('#offcanvas')
$offcanvas.find('li').click( function (ev){
	$offcanvas.foundation('close')
	setTimeout(function(){
		$sticky.css('left', '0px')
	}, 100)
	
})