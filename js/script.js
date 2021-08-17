(function($){
    // $(".validateForm").validate();
    var availablePostcode = [
        "1745 - Mazenzele",
        "1745 - Opwijk",
        "1840 - Londerzeel",
        "1840 - Malderen",
        "1840 - Steenhuffel"
    ];
    $( "#postcode" ).autocomplete({
        source: availablePostcode
    });

    var unavailableDates = ["9-6-2020","14-6-2020","15-6-2020"];
    function unavailable(date) {
        dmy = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
        if ($.inArray(dmy, unavailableDates) != -1) {
            return [false,"","unAvailable"];
        } else {
            return [true, "","Available"];
        }
    }

    $("#datepicker").datepicker({
        minDate: new Date(),
        dayNamesMin: [ "ZO", "MA", "DI", "WO", "DO", "VR", "ZA" ],
        dayNames: [ "Zondag", "Maandag ", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag" ],
        monthNamesShort: [ "Jan", "Febr", "Mrt", "Apr", "Mei", "Juni", "Juli", "Aug", "Sep", "Okt", "Nov", "Dec" ],
        monthNames: [ "januari", "Februari ", "Maart ", "April ", "Mei", "Juni", "Juli", "Augustus ", "September ", "Oktober ", "November ", "December" ],
        firstDay: 1,
        beforeShowDay: unavailable,
        onSelect: function(date) {
            console.log(date);
            $(".selected_date").val(date);


            var date_in_different_format = $.datepicker.formatDate('DD, MM d, yy', $( "#datepicker" ).datepicker('getDate'));
            console.log(date_in_different_format);
            $("#show_selected_date").text(date_in_different_format);
            $(".time_box").show();
        },
    });

    $(".delivery_option_input").on("click", function () {
        $(".address_data, .collection_point").hide();
        if ($(this).val() === "home"){
            $(".collection_point").hide();
            $(".address_data").show();
        }else{
            $(".address_data").hide();
            $(".collection_point").show();
        }
    });

    $("#invoice").on("click",function () {
        if ($(this).is(":checked")){
            $('.billing_info').show();
        }else{
            $('.billing_info').hide();
        }
    });


})(jQuery);

function next(selector,step) {
    $('.step_body').hide();
    $(selector).show();
    $('.progress_step').removeClass("active");
    $('.progress_step:eq(' + step + ')').addClass("active");
}
function prev(selector,step) {
    $('.step_body').hide();
    $(selector).show();
    $('.progress_step').removeClass("active");
    $('.progress_step:eq(' + step + ')').addClass("active");
}