var pageMuted = true;
var currentPageNumber = 1;
lastBGImage = "url(img/sample1.jpg)";
var waypoint = [];
const pageWindow = document.querySelector('.window');
var pages = [
  { pageNumber: 1,
    pageID: ".scroll-1",
    pageType: "image",
    imageSource: "url('img/vince1.jpg')",
  },
  { pageNumber: 2,
    pageID: ".scroll-2",
    pageType: "image",
    imageSource: "url('img/vince2.jpg')",
  },
  { pageNumber: 3,
    pageID: ".scroll-3",
    pageType: "image",
    imageSource: "url('img/vince3.jpg')",
  },
  {
    pageNumber: 4,
    pageID: ".scroll-4",
    pageType: "image",
    imageSource: "url('img/vince4.jpg')",
  }
]

function generateWaypoint(currentPage, waypointname, imageURL, number){
    waypointname = new Waypoint({
    element: document.querySelector(currentPage),
    handler: function(){
      // console.log("waypoint page number is, " + number);
      // console.log("current page number is, " + (currentPageNumber));
      // console.log("the last BG image is " + lastBGImage);

      if (number == (currentPageNumber + 1)) {
        console.log("function 1 triggered");
        lastBGImage = document.querySelector('.window').style.backgroundImage;
        document.querySelector('.window').style.backgroundImage = imageURL;
        currentPageNumber = number;
        console.log("the current page number is " + currentPageNumber);
      }
      else{
        console.log("function 2 triggered");
        if(currentPageNumber != 1){
        currentPageNumber += -1
        document.querySelector('.window').style.backgroundImage = pages[currentPageNumber - 1].imageSource;

        }
        console.log("the current page number is " + currentPageNumber);

    }
  }
  })
}


function displayScroll(pageList){
  for(page of pageList){
    generateWaypoint(page.pageID, page.pageID, page.imageSource, page.pageNumber);

  }

}
