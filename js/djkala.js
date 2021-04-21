$(document).ready(function() {

    $(".off").click(function() {
        if ($(".on").hasClass('active')) {
            $(".on").removeClass('active')
            $("#mychek").attr('checked', false);
            $(".off").animate({
                right: "15px"
            }, )

        } else {
            $("#mychek").attr('checked', true);
            $(".on").addClass('active')
            $(".off").animate({
                right: "-1px"
            }, 400)

        }
    });

    $(".list").click(function() {
        if ($("#mylistgroup").hasClass('gaallary')) {
            $("#mylistgroup").removeClass('gaallary')
            $("#mylistgroup").addClass('list-group')
        } else {

        }
    });

    $(".gallary").click(function() {
        if ($("#mylistgroup").hasClass('list-group')) {
            $("#mylistgroup").removeClass('list-group')
            $("#mylistgroup").addClass('gaallary')
        } else {

        }
    });

    $('.select-box').click(function() {

        $('ul', this).slideToggle(100);

        if ($('#myarrow').hasClass('arrow')) {
            $('#myarrow').removeClass('arrow')
            $('#myarrow').addClass('arrow-rotate')


        } else {
            $('#myarrow').removeClass('arrow-rotate')
            $('#myarrow').addClass('arrow')


        }
    });

    $('.select-box ul li').click(function() {
        var mayText = $(this).text();
        $(this).parents('.select-box').find('.span span').text(mayText);

    });

    $('.tab-propertis .nav-link').click(function() {
        $('.tab-propertis .nav-link').removeClass('active');
        $('.tab-content .tab-pane').fadeOut(100)
        $(this).addClass('active');
        var index = $(this).index();
        $('.tab-content .tab-pane').eq(index).fadeIn(100)
    });
});