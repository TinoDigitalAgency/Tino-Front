document.querySelectorAll('.popup-wrapper')
    .forEach(function ($wrap) {
        $wrap.addEventListener('click', function(){
            $wrap.hidden = true;
        });

        let $popups = $wrap.querySelectorAll('.popup');

        $popups.forEach(function ($popup) {
            $popup.addEventListener('click', function(e) {
                e.stopPropagation();
            });

            let $close = $popup
                .querySelector('.popup-close');
            if (!$close) {
                return;
            }
            $close.addEventListener('click', function(){
                $wrap.hidden = true;
            });
        })
    });