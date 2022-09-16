window.onload = function() {
    // 获取按钮
    let showBtn = document.querySelectorAll('.fa-caret-down')
    // 获取订单内容部分
    let detailetBox = document.querySelectorAll('.order-detailet')
    // 初始不显示
    for(let i = 0; i < detailetBox.length; i++) {
        detailetBox[i].style.display = 'none'
    }
    
    for(let i = 0; i < showBtn.length; i++) {
        showBtn[i].onclick = () => {
            if(detailetBox[i].style.display == 'none'){
                detailetBox[i].style.display = 'block'
            }else {
                detailetBox[i].style.display = 'none'
            }
        }
    }

}