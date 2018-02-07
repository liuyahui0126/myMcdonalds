# myMcdonalds
模拟微信小程序麦当劳
### 做了ofo之后觉得微信小程序很有趣，今天开始模拟一下麦当劳，顺便巩固一下知识
## 2018/02/02
###   1. 跳转页面时改变css样式
         由于微信小程序不能获取dom节点，在redirectTo的时候就不能将css样式直接改变，
          这时候可以选择应用data中写一个isChange来决定跳转时是true还是false，
![Code](/screenPics/changeCss.jpg)
####   核心代码在于{isChange[2]?'same':null}，判断是否修改isChange的值
![changeCss2](/screenPics/changeCss2.jpg)

###    2.    wx.navigateBack({
###              dellta:2
###          })
        
        在进行回退的时候，想一次性回退多个页面。可以在onload函数中写入以上代码delta就是回退的层数，
###     最多回退5层

###    3. input框中初始value
       之前用html和css的时候，初始值都是用value，然后用onfocus事件改变，在微信小程序中，包含写好的placeholder 可以直接录入input框中的初始value
###    5. 获取输入框的值
![getInput](/screenPics/getInput.jpg)
## 2018/02/06

### 1.回退不能直接回退到第一个页面       
  在之前的了解中认为使用navigateBack可以回退到指定页面，但是在今天的练习中发现某个页面想浏览完毕后手动点击回退，是不能实现的。会造成这个页面闪一下
  就回退到指定页面。于是我百度了一下，发现有一种方式可以解决这个问题。  
  
   第一个页面采用navigateTo，  
    
   在第二个页面中使用redirectTo。    
   
   这样在第三个页面点击回退时，会直接回到第一个页面。    
   
   这是相当于在这个回退过程中直接销毁第二个页面   
   
### 2.箭头函数指向问题
![getInput](/screenPics/arrowFnc.jpg)  
由于需要在多个页面使用数据，所以我把数据存储在stroage中，在get的时候，由于success函数的this指向是当前对象，所以我修改了一下，使用箭头函数。   
在这里说一下箭头函数的特点。      
1.函数体内的this对象是定义时的对象，而不是使用时的对象。    
2.不可以当作构造函数（不可以new）       
3.没有arguments对象          

## 2018/02/07      
### flex布局（6个属性）        
  ##### flex-direction
  设置布局方向：     
  column/column-reverse/row/row-reverse           
  含有reverse的是逆序          
  ##### flex-wrap
  设置是否换行          
  wrap/nowrap（默认，不换行）/wrap-reverse（第一行在下面，逆序）        
  ##### flex-flow
  flex-flow: <flex-direction> || <flex-wrap>;   
  默认是row||nowrap     
  ##### justify-content
  space-between（两端对齐，项目之间的间隔相等）        
  /space-around（项目两侧间隔相等）         
  /flex-start（默认值，左对齐）          
  /flex-end（默认值，右对齐）          
  /center（居中）           
  ##### align-items
  交叉轴的对齐方式：          
  flex-start（交叉轴的起点对齐）          
  flex-end（交叉轴的终点对齐）          
  center（交叉轴的中点对齐）           
  baseline（项目的第一行文字的基线对齐）           
  stretch（默认值，如果项目未设置高度或设为auto，将占满整个容器的高度）               
  ##### align-content
  多个交叉轴对齐方式：             
  flex-start：与交叉轴的起点对齐。   
  flex-end：与交叉轴的终点对齐。                
  center：与交叉轴的中点对齐。            
  space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。               
  space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。        
  stretch（默认值）：轴线占满整个交叉轴。             
##### 使用了很久flex  今天才明白flex是felx-grow，flex-shrink，flex-basis的合并，后两个可以省略。     
