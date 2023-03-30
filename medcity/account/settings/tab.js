/*==========TABS======*/
var account_wrapper = document.querySelector('.big-wrapper');
var tab_li1 = document.querySelector('.tab-li1');
var tab_li2 = document.querySelector('.tab-li2');
var tab_li3= document.querySelector('.tab-li3');

tab_li1.onclick = function(){
    account_wrapper.classList.add('account-tab');
    account_wrapper.classList.remove('password-tab');
    account_wrapper.classList.remove('del-tab');
    tab_active();
}
tab_li2.onclick = function () {
    account_wrapper.classList.remove('account-tab');
    account_wrapper.classList.add('password-tab');
    account_wrapper.classList.remove('del-tab');
    tab_active();
}
tab_li3.onclick = function () {
    account_wrapper.classList.remove('account-tab');
    account_wrapper.classList.remove('password-tab');
    account_wrapper.classList.add('del-tab');
    tab_active();
}
/*===================TAB-ACTIVE===================*/
function tab_active() {
    
    if (account_wrapper.classList.contains('account-tab')) {
        tab_li1.classList.add('active-tab');
        tab_li2.classList.remove('active-tab');
        tab_li3.classList.remove('active-tab');
    }
    else if (account_wrapper.classList.contains('password-tab')) {
        tab_li1.classList.remove('active-tab');
        tab_li2.classList.add('active-tab');
        tab_li3.classList.remove('active-tab');
    }
    else if (account_wrapper.classList.contains('del-tab')) {
        tab_li1.classList.remove('active-tab');
        tab_li2.classList.remove('active-tab');
        tab_li3.classList.add('active-tab');
    }
}
