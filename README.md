# myMcdonalds
模拟微信小程序麦当劳
### 做了ofo之后觉得微信小程序很有趣，今天开始模拟一下麦当劳，顺便巩固一下知识
## 2018/02/02
###   1. 跳转页面时改变css样式
         由于微信小程序不能获取dom节点，在redirectTo的时候就不能将css样式直接改变，
          这时候可以选择应用data中写一个isChange来决定跳转时是true还是false，
![Code](/screenPics/changeCss.jpg)
####   核心代码在于{isChange[2]?'same':null}，判断是否修改isChange的值
![Code](/screenPics/changeCss2.jpg)

###    2.    wx.navigateBack({
###              dellta:2
###          })
        
        在进行回退的时候，想一次性回退多个页面。可以在onload函数中写入以上代码delta就是回退的层数，
###     最多回退5层

###    3. input框中初始value
       之前用html和css的时候，初始值都是用value，然后用onfocus事件改变，在微信小程序中，包含写好的placeholder 可以直接录入input框中的初始value
###    5. 获取输入框的值
![Code](/screenPics/getInput.jpg)


![Code](/screenPics/firstDay.mp4)


