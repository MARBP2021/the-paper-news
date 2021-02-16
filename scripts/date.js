


setInterval(()=>{

    const $fecha = document.querySelector('.header__date');
    const today = moment().format('MMMM Do YYYY, h:mm:ss');
    $fecha.textContent = today;

},1000)