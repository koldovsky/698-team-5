function openPartnerPopup(){
    document.body.style.overflow = 'hidden';
    document.getElementsByClassName('partner_popup_wrapper')[0].style.display = 'flex';
}
function closePartnerPopup(){
    document.body.style.overflow = 'auto';
    document.getElementsByClassName('partner_popup_wrapper')[0].style.display = 'none';
}