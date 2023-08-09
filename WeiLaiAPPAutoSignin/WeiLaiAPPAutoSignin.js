// auto.waitFor(); // 文档地址：https://docs.hamibot.com/reference/widgetsBasedAutomation
console.show()
console.log("——开始蔚来APP签到任务——")
console.log('开始启动app')
// 启动 Hamibot
launchApp('蔚来');
sleep(4000);

console.log('开始获取 我的 按钮');

let my_btn = text("我的").findOnce();
if (my_btn) {
    console.log("定位到并点击 我的");
    // console.log(my_btn.bounds())
    // console.log("X:"+my_btn.bounds().left+";Y:"+my_btn.bounds().centerY());
    var ok = click(my_btn.bounds().left-5, my_btn.bounds().centerY())
    sleep(2000);
    // text("开始").findOnce().click();
    console.log("开始找签到按钮");
    // 找到立刻签到按钮进行签到
    if(id('my_head_info_user_check_tip').exists()){
        var signin_widget = id('my_head_info_user_check_tip').findOne();
        // console.log("定位到并点击 立即签到");
        console.log(signin_widget.bounds())
        // console.log("X:"+signin_widget.bounds().centerX()+";Y:"+signin_widget.bounds().centerY());
        console.log('避免挡住签到按钮，隐藏控制台')
        console.hide();
        // click(210, 662)
        click(widget.bounds().centerX(), widget.bounds().centerY())
        sleep(1000);
        console.show();
        // text("开始").findOnce().click();
        console.log('签到成功')
    }else if(id('my_head_info_user_integral_text').exists()){
        console.log('消失一会');
        sleep(2000);
        console.hide();
        sleep(2000);
        var signin_over_widget = id('my_head_info_user_integral_text').findOnce();
        console.show();
        console.log('又出现了')
        console.log('今日已完成签到')   
    }else{
        console.log('特殊情况请反馈')
    }
}else{
    console.log('没有找到我的按钮')   
}
console.log("——结束蔚来APP签到任务——")