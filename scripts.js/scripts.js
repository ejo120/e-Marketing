

$(function() {
    var curPos = 0;
    var slider = $('.slider');
    var cntImages= slider.length;
    var sliderWidth = slider.width();
    $('#sliderWrapper').css('width', sliderWidth * cntImages);
    setInterval(SlideImage, 5000);
    
    function SlideImage() {
    if (curPos == cntImages - 1)
    curPos = 0;
    else
    curPos++;
    $('#sliderWrapper').animate({
    'marginLeft': sliderWidth * (-curPos)
    });
    }
    });