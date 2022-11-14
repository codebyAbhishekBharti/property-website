const func1 = () => {
    document.getElementById('signup_head').style.color='black';
    document.getElementById('signup_head').style.borderBottomColor='black'

    document.getElementById('login_head').style.color='#d8232a';
    document.getElementById('login_head').style.borderBottomColor='#d8232a'

    document.getElementById('login_content').style.display='block';
    document.getElementById('signup_content').style.display='none';
}
const func2 = () => {
    document.getElementById('login_head').style.color='black';
    document.getElementById('login_head').style.borderBottomColor='black'

    document.getElementById('signup_head').style.color='#d8232a';
    document.getElementById('signup_head').style.borderBottomColor='#d8232a'

    document.getElementById('signup_content').style.display='block';
    document.getElementById('login_content').style.display='none';
}
const closefn = () =>{
    document.getElementById('login_popup').style.display='none';
    document.querySelector("body").style.overflow='auto'
}
const login_page_opener = () =>{
    document.getElementById('login_popup').style.display='flex';
    document.querySelector("body").style.overflow='hidden'
}