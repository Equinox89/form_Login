$(document).ready(function () {
	/*Таби на JS*/
	$(".dws-form").on("click", ".tab", function(){
		//Видаляємо класи Active
		$(".dws-form").find(".active").removeClass("active");



		//Добавляємо клас active
		$(this).addClass('active');

		$(".tab-form").eq($(this).index()).addClass("active");
	});
});