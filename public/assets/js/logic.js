// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      
      console.log(id)

      var eat = {
        devoured: 1
      };
      
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eat
      }).then(
        function() {
          console.log("Updating burger devoured!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var burger = {
        newburger: $("#newburger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: burger
      }).then(
        function() {
          console.log("burger sent");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  //   $(".delete-cat").on("click", function(event) {
  //     var id = $(this).data("id");
  
  //     // Send the DELETE request.
  //     $.ajax("/api/burgers/" + id, {
  //       type: "DELETE",
  //     }).then(
  //       function() {
  //         console.log("deleted cat", id);
  //         // Reload the page to get the updated list
  //         location.reload();
  //       }
  //     );
  //   });
  // });
  