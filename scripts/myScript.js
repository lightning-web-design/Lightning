


function showHome() {
    $("#homeTab").attr("class", "aSelected lightBoxShadowed");
    $("#workTab").attr("class", "");
    $("#contactTab").attr("class", "");

    $("#work").hide("normal", function () {
        $("#contact").hide("normal", function () {
            $("#home").show("normal");
        });
    });
}

function showServices() {
    $("#workTab").attr("class", "aSelected lightBoxShadowed");
    $("#homeTab").attr("class", "");
    $("#contactTab").attr("class", "");

    $("#home").hide("normal", function () {
        $("#contact").hide("normal", function () {
            $("#work").show("normal");
        });
    });
}

function showContact() {
    $("#contactTab").attr("class", "aSelected lightBoxShadowed");
    $("#homeTab").attr("class", "");
    $("#workTab").attr("class", "");

    $("#home").hide("normal", function () {
        $("#work").hide("normal", function () {
            $("#contact").show("normal");
        });
    });
}

function toggleGraphicInfo(){
    $("#graphicInfo").toggle("fast");
    console.log($("#graphicInfo").children(".button"));
}
function toggleDesignInfo(){
    $("#designInfo").toggle("fast");
}
function toggleHostingInfo(){
    $("#hostingInfo").toggle("fast");
}
function toggleDevelopmentInfo(){
    $("#developmentInfo").toggle("fast");
}
function toggleSupportInfo(){
    $("#supportInfo").toggle("fast");
}
function toggleTechnologiesInfo(){
    $("#technologiesInfo").toggle("fast");
}

function clickBronzeBox(){
    $("#messageArea").val(bronzeText);
    showContact();
}
function clickSilverBox(){
    $("#messageArea").val(silverText);
    showContact();
}
function clickGoldBox(){
    $("#messageArea").val(goldText);
    showContact();
}