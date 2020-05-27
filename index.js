function changeMode() {
    var checkBox = document.getElementById("checkBox");

    if (checkBox.checked == true) {

        var innerDivs = document.querySelectorAll(".inner-div");
        var dailyOverviewColumns = document.querySelectorAll(".daily-overview-columns");

        document.querySelector("body").style.background = "linear-gradient(to bottom, #F5F7FF 280px, #FFFFFF 280px, #FFFFFF)";
        document.querySelector("body").style.color = "#1E202A";

        for (count = 0; count < innerDivs.length; count++) {
            innerDivs[count].style.backgroundColor = "#F0F2FA"
        }
        
        for (count = 0; count < dailyOverviewColumns.length; count++) {
            dailyOverviewColumns[count].style.backgroundColor = "#F0F2FA"
        }
    } else {
        var innerDivs = document.querySelectorAll(".inner-div");
        var dailyOverviewColumns = document.querySelectorAll(".daily-overview-columns");

        document.querySelector("body").style.background = "linear-gradient(to bottom, #1F212E 280px, #1E202A 280px, #1E202A)";
        document.querySelector("body").style.color = "#F0F2FA";

        for (count = 0; count < innerDivs.length; count++) {
            innerDivs[count].style.backgroundColor = "#252A41"
        }
        
        for (count = 0; count < dailyOverviewColumns.length; count++) {
            dailyOverviewColumns[count].style.backgroundColor = "#252A41"
        }

    }
}

