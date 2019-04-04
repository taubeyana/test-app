$(document).ready(function () {
    var countContacts = 0;

    $(".openMenu").click(function () {
        if ($("nav").hasClass("open")) {
            $("nav ul").hide();
            $("header h1").show();
            $("nav").removeClass("open");
           
            $(".openMenu").removeClass("glyphicon-remove-sign");
            $(".openMenu").addClass("glyphicon-option-vertical");
        }
        else {
            $("nav").addClass("open");
            $("nav ul").show();
            $("header h1").hide();
            $(".openMenu").removeClass("glyphicon-option-vertical");
            $(".openMenu").addClass("glyphicon-remove-sign");
        }
    });

    $("#selectedContacts").click(function () {
        $(".showAllContacts").hide();
        $(".showSelectedContacts").show();
        $(this).addClass("selected");
        $("#allContacts").removeClass("selected");
    });
    
    $("#allContacts").click(function () {
        $(".showAllContacts").show();
        $(".showSelectedContacts").hide();
        $(this).addClass("selected");
        $("#selectedContacts").removeClass("selected");
    });

    $(".styleList li").each(function () {
        
        $(this).click(function () {
            $(".styleList li").children(".radio-option").removeClass("selected");
            
            $(this).children(".radio-option").addClass("selected");
            if (checkIfSelected() == true) {
                $(".btnStyle").removeClass("disabled");
            }
            else {
                $(".btnStyle").addClass("disabled")
            }
        });
    });



    $(".previewList li").each(function () {

        $(this).click(function () {
            $(".previewList li").children(".radio-option").removeClass("selected");
            $(this).children(".radio-option").addClass("selected");
        });
    });
    
    $(".contactsList li").each(function () {
        $(this).click(function () {
            countContacts = 0;
            $(".showSelectedContacts ul").empty();
            $(".showSelectedContacts ul").append("<li class='noSelected'>No Selected Contacts</li>");
            $(".contactsList li input[type='checkbox']").each(function () {
                if ($(this).is(':checked')) {
                    countContacts++;                    
                    $(".showSelectedContacts ul").append("<li>"+$(this).val()+"</li>");
                }            
            });
            
            if (countContacts>0) {
                $(".noSelected").hide();
            }
            else {
                $(".noSelected").show();
            }

            $("#selectedContacts .numOfSelected").html(countContacts);

            if (countContacts>0) {
                $(".btnStyle").removeClass("disabled");
            }
            else {
                $(".btnStyle").addClass("disabled")
            }
        });
    });


    function checkIfSelected() {
        var countLiSelected = 0;
        $(".styleList li").each(function () {
            if ($(this).children(".radio-option").hasClass("selected")) {
                countLiSelected++;
            }
        });
        if (countLiSelected > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    $("#nextStep").click(function () {
        if (checkIfSelected() == true) {
            window.location.href = "chooseContacts.html";
        }
        
    });

    $("#chooseContactsBtn").click(function () {
        if (countContacts > 0) {
            window.location.href = "generate.html";
        }
    });
    
    $("#previewBtn").click(function () {
        window.location.href = "preview.html";
    });
    if ($(".container").children().hasClass("buttomBtns") == true) {
        $(".container").css({ "display": "flex", "height": "calc(100vh - 60px)", "flex-direction": "column" });
    }
});