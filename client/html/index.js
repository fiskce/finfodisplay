/*
────────────────────────────────────────────────────────────────────────────────
─██████──██████─████████───██████──────────██████─████████████───██████████████─
─██░░██──██░░██─██░░░░██───██░░██████████──██░░██─██░░░░░░░░████─██░░░░░░░░░░██─
─██░░██──██░░██─████░░██───██░░░░░░░░░░██──██░░██─██░░████░░░░██─██░░██████████─
─██░░██──██░░██───██░░██───██░░██████░░██──██░░██─██░░██──██░░██─██░░██─────────
─██░░██──██░░██───██░░██───██░░██──██░░██──██░░██─██░░██──██░░██─██░░██████████─
─██░░██──██░░██───██░░██───██░░██──██░░██──██░░██─██░░██──██░░██─██░░░░░░░░░░██─
─██░░██──██░░██───██░░██───██░░██──██░░██──██░░██─██░░██──██░░██─██████████░░██─
─██░░░░██░░░░██───██░░██───██░░██──██░░██████░░██─██░░██──██░░██─────────██░░██─
─████░░░░░░████─████░░████─██░░██──██░░░░░░░░░░██─██░░████░░░░██─██████████░░██─
───████░░████───██░░░░░░██─██░░██──██████████░░██─██░░░░░░░░████─██░░░░░░░░░░██─
─────██████─────██████████─██████──────────██████─████████████───██████████████─
────────────────────────────────────────────────────────────────────────────────
Discord: V1NDs#0977
Steam: http://steamcommunity.com/id/V1NDs
Youtube: https://www.youtube.com/channel/UCaBZGvYryg09IS-uaSHyfPw
Github: https://github.com/V1NDs
*/

$(document).ready(function() {

    function display(bool) {
        if (bool) {
            $('.bars-container').show();
        } else {
            $('.bars-container').hide();
        }
    }

    display(false)

    $(function () {
        window.addEventListener('message', function (event) {
            var item = event.data;
            if (item.type === 'ui') {
                if (item.status == true) {
                    display(true)
                    if (item.walletAmount) { $('.bars-container > .wallet-bar > h3').text(`${item.walletAmount} DKK`); } 
                    else { $('.bars-container > .wallet-bar > h3').text(`Opdatere penge i pungen.`); }

                    if (item.bankAmount) { $('.bars-container > .bank-bar > h3').text(`${item.bankAmount} DKK`); }
                    else { $('.bars-container > .bank-bar > h3').text(`Opdatere penge i banken.`); }

                    if (item.dirtymoneyAmount) { $('.bars-container > .dirtymoney-bar > h3').text(`${item.dirtymoneyAmount} DKK`); }
                    else { $('.bars-container > .dirtymoney-bar > h3').text(`Opdatere sorte penge.`); }

                    $('.bars-container > .identity-bar > h3').text(item.userIdentityen);
                }
                if (item.status == false) {
                    display(false)
                }
            }
        })
    });
    
});
