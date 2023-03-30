function getPageList(totalPages, page, maxLength) {
    function range(start, end) {
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    }
  
    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  
    if (totalPages <= maxLength) {
      return range(1, totalPages);
    }
  
    if (page <= maxLength - sideWidth - 1 - rightWidth) {
      return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }
    if (page >= totalPages - sideWidth - 1 - rightWidth) {
      return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }
    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
  }
  
  $(function() {
    var numberOfItems = $(".products").length;
    var limitPerPage = 1;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 6;
    var currentPage;
  
    function showPage(whichPage) {
      if (whichPage < 1 || whichPage > totalPages) return false;
      currentPage = whichPage;
      $(".products").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
  
      $(".pagination li.current-page").removeClass("active");
      $(".pagination li.current-page").filter(function() {
        return $(this).text() == currentPage;
      }).addClass("active");
  
      $(".prev-b").toggleClass("disable-pagi", currentPage === 1);
      $(".next-b").toggleClass("disable-pagi", currentPage === totalPages);
  
      return true;
    }
  
    $(".products").show();
    showPage(1);


  
    $(document).on("click", ".pagination li.current-page:not(.active)", function() {
      return showPage(+$(this).text()) , change(currentPage) , window.scrollTo(0,0);
      
    });
  
    $(".next-b").on("click", function() {
      if (currentPage < totalPages) {
        showPage(currentPage + 1);
        change(currentPage);
        window.scrollTo(0, 0);
      }
    });
  
    $(".prev-b").on("click", function() {
      if (currentPage > 1) {
        showPage(currentPage - 1);
        change(currentPage);
        window.scrollTo(0, 0);

      }
    })
  });
  
  function change(page) {
    if (page == 1) {
      document.querySelector(".pagi-re").innerHTML = "1-12";
      $(".body").removeClass("top");
    }
    if (page == 2) {
      document.querySelector(".pagi-re").innerHTML = "13-24";
      $(".body").removeClass("top");

    }
    if (page == 3) {
      document.querySelector(".pagi-re").innerHTML = "25-30";
      $(".body").addClass("top");

    }
    

  }
  