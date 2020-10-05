$(function () {
  var detailsHeight;

  $(document).ready(function () {
    detailsHeight = $("#exportCoachingDetails").height();
    $("#verticalMenu").css("height", detailsHeight);

    $("#exportCapacityDetails").hide();
    $("#logisticDetails").hide();
    $("#electionDetails").hide();
    $("#powwowDetails").hide();
    $("#module3Details").hide();
    $("#module2Details").hide();
    $("#module1Details").hide();
    $("#psdpDetails").hide();
    $("#vocDetails").hide();
    $("#roundTableDetails").hide();

    $("#navExportCapacity").click(function () {
      detailsHeight = $("#exportCapacityDetails").height();
      $("#verticalMenu").css("height", detailsHeight);

      $("#exportCoachingDetails").hide();
      $("#logisticDetails").hide();
      $("#electionDetails").hide();
      $("#powwowDetails").hide();
      $("#module3Details").hide();
      $("#module2Details").hide();
      $("#module1Details").hide();
      $("#psdpDetails").hide();
      $("#vocDetails").hide();
      $("#roundTableDetails").hide();
      $("#exportCapacityDetails").show();
    });

    $("#navLogisticSeminar").click(function () {
      detailsHeight = $("#logisticDetails").height();
      $("#verticalMenu").css("height", detailsHeight);

      $("#exportCapacityDetails").hide();
      $("#exportCoachingDetails").hide();
      $("#electionDetails").hide();
      $("#powwowDetails").hide();
      $("#module3Details").hide();
      $("#module2Details").hide();
      $("#module1Details").hide();
      $("#psdpDetails").hide();
      $("#vocDetails").hide();
      $("#roundTableDetails").hide();
      $("#logisticDetails").show();
    });

    $("#navPhilElection").click(function () {
      detailsHeight = $("#electionDetails").height();
      $("#verticalMenu").css("height", detailsHeight);

      $("#exportCapacityDetails").hide();
      $("#exportCoachingDetails").hide();
      $("#logisticDetails").hide();
      $("#powwowDetails").hide();
      $("#module3Details").hide();
      $("#module2Details").hide();
      $("#module1Details").hide();
      $("#psdpDetails").hide();
      $("#vocDetails").hide();
      $("#roundTableDetails").hide;
      $("#electionDetails").show();
    });

    $("#navPowwow").click(function () {
      detailsHeight = $("#powwowDetails").height();
      $("#verticalMenu").css("height", detailsHeight);

      $("#exportCapacityDetails").hide();
      $("#exportCoachingDetails").hide();
      $("#logisticDetails").hide();
      $("#electionDetails").hide();
      $("#module3Details").hide();
      $("#module2Details").hide();
      $("#module1Details").hide();
      $("#psdpDetails").hide();
      $("#vocDetails").hide();
      $("#roundTableDetails").hide();
      $("#powwowDetails").show();
    });

    $("#navModule3").click(function () {
      detailsHeight = $("#module3Details").height();
      $("#verticalMenu").css("height", detailsHeight);

      $("#exportCapacityDetails").hide();
      $("#exportCoachingDetails").hide();
      $("#logisticDetails").hide();
      $("#electionDetails").hide();
      $("#powwowDetails").hide();
      $("#module2Details").hide();
      $("#module1Details").hide();
      $("#psdpDetails").hide();
      $("#vocDetails").hide();
      $("#roundTableDetails").hide();
      $("#module3Details").show();
    });

    $("#navModule2").click(function () {
      detailsHeight = $("#module2Details").height();
      $("#verticalMenu").css("height", detailsHeight);

      $("#exportCapacityDetails").hide();
      $("#exportCoachingDetails").hide();
      $("#logisticDetails").hide();
      $("#electionDetails").hide();
      $("#powwowDetails").hide();
      $("#module3Details").hide();
      $("#module1Details").hide();
      $("#psdpDetails").hide();
      $("#vocDetails").hide();
      $("#roundTableDetails").hide();
      $("#module2Details").show();
    });

    $("#navModule1").click(function () {
      detailsHeight = $("#module1Details").height();
      $("#verticalMenu").css("height", detailsHeight);

      $("#exportCapacityDetails").hide();
      $("#exportCoachingDetails").hide();
      $("#logisticDetails").hide();
      $("#electionDetails").hide();
      $("#powwowDetails").hide();
      $("#module3Details").hide();
      $("#module2Details").hide();
      $("#psdpDetails").hide();
      $("#vocDetails").hide();
      $("#roundTableDetails").hide();
      $("#module1Details").show();
    });

    $("#navPSDP").click(function () {
      detailsHeight = $("#psdpDetails").height();
      $("#verticalMenu").css("height", detailsHeight);

      $("#exportCapacityDetails").hide();
      $("#exportCoachingDetails").hide();
      $("#logisticDetails").hide();
      $("#electionDetails").hide();
      $("#powwowDetails").hide();
      $("#module3Details").hide();
      $("#module2Details").hide();
      $("#vocDetails").hide();
      $("#roundTableDetails").hide();
      $("#module1Details").hide();
      $("#psdpDetails").show();
    });

    $("#navVOC").click(function () {
      detailsHeight = $("#vocDetails").height();
      $("#verticalMenu").css("height", detailsHeight);

      $("#exportCapacityDetails").hide();
      $("#exportCoachingDetails").hide();
      $("#logisticDetails").hide();
      $("#electionDetails").hide();
      $("#powwowDetails").hide();
      $("#module3Details").hide();
      $("#module2Details").hide();
      $("#module1Details").hide();
      $("#psdpDetails").hide();
      $("#roundTableDetails").hide();
      $("#vocDetails").show();
    });

    $("#navRoundTable").click(function () {
      detailsHeight = $("#roundTableDetails").height();
      $("#verticalMenu").css("height", detailsHeight);

      $("#exportCapacityDetails").hide();
      $("#exportCoachingDetails").hide();
      $("#logisticDetails").hide();
      $("#electionDetails").hide();
      $("#powwowDetails").hide();
      $("#module3Details").hide();
      $("#module2Details").hide();
      $("#module1Details").hide();
      $("#psdpDetails").hide();
      $("#vocDetails").hide();
      $("#roundTableDetails").show();
    });
  });
});
