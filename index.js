$(document).ready(function () {
    $("#submit").click(function () {
        var searchWords = $("#termInput").val();
        $.ajax({
            type: "GET",
            url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchWords + "&limit=15&namespace=0&format=json",
            dataType: 'jsonp',
            success: function (data) {
                $('#results').html("");
                for (var i = 0; i < data[1].length; i++) {
                    $('#results').append("<li class='list-group-item list-result-style'> <a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                }
                $("#termInput").val("");
            },
            error: function (error) {
                console.error(error);
            }

        });

    })
    $("#termInput").keypress(function (e) {
        if (e.which == 13) {
            $("#submit").click();
        }
    })
})