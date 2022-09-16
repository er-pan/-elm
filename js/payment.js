window.onload = function() {
    // 获取按钮
    let showBtn = document.getElementById('showBtn')
    // 获取订单内容部分
    let detailetBox = document.getElementById('detailetBox')
    // 初始不显示
    detailetBox.style.display = 'none'
        
    showBtn.onclick = () => {
        if(detailetBox.style.display == 'none'){
            detailetBox.style.display = 'block'
        }else {
            detailetBox.style.display = 'none'
        }
    }
}